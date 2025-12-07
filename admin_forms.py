from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField, SelectField, BooleanField
from wtforms.validators import DataRequired, Email, Length, EqualTo, Optional

class AdminLoginForm(FlaskForm):
    """Admin login form"""
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=150)])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class AdminSignupForm(FlaskForm):
    """Admin signup form"""
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=150)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    full_name = StringField('Full Name', validators=[DataRequired(), Length(min=2, max=200)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    role = SelectField('Role', choices=[('admin', 'Admin'), ('super_admin', 'Super Admin')], validators=[DataRequired()])
    submit = SubmitField('Create Admin Account')

class AdminChangePasswordForm(FlaskForm):
    """Admin change password form"""
    current_password = PasswordField('Current Password', validators=[DataRequired()])
    new_password = PasswordField('New Password', validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField('Confirm New Password', validators=[DataRequired(), EqualTo('new_password')])
    submit = SubmitField('Update Password')

class AdminSettingsForm(FlaskForm):
    """Admin settings form"""
    setting_key = StringField('Setting Key', validators=[DataRequired(), Length(max=100)])
    setting_value = TextAreaField('Setting Value', validators=[DataRequired()])
    setting_type = SelectField('Setting Type', choices=[
        ('string', 'String'),
        ('integer', 'Integer'),
        ('boolean', 'Boolean'),
        ('json', 'JSON')
    ], validators=[DataRequired()])
    description = TextAreaField('Description', validators=[Optional(), Length(max=500)])
    submit = SubmitField('Save Setting')

class UserSearchForm(FlaskForm):
    """User search form for admin"""
    search_term = StringField('Search Term', validators=[Optional()])
    search_by = SelectField('Search By', choices=[
        ('username', 'Username'),
        ('email', 'Email'),
        ('all', 'All')
    ], validators=[DataRequired()])
    submit = SubmitField('Search')

class SystemLogFilterForm(FlaskForm):
    """System log filter form"""
    action = SelectField('Action', choices=[
        ('all', 'All Actions'),
        ('login', 'Login'),
        ('logout', 'Logout'),
        ('data_added', 'Data Added'),
        ('data_updated', 'Data Updated'),
        ('data_deleted', 'Data Deleted'),
        ('admin_action', 'Admin Action')
    ], validators=[DataRequired()])
    date_from = StringField('From Date', validators=[Optional()])
    date_to = StringField('To Date', validators=[Optional()])
    submit = SubmitField('Filter Logs')
