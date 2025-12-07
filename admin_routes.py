from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from datetime import datetime, timedelta
from sqlalchemy import func, desc
import json

# Import admin models and forms
from admin_models import AdminUser, SystemLog, AdminSettings, init_admin_models
from admin_forms import (
    AdminLoginForm, AdminSignupForm, AdminChangePasswordForm, 
    AdminSettingsForm, UserSearchForm, SystemLogFilterForm
)

# Create admin blueprint
admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

# Global variables to be set by main app
db = None
User = None
CostItem = None

def init_admin_routes(app_db, user_model, cost_item_model):
    """Initialize admin routes with app's database and models"""
    global db, User, CostItem
    db = app_db
    User = user_model
    CostItem = cost_item_model
    init_admin_models(app_db)

def admin_required(f):
    """Decorator to require admin authentication"""
    from functools import wraps
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated or not hasattr(current_user, 'role'):
            flash('Admin access required.', 'error')
            return redirect(url_for('admin.login'))
        return f(*args, **kwargs)
    return decorated_function

def log_admin_action(action, description, user_id=None, admin_id=None):
    """Log admin actions for audit trail"""
    try:
        log_entry = SystemLog(
            action=action,
            description=description,
            user_id=user_id,
            admin_id=admin_id,
            ip_address=request.remote_addr,
            user_agent=request.headers.get('User-Agent')
        )
        db.session.add(log_entry)
        db.session.commit()
    except Exception as e:
        print(f"Error logging admin action: {e}")

@admin_bp.route('/login', methods=['GET', 'POST'])
def login():
    """Admin login page"""
    if current_user.is_authenticated and hasattr(current_user, 'role'):
        return redirect(url_for('admin.dashboard'))
    
    form = AdminLoginForm()
    if form.validate_on_submit():
        admin = AdminUser.query.filter_by(username=form.username.data).first()
        if admin and admin.check_password(form.password.data) and admin.is_active:
            login_user(admin)
            admin.last_login = datetime.utcnow()
            db.session.commit()
            log_admin_action('login', f'Admin {admin.username} logged in', admin_id=admin.id)
            flash('Admin login successful!', 'success')
            return redirect(url_for('admin.dashboard'))
        flash('Invalid credentials or account disabled.', 'error')
    
    return render_template('admin/login.html', form=form)

@admin_bp.route('/logout')
@login_required
@admin_required
def logout():
    """Admin logout"""
    log_admin_action('logout', f'Admin {current_user.username} logged out', admin_id=current_user.id)
    logout_user()
    flash('Admin logged out successfully.', 'success')
    return redirect(url_for('admin.login'))

@admin_bp.route('/dashboard')
@login_required
@admin_required
def dashboard():
    """Admin dashboard with statistics"""
    try:
        # Get statistics
        total_users = User.query.count()
        total_cost_items = CostItem.query.count()
        total_admins = AdminUser.query.count()
        
        # Today's statistics
        today = datetime.utcnow().date()
        today_users = User.query.filter(func.date(User.id) == today).count()
        today_cost_items = CostItem.query.filter(func.date(CostItem.created_at) == today).count()
        
        # Recent activity
        recent_logs = SystemLog.query.order_by(desc(SystemLog.created_at)).limit(10).all()
        
        # User growth (last 7 days)
        user_growth = []
        for i in range(7):
            date = today - timedelta(days=i)
            count = User.query.filter(func.date(User.id) == date).count()
            user_growth.append({'date': date.strftime('%Y-%m-%d'), 'count': count})
        
        # Cost data statistics
        total_cost_amount = db.session.query(func.sum(CostItem.amount)).scalar() or 0
        avg_cost_per_user = total_cost_amount / total_users if total_users > 0 else 0
        
        stats = {
            'total_users': total_users,
            'total_cost_items': total_cost_items,
            'total_admins': total_admins,
            'today_users': today_users,
            'today_cost_items': today_cost_items,
            'total_cost_amount': total_cost_amount,
            'avg_cost_per_user': avg_cost_per_user,
            'recent_logs': recent_logs,
            'user_growth': user_growth
        }
        
        return render_template('admin/dashboard.html', stats=stats)
        
    except Exception as e:
        flash(f'Error loading dashboard: {str(e)}', 'error')
        return render_template('admin/dashboard.html', stats={})

@admin_bp.route('/users')
@login_required
@admin_required
def users():
    """Manage users"""
    form = UserSearchForm()
    page = request.args.get('page', 1, type=int)
    search_term = request.args.get('search_term', '')
    search_by = request.args.get('search_by', 'all')
    
    query = User.query
    
    if search_term:
        if search_by == 'username':
            query = query.filter(User.username.contains(search_term))
        elif search_by == 'email':
            query = query.filter(User.email.contains(search_term))
        else:
            query = query.filter(
                (User.username.contains(search_term)) | 
                (User.email.contains(search_term))
            )
    
    users = query.paginate(page=page, per_page=20, error_out=False)
    return render_template('admin/users.html', users=users, form=form)

@admin_bp.route('/user/<int:user_id>')
@login_required
@admin_required
def user_detail(user_id):
    """User detail view"""
    user = User.query.get_or_404(user_id)
    cost_items = CostItem.query.filter_by(user_id=user_id).order_by(desc(CostItem.created_at)).all()
    total_cost = sum(item.amount for item in cost_items)
    
    return render_template('admin/user_detail.html', user=user, cost_items=cost_items, total_cost=total_cost)

@admin_bp.route('/cost-items')
@login_required
@admin_required
def cost_items():
    """Manage cost items"""
    page = request.args.get('page', 1, type=int)
    cost_items = CostItem.query.order_by(desc(CostItem.created_at)).paginate(
        page=page, per_page=20, error_out=False
    )
    return render_template('admin/cost_items.html', cost_items=cost_items)

@admin_bp.route('/system-logs')
@login_required
@admin_required
def system_logs():
    """View system logs"""
    form = SystemLogFilterForm()
    page = request.args.get('page', 1, type=int)
    
    query = SystemLog.query
    
    # Apply filters
    action = request.args.get('action', 'all')
    if action != 'all':
        query = query.filter(SystemLog.action == action)
    
    date_from = request.args.get('date_from', '')
    date_to = request.args.get('date_to', '')
    
    if date_from:
        try:
            from_date = datetime.strptime(date_from, '%Y-%m-%d')
            query = query.filter(SystemLog.created_at >= from_date)
        except ValueError:
            pass
    
    if date_to:
        try:
            to_date = datetime.strptime(date_to, '%Y-%m-%d') + timedelta(days=1)
            query = query.filter(SystemLog.created_at < to_date)
        except ValueError:
            pass
    
    logs = query.order_by(desc(SystemLog.created_at)).paginate(
        page=page, per_page=50, error_out=False
    )
    
    return render_template('admin/system_logs.html', logs=logs, form=form)

@admin_bp.route('/settings', methods=['GET', 'POST'])
@login_required
@admin_required
def settings():
    """Admin settings management"""
    form = AdminSettingsForm()
    
    if form.validate_on_submit():
        try:
            # Check if setting already exists
            existing_setting = AdminSettings.query.filter_by(setting_key=form.setting_key.data).first()
            
            if existing_setting:
                existing_setting.setting_value = form.setting_value.data
                existing_setting.setting_type = form.setting_type.data
                existing_setting.description = form.description.data
                existing_setting.updated_by = current_user.id
            else:
                new_setting = AdminSettings(
                    setting_key=form.setting_key.data,
                    setting_value=form.setting_value.data,
                    setting_type=form.setting_type.data,
                    description=form.description.data,
                    updated_by=current_user.id
                )
                db.session.add(new_setting)
            
            db.session.commit()
            log_admin_action('settings_updated', f'Setting {form.setting_key.data} updated', admin_id=current_user.id)
            flash('Setting saved successfully!', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error saving setting: {str(e)}', 'error')
    
    # Get all settings
    all_settings = AdminSettings.query.order_by(AdminSettings.setting_key).all()
    return render_template('admin/settings.html', form=form, settings=all_settings)

@admin_bp.route('/profile', methods=['GET', 'POST'])
@login_required
@admin_required
def profile():
    """Admin profile management"""
    form = AdminChangePasswordForm()
    
    if form.validate_on_submit():
        if current_user.check_password(form.current_password.data):
            current_user.set_password(form.new_password.data)
            db.session.commit()
            log_admin_action('password_changed', 'Admin password changed', admin_id=current_user.id)
            flash('Password updated successfully!', 'success')
            return redirect(url_for('admin.dashboard'))
        else:
            flash('Current password is incorrect.', 'error')
    
    return render_template('admin/profile.html', form=form)

@admin_bp.route('/api/stats')
@login_required
@admin_required
def api_stats():
    """API endpoint for dashboard statistics"""
    try:
        # Get real-time statistics
        total_users = User.query.count()
        total_cost_items = CostItem.query.count()
        total_cost_amount = db.session.query(func.sum(CostItem.amount)).scalar() or 0
        
        # Today's stats
        today = datetime.utcnow().date()
        today_users = User.query.filter(func.date(User.id) == today).count()
        today_cost_items = CostItem.query.filter(func.date(CostItem.created_at) == today).count()
        
        stats = {
            'total_users': total_users,
            'total_cost_items': total_cost_items,
            'total_cost_amount': float(total_cost_amount),
            'today_users': today_users,
            'today_cost_items': today_cost_items
        }
        
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
