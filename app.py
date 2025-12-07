import hashlib
import os
import random
import sys
from datetime import datetime, timedelta
from io import BytesIO
import pytz
import requests
from dotenv import load_dotenv
from flask import (Flask,flash,jsonify,redirect,render_template,request, session,url_for,)
from flask_login import (LoginManager,UserMixin,current_user,login_required,login_user,logout_user,)
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, Image, HRFlowable
from sqlalchemy import desc, func, text, inspect as sqlalchemy_inspect
from werkzeug.security import check_password_hash, generate_password_hash
from wtforms import PasswordField, SelectField, StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, EqualTo, Length, Optional

from config import get_config
from ml_model import market_predictor

# Integrated Admin system (models, forms, routes)

# Load environment variables from .env file
load_dotenv()

# Get configuration based on environment
app_config = get_config()

app = Flask(__name__)
app.config.from_object(app_config)

db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = "login_selector"  # type: ignore


#Template Filters
@app.template_filter("weather_code_to_text")
def weather_code_to_text(code):
    """Convert weather code to human-readable text."""
    mapping = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
       55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail",
    }
    return mapping.get(code, "Unknown")


@app.template_filter("datetime_format")
def datetime_format(date_str):
    """Format date string to readable format."""
    try:
        if isinstance(date_str, str):
            date_obj = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
            return date_obj.strftime("%B %d, %Y")
        return str(date_str)
    except:
        return str(date_str)


#Models
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    # location = db.Column(db.String(100), nullable=True) 
    # plant_type = db.Column(db.String(100), nullable=True) 


class UserProfile(db.Model):
    """Extended user profile with personal details"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False, unique=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    mobile_number = db.Column(db.String(20), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=True)
    address_city = db.Column(db.String(100), nullable=True)
    address_line1 = db.Column(db.String(200), nullable=True)
    address_line2 = db.Column(db.String(200), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user = db.relationship("User", backref=db.backref("profile", uselist=False, cascade="all, delete-orphan"))
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"


class Cultivation(db.Model):
    """User cultivation/plantation details"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    area_name = db.Column(db.String(200), nullable=False)  # Area of cultivation
    city = db.Column(db.String(100), nullable=False)  # Location city
    sub_area = db.Column(db.String(100), nullable=True)  # Sub-area within city (exact location)
    surface_area = db.Column(db.Float, nullable=True)  # Surface area in square meters or acres
    initial_seedling_cost = db.Column(db.Float, default=0.0)
    initial_fertilizer_cost = db.Column(db.Float, default=0.0)
    initial_resource_cost = db.Column(db.Float, default=0.0)  # Human and machine resource costs
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user = db.relationship("User", backref=db.backref("cultivations", lazy=True, cascade="all, delete-orphan"))
    plants = db.relationship("PlantSelection", backref="cultivation", lazy=True, cascade="all, delete-orphan")
    additional_costs = db.relationship("CultivationAdditionalCost", backref="cultivation", lazy=True, cascade="all, delete-orphan")


class CultivationAdditionalCost(db.Model):
    """Additional costs for cultivation with custom names"""
    id = db.Column(db.Integer, primary_key=True)
    cultivation_id = db.Column(db.Integer, db.ForeignKey("cultivation.id"), nullable=False)
    cost_name = db.Column(db.String(200), nullable=False)  # Custom cost name
    amount = db.Column(db.Float, nullable=False, default=0.0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class PlantSelection(db.Model):
    """Plants selected by user for each cultivation"""
    id = db.Column(db.Integer, primary_key=True)
    cultivation_id = db.Column(db.Integer, db.ForeignKey("cultivation.id"), nullable=False)
    plant_name = db.Column(db.String(200), nullable=False)
    plant_category = db.Column(db.String(100), nullable=False)  # grains-legumes, fruity-vegetables, leafy-stem, root-tuberous
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Index for faster lookups
    __table_args__ = (db.Index('idx_cultivation_plant', 'cultivation_id', 'plant_name'),)


# Minimal model to support admin stats/pages and admin dashboard
class CostItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", backref=db.backref("cost_items", lazy=True))


class CostProfitRecord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    total_cost = db.Column(db.Float, nullable=False)
    total_revenue = db.Column(db.Float, nullable=False)
    market_price = db.Column(db.Float, nullable=False)
    profit = db.Column(db.Float, nullable=False)

    user = db.relationship("User", backref=db.backref("cost_profit_records", lazy=True))


class UserSession(db.Model):
    """Track active user sessions for online users count"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    session_id = db.Column(db.String(255), nullable=False, unique=True)
    ip_address = db.Column(db.String(45), nullable=True)
    user_agent = db.Column(db.Text, nullable=True)
    last_activity = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", backref=db.backref("sessions", lazy=True))


class SMSAlertSubscription(db.Model):
    """SMS weather alert subscriptions for farmers"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    alert_time = db.Column(db.String(10), default="08:00")  # Daily alert time (HH:MM)
    alert_types = db.Column(db.String(200), default="all")  # all, heavy_rain, extreme_temp, etc.
    language = db.Column(db.String(10), default="en")  # en, si, ta
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_alert_sent = db.Column(db.DateTime, nullable=True)
    
    user = db.relationship("User", backref=db.backref("sms_subscriptions", lazy=True))


class SMSAlertLog(db.Model):
    """Log of sent SMS alerts"""
    id = db.Column(db.Integer, primary_key=True)
    subscription_id = db.Column(db.Integer, db.ForeignKey("sms_alert_subscription.id"), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    message = db.Column(db.Text, nullable=False)
    weather_condition = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), default="sent")  # sent, failed, pending
    error_message = db.Column(db.Text, nullable=True)
    sent_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    subscription = db.relationship("SMSAlertSubscription", backref=db.backref("alert_logs", lazy=True))


# Admin Models 
class AdminUser(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    full_name = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), default="admin")
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime)

    def set_password(self, password):
        self.password = generate_password_hash(password, method="pbkdf2:sha256")

    def check_password(self, password):
        return check_password_hash(self.password, password)


class SystemLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)
    admin_id = db.Column(db.Integer, db.ForeignKey("admin_user.id"), nullable=True)
    action = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    ip_address = db.Column(db.String(45), nullable=True)
    user_agent = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", backref=db.backref("system_logs", lazy=True))
    admin = db.relationship("AdminUser", backref=db.backref("system_logs", lazy=True))


class AdminSettings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    setting_key = db.Column(db.String(100), unique=True, nullable=False)
    setting_value = db.Column(db.Text, nullable=False)
    setting_type = db.Column(db.String(50), default="string")
    description = db.Column(db.Text, nullable=True)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    updated_by = db.Column(db.Integer, db.ForeignKey("admin_user.id"), nullable=True)

    admin = db.relationship(
        "AdminUser", backref=db.backref("settings_updates", lazy=True)
    )


# Admin Forms
class AdminLoginForm(FlaskForm):
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=4, max=150)]
    )
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Login")


class AdminRegisterForm(FlaskForm):
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=4, max=150)]
    )
    email = StringField("Email", validators=[DataRequired(), Email()])
    full_name = StringField("Full Name", validators=[DataRequired(), Length(max=200)])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField(
        "Confirm Password", validators=[DataRequired(), EqualTo("password")]
    )
    verification_key = StringField("Verification Key", validators=[DataRequired()])
    submit = SubmitField("Register Admin")


class AdminChangePasswordForm(FlaskForm):
    current_password = PasswordField("Current Password", validators=[DataRequired()])
    new_password = PasswordField(
        "New Password", validators=[DataRequired(), Length(min=6)]
    )
    confirm_password = PasswordField(
        "Confirm New Password", validators=[DataRequired(), EqualTo("new_password")]
    )
    submit = SubmitField("Update Password")


class AdminSettingsForm(FlaskForm):
    setting_key = StringField(
        "Setting Key", validators=[DataRequired(), Length(max=100)]
    )
    setting_value = TextAreaField("Setting Value", validators=[DataRequired()])
    setting_type = SelectField(
        "Setting Type",
        choices=[
            ("string", "String"),
            ("integer", "Integer"),
            ("boolean", "Boolean"),
            ("json", "JSON"),
        ],
        validators=[DataRequired()],
    )
    description = TextAreaField("Description", validators=[Optional(), Length(max=500)])
    submit = SubmitField("Save Setting")


class UserSearchForm(FlaskForm):
    search_term = StringField("Search Term", validators=[Optional()])
    search_by = SelectField(
        "Search By",
        choices=[("username", "Username"), ("email", "Email"), ("all", "All")],
        validators=[DataRequired()],
    )
    submit = SubmitField("Search")


class SystemLogFilterForm(FlaskForm):
    action = SelectField(
        "Action",
        choices=[
            ("all", "All Actions"),
            ("login", "Login"),
            ("logout", "Logout"),
            ("data_added", "Data Added"),
            ("data_updated", "Data Updated"),
            ("data_deleted", "Data Deleted"),
            ("admin_action", "Admin Action"),
        ],
        validators=[DataRequired()],
    )
    date_from = StringField("From Date", validators=[Optional()])
    date_to = StringField("To Date", validators=[Optional()])
    submit = SubmitField("Filter Logs")


# Forms
class LoginForm(FlaskForm):
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=4, max=150)]
    )
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Login")


class SignupForm(FlaskForm):
    # Part 1: User personal details
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=4, max=150)]
    )
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField(
        "Confirm Password", validators=[DataRequired(), EqualTo("password")]
    )
    first_name = StringField("First Name", validators=[DataRequired(), Length(max=100)])
    last_name = StringField("Last Name", validators=[DataRequired(), Length(max=100)])
    mobile_number = StringField("Mobile Number", validators=[DataRequired(), Length(min=9, max=15)])
    date_of_birth = StringField("Date of Birth", validators=[Optional()])
    address_city = StringField("City", validators=[Optional(), Length(max=100)])
    address_line1 = StringField("Address Line 1", validators=[Optional(), Length(max=200)])
    address_line2 = StringField("Address Line 2", validators=[Optional(), Length(max=200)])
    submit = SubmitField("Sign Up")


class SettingsForm(FlaskForm):
    current_password = PasswordField("Current Password", validators=[DataRequired()])
    new_password = PasswordField(
        "New Password", validators=[DataRequired(), Length(min=6)]
    )
    confirm_password = PasswordField(
        "Confirm New Password", validators=[DataRequired(), EqualTo("new_password")]
    )
    submit = SubmitField("Update Password")


class SMSSubscriptionForm(FlaskForm):
    """Form for farmers to subscribe to SMS weather alerts"""
    phone_number = StringField(
        "Phone Number", 
        validators=[DataRequired(), Length(min=9, max=15)],
        description="Enter your phone number (e.g., 0771234567 or +94771234567)"
    )
    city = SelectField(
        "City",
        choices=[
            # North Central Province
            ("Anuradhapura", "Anuradhapura"),
            ("Mihintale", "Mihintale"),
            ("Kekirawa", "Kekirawa"),
            ("Medawachchiya", "Medawachchiya"),
            ("Habarana", "Habarana"),
            ("Eppawala", "Eppawala"),
            ("Galenbindunuwewa", "Galenbindunuwewa"),
            ("Galnewa", "Galnewa"),
            ("Horowupotana", "Horowupotana"),
            ("Kahatagasdigiliya", "Kahatagasdigiliya"),
            ("Bulnewa", "Bulnewa"),
            ("Ganewalpola", "Ganewalpola"),
            ("Polonnaruwa", "Polonnaruwa"),
            # North Western Province
            ("Kurunegala", "Kurunegala"),
            ("Puttalam", "Puttalam"),
            ("Chilaw", "Chilaw"),
            ("Kuliyapitiya", "Kuliyapitiya"),
            ("Narammala", "Narammala"),
            # Western Province
            ("Colombo", "Colombo"),
            ("Gampaha", "Gampaha"),
            ("Kalutara", "Kalutara"),
            ("Negombo", "Negombo"),
            ("Moratuwa", "Moratuwa"),
            ("Panadura", "Panadura"),
            # Central Province
            ("Kandy", "Kandy"),
            ("Nuwara Eliya", "Nuwara Eliya"),
            ("Matale", "Matale"),
            ("Hatton", "Hatton"),
            ("Gampola", "Gampola"),
            # Sabaragamuwa Province
            ("Ratnapura", "Ratnapura"),
            ("Kegalle", "Kegalle"),
            ("Balangoda", "Balangoda"),
            ("Avissawella", "Avissawella"),
            # Southern Province
            ("Galle", "Galle"),
            ("Matara", "Matara"),
            ("Hambantota", "Hambantota"),
            ("Weligama", "Weligama"),
            ("Tangalle", "Tangalle"),
            # Uva Province
            ("Badulla", "Badulla"),
            ("Monaragala", "Monaragala"),
            ("Bandarawela", "Bandarawela"),
            ("Haputale", "Haputale"),
            # Eastern Province
            ("Batticaloa", "Batticaloa"),
            ("Trincomalee", "Trincomalee"),
            ("Ampara", "Ampara"),
            ("Kalmunai", "Kalmunai"),
            # Northern Province
            ("Jaffna", "Jaffna"),
            ("Vavuniya", "Vavuniya"),
            ("Kilinochchi", "Kilinochchi"),
            ("Mullaitivu", "Mullaitivu"),
        ],
        validators=[DataRequired()]
    )
    alert_types = SelectField(
        "Alert Types",
        choices=[
            ("all", "All Weather Alerts"),
            ("heavy_rain", "Heavy Rain Only"),
            ("extreme_temp", "Extreme Temperatures Only"),
            ("severe", "Severe Weather Only (Heavy Rain, Storms)"),
        ],
        validators=[DataRequired()],
        default="all"
    )
    alert_time = StringField(
        "Daily Alert Time",
        validators=[DataRequired()],
        default="08:00",
        description="Time to receive daily alerts (24-hour format, e.g., 08:00)"
    )
    language = SelectField(
        "Language",
        choices=[("en", "English"), ("si", "Sinhala"), ("ta", "Tamil")],
        validators=[DataRequired()],
        default="en"
    )
    submit = SubmitField("Subscribe to SMS Alerts")


# Helpers 
def get_greeting():
    try:
        tz = pytz.timezone("Asia/Colombo")
        hour = datetime.now(tz).hour
        if hour < 12:
            return "Good Morning"
        elif hour < 17:
            return "Good Afternoon"
        else:
            return "Good Evening"
    except:
        return "Hello"


def get_weather_data(city):
    """Fetch weather data from Open-Meteo API."""
    # Coordinates for predefined cities (latitude, longitude)
    cities = {
        # North Central Province
        "Anuradhapura": (8.3114, 80.4037),
        "Mihintale": (8.3594, 80.5006),
        "Kekirawa": (8.0333, 80.5833),
        "Medawachchiya": (8.5333, 80.4667),
        "Habarana": (8.0333, 80.75),
        "Eppawala": (8.1333, 80.5167),
        "Galenbindunuwewa": (8.3167, 80.6333),
        "Galnewa": (8.2, 80.5667),
        "Horowupotana": (8.9667, 80.8167),
        "Kahatagasdigiliya": (8.9667, 80.6667),
        "Bulnewa": (8.3167, 80.3167),
        "Ganewalpola": (8.3167, 80.3167),
        "Polonnaruwa": (7.9333, 81.0000),
        # North Western Province
        "Kurunegala": (7.4833, 80.3667),
        "Puttalam": (8.0333, 79.8333),
        "Chilaw": (7.5750, 79.7958),
        "Kuliyapitiya": (7.4667, 80.0500),
        "Narammala": (7.4333, 80.2333),
        # Western Province
        "Colombo": (6.9271, 79.8612),
        "Gampaha": (7.0917, 79.9997),
        "Kalutara": (6.5833, 79.9667),
        "Negombo": (7.2083, 79.8358),
        "Moratuwa": (6.7733, 79.8825),
        "Panadura": (6.7167, 79.9000),
        # Central Province
        "Kandy": (7.2906, 80.6337),
        "Nuwara Eliya": (6.9497, 80.7891),
        "Matale": (7.4675, 80.6234),
        "Hatton": (6.8917, 80.5958),
        "Gampola": (7.1667, 80.5667),
        # Sabaragamuwa Province
        "Ratnapura": (6.6828, 80.4011),
        "Kegalle": (7.2500, 80.3500),
        "Balangoda": (6.6500, 80.7000),
        "Avissawella": (6.9500, 80.2167),
        # Southern Province
        "Galle": (6.0329, 80.2170),
        "Matara": (5.9549, 80.5550),
        "Hambantota": (6.1244, 81.1186),
        "Weligama": (5.9750, 80.4292),
        "Tangalle": (6.0233, 80.7917),
        # Uva Province
        "Badulla": (6.9934, 81.0550),
        "Monaragala": (6.8667, 81.3500),
        "Bandarawela": (6.8333, 80.9833),
        "Haputale": (6.7667, 80.9667),
        # Eastern Province
        "Batticaloa": (7.7102, 81.6924),
        "Trincomalee": (8.5874, 81.2152),
        "Ampara": (7.2833, 81.6667),
        "Kalmunai": (7.4167, 81.8167),
        # Northern Province
        "Jaffna": (9.6615, 80.0255),
        "Vavuniya": (8.7500, 80.5000),
        "Kilinochchi": (9.4000, 80.4000),
        "Mullaitivu": (9.2667, 80.8167),
    }

    if city not in cities:
        return None

    lat, lon = cities[city]
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia/Colombo&forecast_days=3"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Weather API error: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None


def get_weather_forecast_for_tomorrow(city):
    """Get tomorrow's weather forecast for SMS alerts"""
    weather_data = get_weather_data(city)
    if not weather_data or "daily" not in weather_data:
        return None
    
    try:
        daily = weather_data["daily"]
        # Get tomorrow's data (index 1, since index 0 is today)
        if len(daily["time"]) < 2:
            return None
        
        tomorrow_data = {
            "date": daily["time"][1],
            "weather_code": daily["weather_code"][1],
            "temperature_max": daily["temperature_2m_max"][1],
            "temperature_min": daily["temperature_2m_min"][1],
            "precipitation": daily["precipitation_sum"][1] if "precipitation_sum" in daily else 0,
        }
        return tomorrow_data
    except (IndexError, KeyError) as e:
        print(f"Error parsing weather forecast: {e}")
        return None


def get_plant_protection_advice(weather_code, precipitation, temperature_max, temperature_min, language="en"):
    """Generate plant protection advice based on weather conditions, localized by language"""
    advice = []

    def t(en_text, si_text):
        return si_text if language == "si" else en_text

    # Heavy rain advice (codes 65, 67, 82, 95, 96, 99)
    if weather_code in [65, 67, 82, 95, 96, 99] or precipitation > 20:
        advice.append(t("⚠️ HEAVY RAIN ALERT:", "⚠️ තද වැසි අනතුරු අඟවීම:"))
        advice.append(t("• Cover plants with plastic sheets", "• කෘෂි වගා පස් මත පලාස්ටික් තහඩු ආවරණය කරන්න"))
        advice.append(t("• Ensure proper drainage", "• ජලාපවහනය සකස් කර තිබේදැයි බලන්න"))
        advice.append(t("• Move potted plants indoors", "• කුඩු පඳුරු ඇතුළතට ගෙන යන්න"))
        advice.append(t("• Avoid fertilizer application", "• පොහොර යෙදීමෙන් වළකින්න"))
        advice.append(t("• Check for waterlogging", "• ජල බැඳීමක් තියෙනවාද බලන්න"))

    # Moderate rain (codes 63, 80, 81)
    elif weather_code in [63, 80, 81] or (precipitation > 5 and precipitation <= 20):
        advice.append(t("📊 MODERATE RAIN:", "📊 සාමාන්‍ය වර්ෂාපතනය:"))
        advice.append(t("• Check drainage systems", "• ජලාපවහන මාර්ග පිරිසිදු කර තිබේද බලන්න"))
        advice.append(t("• Cover sensitive crops", "• සංවේදී වගා ආවරණය කරන්න"))
        advice.append(t("• Delay irrigation", "• ජලදීම ප්‍රමාද කරන්න"))

    # Extreme heat (temperature > 35°C)
    elif temperature_max > 35:
        advice.append(t("🌡️ HIGH TEMPERATURE:", "🌡️ ඉහළ උෂ්ණත්වය:"))
        advice.append(t("• Increase watering frequency", "• ජලදීමේ ගණන වැඩි කරන්න"))
        advice.append(t("• Provide shade for plants", "• වගා සඳහා සෙවන ලබා දෙන්න"))
        advice.append(t("• Water early morning/evening", "• උදෑසන හෝ සන්ධ්‍යා කාලයේ ජලදීම කරන්න"))
        advice.append(t("• Mulch to retain moisture", "• තෙතමන තබා ගැනීමට මල්ච් යොදන්න"))
        advice.append(t("• Avoid midday sun exposure", "• මධ්‍යහන සූරියාලෝකයෙන් වැළකී සිටින්න"))

    # Low temperature (temperature < 15°C)
    elif temperature_min < 15:
        advice.append(t("❄️ LOW TEMPERATURE:", "❄️ අඩු උෂ්ණත්වය:"))
        advice.append(t("• Cover plants at night", "• රාත්‍රීයේ වගා ආවරණය කරන්න"))
        advice.append(t("• Use frost protection", "• හිම සහතික ආරක්ෂණ මාර්ග භාවිතා කරන්න"))
        advice.append(t("• Move sensitive plants indoors", "• සංවේදී වගා ඇතුළතට మార్చන්න"))
        advice.append(t("• Reduce watering", "• ජලදීම අඩු කරන්න"))

    # Thunderstorm (codes 95, 96, 99)
    if weather_code in [95, 96, 99]:
        advice.append(t("⚡ THUNDERSTORM WARNING:", "⚡ ගිනිකඳ සහිත කුණාටු අනතුරු ඇඟවීම:"))
        advice.append(t("• Secure loose structures", "• අස්ථිර වස්තු සුරක්ෂිත කරන්න"))
        advice.append(t("• Avoid working in fields", "• ගොවිතැනේ වැඩ කිරීමෙන් වැළකී සිටින්න"))
        advice.append(t("• Protect electrical equipment", "• විද්‍යුත් උපකරණ ආරක්ෂා කරන්න"))

    # Clear/sunny weather
    if weather_code in [0, 1] and precipitation < 1:
        advice.append(t("☀️ CLEAR WEATHER:", "☀️ පරිස්සම් සුළං කාලය:"))
        advice.append(t("• Good day for planting", "• ප්‍රතිරුපණ සඳහා හොඳ දවසක්"))
        advice.append(t("• Ideal for harvesting", "• අස්වනු ගන්න අනුවැදි වේලාවක්"))
        advice.append(t("• Regular irrigation needed", "• නිතර ජලදීම අවශ්‍යයි"))
        advice.append(t("• Monitor soil moisture", "• මට්ටමේ තෙතමන පරීක්ෂා කරමින් සිටින්න"))

    return "\n".join(advice) if advice else ("සාමාන්‍ය කාලගුණ තත්ත්වය. සාමාන්‍ය ගොවි කාර්යයන් දිගටම කරගෙන යන්න." if language == "si" else "Normal weather conditions. Continue regular farming practices.")


def format_weather_alert_sms(city, weather_data, language="en"):
    """Format weather alert message for SMS"""
    if not weather_data:
        return None
    
    weather_code = weather_data["weather_code"]
    temp_max = weather_data["temperature_max"]
    temp_min = weather_data["temperature_min"]
    precipitation = weather_data.get("precipitation", 0)
    date = weather_data["date"]
    
    # Weather descriptions (EN/SI)
    weather_descriptions_en = {
        0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
        45: "Foggy", 48: "Foggy", 51: "Light drizzle", 53: "Moderate drizzle",
        55: "Dense drizzle", 61: "Slight rain", 63: "Moderate rain",
        65: "Heavy rain", 67: "Heavy freezing rain", 71: "Slight snow",
        73: "Moderate snow", 75: "Heavy snow", 80: "Slight rain showers",
        81: "Moderate rain showers", 82: "Violent rain showers",
        85: "Slight snow showers", 86: "Heavy snow showers",
        95: "Thunderstorm", 96: "Thunderstorm with hail",
        99: "Thunderstorm with heavy hail"
    }
    weather_descriptions_si = {
        0: "නිල් නිවහන", 1: "මුළුමනින් පැහැදිලි", 2: "අඩි වැසිවැසි", 3: "සුළන්",
        45: "මීදුම් සහිතයිසහිතයි", 48: "මීදුම් සහිත අකුණු", 51: "වැසි", 53: "මධ්‍යම වැසි",
        55: "දැඩි වැසි", 61: "සුළු වර්ෂාපතනය", 63: "මධ්‍යම වර්ෂාපතනය",
        65: "තද වැසි", 67: "හිම සහිත වැසි", 71: "සුළු හිම", 73: "මධ්‍යම හිම",
        75: "ඉතා තද හිම", 80: "සුළු වැසි තැවරීම්", 81: "මධ්‍යම වැසි තැවරීම්",
        82: "ඉතා තද වැසි තැවරීම්", 85: "සුළු හිම වැටීම්", 86: "ඉතා තද හිම වැටීම්",
        95: "ගිගුරුම් සහිත කුණාටු", 96: "කුණාටු", 99: "ඉතා දැඩි කුණාටු"
    }

    if language == "si":
        weather_desc = weather_descriptions_si.get(weather_code, "නොදනී")
        message = f"WeatherGuard අනතුරු ඇඟවීම\n{city} - {date}\n{weather_desc}\nඋෂ්ණත්වය: {temp_min}-{temp_max}°C\nවැසි: {precipitation}mm"
    else:
        weather_desc = weather_descriptions_en.get(weather_code, "Unknown")
        message = f"WeatherGuard Alert\n{city} - {date}\n{weather_desc}\nTemp: {temp_min}-{temp_max}°C\nRain: {precipitation}mm"

    # Add plant protection advice (localized)
    advice = get_plant_protection_advice(weather_code, precipitation, temp_max, temp_min, language)
    
    return {
        "weather_alert": message,
        "protection_advice": advice,
        "weather_code": weather_code,
        "weather_desc": weather_desc,
        "needs_alert": weather_code in [65, 67, 82, 95, 96, 99] or precipitation > 20 or temp_max > 35 or temp_min < 15
    }


def send_sms_via_api(phone_number, message, api_provider=None):
    """
    Send SMS using API providers.
    Defaults to Twilio, supports Textbelt as fallback.
    """
    try:
        # Get provider from environment or use default
        if api_provider is None:
            api_provider = os.getenv("SMS_PROVIDER", "twilio").lower()
        
        # Format phone number (ensure it starts with country code)
        if not phone_number.startswith("+"):
            if phone_number.startswith("0"):
                # Sri Lanka number: 0771234567 -> +94771234567
                phone_number = "+94" + phone_number[1:]
            elif phone_number.startswith("94"):
                # Already has country code but missing +
                phone_number = "+" + phone_number
            else:
                # Assume Sri Lanka number
                phone_number = "+94" + phone_number
        
        # Remove any spaces or dashes
        phone_number = phone_number.replace(" ", "").replace("-", "")
        
        if api_provider == "twilio":
            # Twilio SMS API
            account_sid = os.getenv("TWILIO_ACCOUNT_SID", "ACd39865067b3c076ebe6d7c4d6708029c")
            auth_token = os.getenv("TWILIO_AUTH_TOKEN", "3ed48a9a02b9307b3c4c81ce0a1a1d55")
            from_number = os.getenv("TWILIO_PHONE_NUMBER", "+19033075922")
            
            # Use provided credentials if env vars are not set
            if not account_sid or account_sid == "":
                account_sid = "ACd39865067b3c076ebe6d7c4d6708029c"
            if not auth_token or auth_token == "":
                auth_token = "3ed48a9a02b9307b3c4c81ce0a1a1d55"
            if not from_number or from_number == "":
                from_number = "+19033075922"
            
            try:
                from twilio.rest import Client
                client = Client(account_sid, auth_token)
                message_obj = client.messages.create(
                    body=message,
                    from_=from_number,
                    to=phone_number
                )
                return {"success": True, "message_id": message_obj.sid, "provider": "twilio"}
            except ImportError:
                return {"success": False, "error": "Twilio library not installed. Run: pip install twilio", "provider": "twilio"}
            except Exception as e:
                error_msg = str(e)
                # Try fallback if Twilio fails
                fallback = os.getenv("SMS_FALLBACK_PROVIDER", "textbelt").lower()
                if fallback and fallback != "twilio":
                    print(f"Twilio failed: {error_msg}. Trying fallback: {fallback}")
                    return send_sms_via_api(phone_number, message, api_provider=fallback)
                return {"success": False, "error": error_msg, "provider": "twilio"}
        
        elif api_provider == "textbelt":
            # Textbelt API (fallback option)
            api_key = os.getenv("TEXTBELT_API_KEY", "")
            url = "https://textbelt.com/text"
            payload = {
                "phone": phone_number,
                "message": message,
                "key": api_key if api_key else "textbelt"
            }
            response = requests.post(url, data=payload, timeout=10)
            result = response.json()
            
            if result.get("success"):
                return {"success": True, "message_id": result.get("textId"), "provider": "textbelt"}
            else:
                error_msg = result.get("error", "Unknown error")
                return {"success": False, "error": error_msg, "provider": "textbelt"}
        
        elif api_provider == "sms_api":
            # Generic SMS API (can be configured)
            api_url = os.getenv("SMS_API_URL", "")
            api_key = os.getenv("SMS_API_KEY", "")
            
            if not api_url:
                return {"success": False, "error": "SMS API URL not configured", "provider": "sms_api"}
            
            payload = {
                "to": phone_number,
                "message": message,
                "key": api_key
            }
            response = requests.post(api_url, json=payload, timeout=10)
            result = response.json()
            return {"success": result.get("success", False), "message_id": result.get("id"), "provider": "sms_api"}
        
        else:
            return {"success": False, "error": f"Unknown API provider: {api_provider}", "provider": api_provider}
    
    except Exception as e:
        print(f"Error sending SMS: {e}")
        import traceback
        traceback.print_exc()
        return {"success": False, "error": str(e), "provider": api_provider}


def check_and_send_weather_alerts():
    """Check weather forecasts and send alerts to subscribed farmers"""
    try:
        # Get all active subscriptions
        subscriptions = SMSAlertSubscription.query.filter_by(is_active=True).all()
        
        if not subscriptions:
            print("No active SMS subscriptions found.")
            return
        
        alerts_sent = 0
        alerts_failed = 0
        
        for subscription in subscriptions:
            try:
                # Get tomorrow's weather forecast
                tomorrow_weather = get_weather_forecast_for_tomorrow(subscription.city)
                
                if not tomorrow_weather:
                    print(f"Could not fetch weather for {subscription.city}")
                    continue
                
                # Format alert message
                alert_data = format_weather_alert_sms(
                    subscription.city,
                    tomorrow_weather,
                    subscription.language
                )
                
                if not alert_data:
                    continue
                
                # Check if alert is needed based on subscription preferences
                needs_alert = False
                if subscription.alert_types == "all":
                    needs_alert = True
                elif subscription.alert_types == "heavy_rain" and alert_data["needs_alert"]:
                    needs_alert = alert_data["weather_code"] in [65, 67, 82] or tomorrow_weather["precipitation"] > 20
                elif subscription.alert_types == "extreme_temp" and alert_data["needs_alert"]:
                    needs_alert = tomorrow_weather["temperature_max"] > 35 or tomorrow_weather["temperature_min"] < 15
                else:
                    needs_alert = alert_data["needs_alert"]
                
                # Send alert if needed
                if needs_alert:
                    # Get SMS API provider from environment (default to Twilio)
                    sms_provider = os.getenv("SMS_PROVIDER", "twilio")
                    
                    # Send weather alert
                    result = send_sms_via_api(
                        subscription.phone_number,
                        alert_data["weather_alert"],
                        sms_provider
                    )
                    
                    if result["success"]:
                        # Send protection advice as second message if it's important
                        if alert_data["needs_alert"] and len(alert_data["protection_advice"]) > 50:
                            # Send advice in separate SMS
                            send_sms_via_api(
                                subscription.phone_number,
                                alert_data["protection_advice"],
                                sms_provider
                            )
                        
                        # Log successful alert
                        alert_log = SMSAlertLog(
                            subscription_id=subscription.id,
                            phone_number=subscription.phone_number,
                            message=alert_data["weather_alert"],
                            weather_condition=alert_data["weather_desc"] if "weather_desc" in alert_data else "Unknown",
                            city=subscription.city,
                            status="sent"
                        )
                        db.session.add(alert_log)
                        
                        # Update subscription last_alert_sent
                        subscription.last_alert_sent = datetime.utcnow()
                        alerts_sent += 1
                    else:
                        # Log failed alert
                        alert_log = SMSAlertLog(
                            subscription_id=subscription.id,
                            phone_number=subscription.phone_number,
                            message=alert_data["weather_alert"],
                            weather_condition=alert_data["weather_desc"] if "weather_desc" in alert_data else "Unknown",
                            city=subscription.city,
                            status="failed",
                            error_message=result.get("error", "Unknown error")
                        )
                        db.session.add(alert_log)
                        alerts_failed += 1
                
            except Exception as e:
                print(f"Error processing subscription {subscription.id}: {e}")
                alerts_failed += 1
                continue
        
        # Commit all changes
        db.session.commit()
        print(f"Weather alerts sent: {alerts_sent} successful, {alerts_failed} failed")
        return {"sent": alerts_sent, "failed": alerts_failed}
    
    except Exception as e:
        db.session.rollback()
        print(f"Error in check_and_send_weather_alerts: {e}")
        import traceback
        traceback.print_exc()
        return {"sent": 0, "failed": 0, "error": str(e)}


def weather_code_to_icon(code):
    """Map Open-Meteo weather code to icon class."""
    mapping = {
        0: "clear-sky",
        1: "mainly-clear",
        2: "partly-cloudy",
        3: "overcast",
        45: "fog",
        48: "fog",
        51: "light-rain",
        53: "moderate-rain",
        55: "heavy-rain",
        56: "light-rain",
        57: "heavy-rain",
        61: "light-rain",
        63: "moderate-rain",
        65: "heavy-rain",
        66: "light-rain",
        67: "heavy-rain",
        71: "snow",
        73: "snow",
        75: "snow",
        77: "snow",
        80: "light-rain",
        81: "moderate-rain",
        82: "heavy-rain",
        85: "snow",
        86: "snow",
        95: "thunderstorm",
        96: "thunderstorm",
        99: "thunderstorm",
    }
    return mapping.get(code, "clear-sky")


# Routes
def admin_required(f):
    from functools import wraps

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if (
            not current_user.is_authenticated
            or not hasattr(current_user, "role")
            or not isinstance(current_user, AdminUser)
        ):
            flash("Admin access required. Please login.", "error")
            return redirect(url_for("admin_login"))
        # Prevent regular users from accessing admin pages
        if current_user.is_authenticated and isinstance(current_user, User):
            flash("Admin access required. Please login with an admin account.", "error")
            return redirect(url_for("home"))
        return f(*args, **kwargs)

    return decorated_function


def user_required(f):
    """Decorator to ensure only regular users (not admins) can access user pages"""
    from functools import wraps

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated:
            flash("Please login to access this page.", "error")
            return redirect(url_for("login_selector"))
        # SECURITY: Block admins from accessing user pages
        if hasattr(current_user, "role") and isinstance(current_user, AdminUser):
            flash("Admin accounts cannot access the normal user website. Please use the admin panel.", "error")
            return redirect(url_for("admin_dashboard"))
        # Only allow regular users
        return f(*args, **kwargs)

    return decorated_function


def update_user_session(user_id):
    """Create or update user session for tracking active users"""
    try:
        # Generate a unique session identifier using Flask session
        # Use Flask's session ID if available, otherwise create one from IP and user_id
        flask_session_id = session.get("_id") or session.get("_permanent_session_lifetime")
        if not flask_session_id:
            # Create a session identifier from request data
            flask_session_id = f"{request.remote_addr}_{user_id}"
        
        session_identifier = f"{flask_session_id}_{user_id}"
        session_id = hashlib.md5(session_identifier.encode()).hexdigest()
        
        ip_address = request.remote_addr or "unknown"
        user_agent = (request.headers.get("User-Agent", "") or "")[:500]  # Limit length
        
        # Check if session exists for this user with this session_id
        user_session = UserSession.query.filter_by(
            user_id=user_id, 
            session_id=session_id
        ).first()
        
        if user_session:
            # Update last activity
            user_session.last_activity = datetime.utcnow()
            user_session.ip_address = ip_address
            if user_agent:
                user_session.user_agent = user_agent
        else:
            # Check if user has other active sessions (limit to prevent spam)
            existing_sessions = UserSession.query.filter_by(user_id=user_id).count()
            if existing_sessions < 5:  # Allow up to 5 concurrent sessions per user
                # Create new session
                user_session = UserSession(
                    user_id=user_id,
                    session_id=session_id,
                    ip_address=ip_address,
                    user_agent=user_agent,
                    last_activity=datetime.utcnow()
                )
                db.session.add(user_session)
            else:
                # Update the oldest session instead
                oldest_session = UserSession.query.filter_by(
                    user_id=user_id
                ).order_by(UserSession.last_activity.asc()).first()
                if oldest_session:
                    oldest_session.session_id = session_id
                    oldest_session.last_activity = datetime.utcnow()
                    oldest_session.ip_address = ip_address
                    if user_agent:
                        oldest_session.user_agent = user_agent
        
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print(f"Error updating user session: {e}")


def get_online_users_count():
    """Get count of users active in the last 30 minutes"""
    try:
        thirty_minutes_ago = datetime.utcnow() - timedelta(minutes=30)
        # Get distinct user_ids with recent activity
        # First get all distinct user_ids that have active sessions
        distinct_user_ids = db.session.query(
            UserSession.user_id
        ).filter(
            UserSession.last_activity >= thirty_minutes_ago
        ).distinct().all()
        
        # Count the distinct user IDs
        active_count = len(distinct_user_ids) if distinct_user_ids else 0
        return active_count
    except Exception as e:
        print(f"Error getting online users count: {e}")
        import traceback
        traceback.print_exc()
        return 0


def cleanup_expired_sessions():
    """Remove sessions that haven't been active for more than 1 hour"""
    try:
        one_hour_ago = datetime.utcnow() - timedelta(hours=1)
        expired_sessions = UserSession.query.filter(
            UserSession.last_activity < one_hour_ago
        ).delete()
        db.session.commit()
        return expired_sessions
    except Exception as e:
        db.session.rollback()
        print(f"Error cleaning up expired sessions: {e}")
        return 0


def log_admin_action(action, description, user_id=None, admin_id=None):
    try:
        log_entry = SystemLog(
            action=action,
            description=description,
            user_id=user_id,
            admin_id=admin_id,
            ip_address=request.remote_addr,
            user_agent=request.headers.get("User-Agent"),
        )
        db.session.add(log_entry)
        db.session.commit()
    except Exception as e:
        print(f"Error logging admin action: {e}")


@app.route("/admin/login", methods=["GET", "POST"])
def admin_login():
    # If already logged in as admin, redirect to admin dashboard
    if (
        current_user.is_authenticated
        and hasattr(current_user, "role")
        and isinstance(current_user, AdminUser)
    ):
        return redirect(url_for("admin_dashboard"))
    # If logged in as regular user, show message that they need to logout first
    if current_user.is_authenticated and isinstance(current_user, User):
        flash("You are currently logged in as a regular user. Please logout first or use a different browser/tab to login as admin.", "info")
        # Don't redirect, let them try to login (they'll be logged out of user session)
    form = AdminLoginForm()
    if form.validate_on_submit():
        username = form.username.data
        
        # SECURITY: Check if this username belongs to a regular user account
        user_check = User.query.filter_by(username=username).first()
        if user_check:
            flash("This is a regular user account. Admin accounts and regular user accounts are separate. Please use the correct login page.", "error")
            return render_template("admin/login.html", form=form)
        
        # Only allow admin users to login
        admin = AdminUser.query.filter_by(username=username).first()
        if admin and admin.check_password(form.password.data) and admin.is_active:
            # If user was logged in as regular user, logout first
            if current_user.is_authenticated and isinstance(current_user, User):
                logout_user()
                session.pop("user_type", None)
            login_user(admin, remember=True)
            session["user_type"] = "admin"
            admin.last_login = datetime.utcnow()
            db.session.commit()
            log_admin_action(
                "login", f"Admin {admin.username} logged in", admin_id=admin.id
            )
            flash("Admin login successful!", "success")
            return redirect(url_for("admin_dashboard"))
        flash("Invalid credentials or account disabled.", "error")
    return render_template("admin/login.html", form=form)


@app.route("/admin/register", methods=["GET", "POST"])
@login_required
@admin_required
def admin_register():
    """Admin registration - only accessible by existing admins for security"""
    form = AdminRegisterForm()
    if form.validate_on_submit():
        # Double check verification key (additional security layer)
        if form.verification_key.data != "WG123":
            flash("Invalid verification key. Please use the correct key.", "error")
            return render_template("admin/register.html", form=form)
        if AdminUser.query.filter_by(username=form.username.data).first():
            flash("Username already exists.", "error")
            return render_template("admin/register.html", form=form)
        if AdminUser.query.filter_by(email=form.email.data).first():
            flash("Email already exists.", "error")
            return render_template("admin/register.html", form=form)
        # Check if email is already used by a regular user
        if User.query.filter_by(email=form.email.data).first():
            flash("This email is already registered as a regular user. Please use a different email.", "error")
            return render_template("admin/register.html", form=form)
        try:
            new_admin = AdminUser(
                username=form.username.data,
                email=form.email.data,
                full_name=form.full_name.data,
                role="admin",
                is_active=True,
            )
            new_admin.set_password(form.password.data)
            db.session.add(new_admin)
            db.session.commit()
            log_admin_action(
                "admin_registered", 
                f"New admin user '{new_admin.username}' registered by admin '{current_user.username}'",
                admin_id=current_user.id
            )
            flash("Admin account created successfully! The new admin can now login.", "success")
            return redirect(url_for("admin_dashboard"))
        except Exception as e:
            db.session.rollback()
            flash(f"Error creating admin account: {str(e)}", "error")
    return render_template("admin/register.html", form=form)


@app.route("/admin/logout")
@login_required
@admin_required
def admin_logout():
    log_admin_action(
        "logout", f"Admin {current_user.username} logged out", admin_id=current_user.id
    )
    logout_user()
    session.pop("user_type", None)
    flash("Admin logged out successfully.", "success")
    return redirect(url_for("admin_login"))


@app.route("/admin/dashboard")
@login_required
@admin_required
def admin_dashboard():
    return render_template("admin/dashboard.html")


@app.route("/admin/db-management")
@login_required
@admin_required
def admin_db_management():
    db_stats = {}
    try:
        # Check database type from config
        db_uri = app.config.get("SQLALCHEMY_DATABASE_URI", "")
        
        if "sqlite" in db_uri.lower():
            # SQLite database size calculation
            import os
            # Extract database path from URI (sqlite:///path/to/db.db)
            db_path = db_uri.replace("sqlite:///", "").split("?")[0]
            
            if os.path.exists(db_path):
                # Get file size in bytes
                file_size_bytes = os.path.getsize(db_path)
                # Convert to MB
                file_size_mb = file_size_bytes / (1024 * 1024)
                
                db_stats["total_mb"] = file_size_mb
                db_stats["used_mb"] = file_size_mb
                db_stats["used_percent"] = 100.0
                db_stats["error"] = None
            else:
                db_stats["error"] = f"Database file not found at: {db_path}"
        elif "mysql" in db_uri.lower():
            # MySQL database size calculation
            query = text(
                """
                SELECT table_schema AS `database`,
                SUM(data_length + index_length) / 1024 / 1024 AS `size_in_mb`
                FROM information_schema.tables
                WHERE table_schema = DATABASE()
                GROUP BY table_schema;
                """
            )
            result = db.session.execute(query).fetchone()
            if result:
                db_stats["total_mb"] = result.size_in_mb
                db_stats["used_mb"] = result.size_in_mb
                db_stats["used_percent"] = 100.0
                db_stats["error"] = None
            else:
                db_stats["error"] = "Could not fetch database size."
        else:
            db_stats["error"] = f"Unsupported database type: {db_uri.split('://')[0] if '://' in db_uri else 'unknown'}"

    except Exception as e:
        db_stats["error"] = str(e)

    return render_template("admin/db_management.html", db_stats=db_stats)


@app.route("/admin/clear-database", methods=["POST"])
@login_required
@admin_required
def admin_clear_database():
    try:
        # Delete records from all tables in a safe order
        # Start with tables that have foreign keys pointing to others
        db.session.query(CostItem).delete()
        db.session.query(CostProfitRecord).delete()
        db.session.query(SystemLog).delete()
        db.session.query(AdminSettings).delete()

        # Now delete from tables that are referenced
        db.session.query(User).delete()
        db.session.query(AdminUser).delete()

        db.session.commit()
        flash("All data has been successfully cleared from the database.", "success")
    except Exception as e:
        db.session.rollback()
        flash(f"An error occurred while clearing the database: {str(e)}", "error")
    return redirect(url_for("admin_db_management"))


@app.route("/admin/user-management")
@login_required
@admin_required
def admin_user_management():
    # Get user statistics
    total_users = User.query.count()
    # Get count of online users (active in last 30 minutes)
    online_users = get_online_users_count()

    user_stats = {
        "total_users": total_users,
        "online_users": online_users,
    }

    # Get all users to display in the table
    users = User.query.all()

    # Get location data for the pie chart
    # location_data_query = (
    #     db.session.query(User.location, func.count(User.id).label("count"))
    #     .filter(User.location.isnot(None) & (User.location != ""))
    #     .group_by(User.location)
    #     .order_by(func.count(User.id).desc())
    #     .all()
    # )

    # location_data = [
    #     {"location": location, "count": count}
    #     for location, count in location_data_query
    # ]
    
    # <-- REMOVED: location column does not exist. Set location data to empty.
    location_data = []

    return render_template(
        "admin/user_management.html",
        user_stats=user_stats,
        users=users,
        location_data=location_data,
    )


@app.route("/admin/delete-user", methods=["POST"])
@login_required
@admin_required
def admin_delete_user():
    username_to_delete = request.form.get("username")
    reason = request.form.get("reason")

    if not username_to_delete or not reason:
        flash("Username and reason for deletion are required.", "error")
        return redirect(url_for("admin_user_management"))

    user_to_delete = User.query.filter_by(username=username_to_delete).first()

    if user_to_delete:
        try:
            # Log the action before deleting
            log_admin_action(
                action="user_deleted",
                description=f"Admin '{current_user.username}' deleted user '{username_to_delete}'. Reason: {reason}",
                admin_id=current_user.id,
            )

            # Delete the user and all their related data (due to cascading deletes)
            db.session.delete(user_to_delete)
            db.session.commit()
            flash(
                f"User '{username_to_delete}' has been permanently deleted.", "success"
            )
        except Exception as e:
            db.session.rollback()
            flash(f"Error deleting user: {str(e)}", "error")
    else:
        flash(f"User '{username_to_delete}' not found.", "error")

    return redirect(url_for("admin_user_management"))


@app.route("/admin/users")
@login_required
@admin_required
def admin_users():
    form = UserSearchForm()
    page = request.args.get("page", 1, type=int)
    search_term = request.args.get("search_term", "")
    search_by = request.args.get("search_by", "all")
    query = User.query
    if search_term:
        if search_by == "username":
            query = query.filter(User.username.contains(search_term))
        elif search_by == "email":
            query = query.filter(User.email.contains(search_term))
        else:
            query = query.filter(
                (User.username.contains(search_term))
                | (User.email.contains(search_term))
            )
    users = query.paginate(page=page, per_page=20, error_out=False)
    return render_template("admin/users.html", users=users, form=form)


@app.route("/admin/user/<int:user_id>")
@login_required
@admin_required
def admin_user_detail(user_id):
    user = User.query.get_or_404(user_id)
    cost_items = (
        CostItem.query.filter_by(user_id=user_id)
        .order_by(desc(CostItem.created_at))
        .all()
    )
    total_cost = sum(item.amount for item in cost_items)
    return render_template(
        "admin/user_detail.html",
        user=user,
        cost_items=cost_items,
        total_cost=total_cost,
    )


@app.route("/admin/cost-items")
@login_required
@admin_required
def admin_cost_items():
    page = request.args.get("page", 1, type=int)
    cost_items = CostItem.query.order_by(desc(CostItem.created_at)).paginate(
        page=page, per_page=20, error_out=False
    )
    return render_template("admin/cost_items.html", cost_items=cost_items)


@app.route("/admin/system-logs")
@login_required
@admin_required
def admin_system_logs():
    form = SystemLogFilterForm()
    page = request.args.get("page", 1, type=int)
    query = SystemLog.query
    action = request.args.get("action", "all")
    if action != "all":
        query = query.filter(SystemLog.action == action)
    date_from = request.args.get("date_from", "")
    date_to = request.args.get("date_to", "")
    if date_from:
        try:
            from_date = datetime.strptime(date_from, "%Y-%m-%d")
            query = query.filter(SystemLog.created_at >= from_date)
        except ValueError:
            pass
    if date_to:
        try:
            to_date = datetime.strptime(date_to, "%Y-%m-%d") + timedelta(days=1)
            query = query.filter(SystemLog.created_at < to_date)
        except ValueError:
            pass
    logs = query.order_by(desc(SystemLog.created_at)).paginate(
        page=page, per_page=50, error_out=False
    )
    return render_template("admin/system_logs.html", logs=logs, form=form)


@app.route("/admin/settings", methods=["GET", "POST"])
@login_required
@admin_required
def admin_settings():
    form = AdminSettingsForm()
    if form.validate_on_submit():
        try:
            existing_setting = AdminSettings.query.filter_by(
                setting_key=form.setting_key.data
            ).first()
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
                    updated_by=current_user.id,
                )
                db.session.add(new_setting)
            db.session.commit()
            log_admin_action(
                "settings_updated",
                f"Setting {form.setting_key.data} updated",
                admin_id=current_user.id,
            )
            flash("Setting saved successfully!", "success")
        except Exception as e:
            db.session.rollback()
            flash(f"Error saving setting: {str(e)}", "error")
    all_settings = AdminSettings.query.order_by(AdminSettings.setting_key).all()
    return render_template("admin/settings.html", form=form, settings=all_settings)


@app.route("/admin/profile", methods=["GET", "POST"])
@login_required
@admin_required
def admin_profile():
    form = AdminChangePasswordForm()
    if form.validate_on_submit():
        if current_user.check_password(form.current_password.data):
            current_user.set_password(form.new_password.data)
            db.session.commit()
            log_admin_action(
                "password_changed", "Admin password changed", admin_id=current_user.id
            )
            flash("Password updated successfully!", "success")
            return redirect(url_for("admin_dashboard"))
        else:
            flash("Current password is incorrect.", "error")
    return render_template("admin/profile.html", form=form)


@login_manager.user_loader
def load_user(user_id):
    """
    Loads a user object from the database.
    This function is called by Flask-Login on every request for an authenticated user.
    It uses a session variable 'user_type' to determine whether to load a regular
    user or an admin user, preventing ID conflicts between the two user tables.
    """
    user_type = session.get("user_type")
    try:
        if user_type == "admin":
            return AdminUser.query.get(int(user_id))
        elif user_type == "user":
            return User.query.get(int(user_id))
        # If user_type is not in session (e.g., old "remember me" cookie),
        # return None to force re-authentication.
        return None
    except (ValueError, TypeError):
        # Handle cases where user_id is not a valid integer.
        return None


@app.before_request
def before_request():
    """Update user session activity and enforce access control"""
    # Skip static files, login pages, and signup
    excluded_endpoints = ('static', 'admin_login', 'admin_register', 'login_selector', 'user_login', 'signup', 'home')
    if request.endpoint in excluded_endpoints or request.path.startswith('/static'):
        # Still update user sessions for home page if user is logged in
        if request.endpoint == 'home' and current_user.is_authenticated and isinstance(current_user, User):
            update_user_session(current_user.id)
        return
    
    # SECURITY: Enforce strict separation - admins can only access admin routes
    if current_user.is_authenticated and hasattr(current_user, "role") and isinstance(current_user, AdminUser):
        # If admin tries to access user routes (not starting with /admin), redirect to admin dashboard
        if not request.path.startswith('/admin') and request.endpoint and not request.endpoint.startswith('admin_'):
            flash("Admin accounts can only access the admin panel. Redirecting to admin dashboard.", "info")
            return redirect(url_for("admin_dashboard"))
    
    # Update session for logged-in regular users only (not admins)
    if current_user.is_authenticated and isinstance(current_user, User):
        update_user_session(current_user.id)
    
    # Cleanup expired sessions periodically (every 10th request to avoid overhead)
    if random.randint(1, 10) == 1:
        cleanup_expired_sessions()


@app.route("/", methods=["GET", "POST"])
def home():
    # SECURITY: Redirect admins to admin dashboard - they cannot access user website
    if current_user.is_authenticated and hasattr(current_user, "role") and isinstance(current_user, AdminUser):
        flash("Admin accounts cannot access the normal user website. Redirecting to admin panel.", "info")
        return redirect(url_for("admin_dashboard"))
    
    greeting = get_greeting() if current_user.is_authenticated else None
    search_result = None
    user_plants = {}
    
    # Get user's plants organized by category
    if current_user.is_authenticated and isinstance(current_user, User):
        cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
        for cultivation in cultivations:
            plants = PlantSelection.query.filter_by(cultivation_id=cultivation.id).all()
            for plant in plants:
                category = plant.plant_category
                if category not in user_plants:
                    user_plants[category] = []
                user_plants[category].append({
                    'name': plant.plant_name,
                    'area_name': cultivation.area_name,
                    'city': cultivation.city,
                    'cultivation_id': cultivation.id
                })
    
    if request.method == "POST" and current_user.is_authenticated:
        city = request.form.get("city")
        if city:
            search_result = get_weather_data(city)
            if not search_result:
                flash("Unable to fetch weather data. Please try again.", "error")
        else:
            flash("Please select a city.", "error")
    return render_template(
        "index.html",
        greeting=greeting,
        user=current_user,
        search_result=search_result,
        weather_code_to_icon=weather_code_to_icon,
        user_plants=user_plants,
    )


@app.route("/weather", methods=["GET", "POST"])
@login_required
@user_required
def weather():
    greeting = get_greeting()
    weather_data = None
    selected_city = None
    selected_sub_area = None
    
    # Get user's cultivations for location selection
    cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
    
    if request.method == "POST":
        city = request.form.get("city")
        sub_area = request.form.get("sub_area")
        if city:
            selected_city = city
            selected_sub_area = sub_area
            weather_data = get_weather_data(city)
            if not weather_data:
                flash("Unable to fetch weather data. Please try again.", "error")
        else:
            flash("Please select a city.", "error")
    
    # Get selected plant from session
    selected_plant = session.get('selected_plant')
    selected_category = session.get('selected_category')
    selected_plant_city = session.get('selected_plant_city')
    selected_plant_area = session.get('selected_plant_area')
    
    return render_template(
        "weather.html",
        greeting=greeting,
        user=current_user,
        weather_data=weather_data,
        selected_city=selected_city,
        selected_sub_area=selected_sub_area,
        cultivations=cultivations,
        selected_plant=selected_plant,
        selected_category=selected_category,
        selected_plant_city=selected_plant_city,
        selected_plant_area=selected_plant_area,
        weather_code_to_icon=weather_code_to_icon,
    )


@app.route("/plant-tracking")
@login_required
@user_required
def plant_tracking():
    # Get user's cultivations with plants
    cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
    cultivation_data = []
    for cultivation in cultivations:
        plants = PlantSelection.query.filter_by(cultivation_id=cultivation.id).all()
        cultivation_data.append({
            'cultivation': cultivation,
            'plants': plants
        })
    
    # Get selected plant from session if available
    selected_plant = session.get('selected_plant')
    selected_category = session.get('selected_category')
    selected_plant_location = session.get('selected_plant_location')
    selected_plant_city = session.get('selected_plant_city')
    selected_plant_area = session.get('selected_plant_area')
    
    return render_template("plant_tracking.html", 
                         user=current_user,
                         cultivation_data=cultivation_data,
                         selected_plant=selected_plant,
                         selected_category=selected_category,
                         selected_plant_location=selected_plant_location,
                         selected_plant_city=selected_plant_city,
                         selected_plant_area=selected_plant_area)


@app.route("/login", methods=["GET"])
@app.route("/login-selector", methods=["GET"])
def login_selector():
    """Login selection page - choose admin or normal user (default login page)"""
    # If already logged in, redirect based on user type
    if current_user.is_authenticated:
        if hasattr(current_user, "role") and isinstance(current_user, AdminUser):
            return redirect(url_for("admin_dashboard"))
        else:
            return redirect(url_for("home"))
    return render_template("login_selector.html")


@app.route("/user-login", methods=["GET", "POST"])
def user_login():
    """Normal user login page - admins cannot login here"""
    # If already logged in as regular user, redirect to home
    if current_user.is_authenticated and isinstance(current_user, User):
        return redirect(url_for("home"))
    # If logged in as admin, redirect them to admin dashboard
    if current_user.is_authenticated and hasattr(current_user, "role") and isinstance(current_user, AdminUser):
        flash("Admin accounts cannot access the normal user website. Please use the admin panel.", "error")
        return redirect(url_for("admin_dashboard"))
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        
        # SECURITY: Check if this username belongs to an admin account
        admin_check = AdminUser.query.filter_by(username=username).first()
        if admin_check:
            flash("This is an admin account. Please use the admin login page to access the admin panel.", "error")
            return render_template("login.html", form=form)
        
        # Only allow regular users to login
        user = User.query.filter_by(username=username).first()
        if (
            user
            and form.password.data
            and check_password_hash(user.password, form.password.data)
        ):
            login_user(user, remember=True)
            session["user_type"] = "user"
            # Create/update user session for tracking
            update_user_session(user.id)
            flash("Login successful!", "success")
            return redirect(url_for("home"))
        flash("Invalid username or password.", "error")
    return render_template("login.html", form=form)


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if current_user.is_authenticated:
        return redirect(url_for("home"))
    form = SignupForm()
    
    # Handle form submission
    if form.validate_on_submit():
        if User.query.filter_by(username=form.username.data).first():
            flash("Username already exists.", "error")
        elif User.query.filter_by(email=form.email.data).first():
            flash("Email already registered.", "error")
        else:
            try:
                if form.password.data:
                    hashed_password = generate_password_hash(
                        form.password.data, method="pbkdf2:sha256"
                    )
                else:
                    flash("Password is required.", "error")
                    return render_template("signup.html", form=form)
                
                # Create user
                new_user = User(
                    username=form.username.data,
                    email=form.email.data,
                    password=hashed_password,
                )
                db.session.add(new_user)
                db.session.flush()  # Get user ID
                
                # Create user profile
                dob = None
                if form.date_of_birth.data:
                    try:
                        dob = datetime.strptime(form.date_of_birth.data, "%Y-%m-%d").date()
                    except:
                        pass
                
                user_profile = UserProfile(
                    user_id=new_user.id,
                    first_name=form.first_name.data,
                    last_name=form.last_name.data,
                    mobile_number=form.mobile_number.data,
                    date_of_birth=dob,
                    address_city=form.address_city.data,
                    address_line1=form.address_line1.data,
                    address_line2=form.address_line2.data
                )
                db.session.add(user_profile)
                
                # Handle cultivation data from JSON (sent via AJAX)
                cultivation_data = request.form.get("cultivation_data")
                if cultivation_data:
                    try:
                        import json
                        cultivations = json.loads(cultivation_data)
                        for cult_data in cultivations:
                            cultivation = Cultivation(
                                user_id=new_user.id,
                                area_name=cult_data.get("area_name", ""),
                                city=cult_data.get("city", ""),
                                sub_area=cult_data.get("sub_area", ""),
                                surface_area=float(cult_data.get("surface_area", 0)) if cult_data.get("surface_area") else None,
                                initial_seedling_cost=float(cult_data.get("initial_seedling_cost", 0)) if cult_data.get("initial_seedling_cost") else 0.0,
                                initial_fertilizer_cost=float(cult_data.get("initial_fertilizer_cost", 0)) if cult_data.get("initial_fertilizer_cost") else 0.0,
                                initial_resource_cost=float(cult_data.get("initial_resource_cost", 0)) if cult_data.get("initial_resource_cost") else 0.0
                            )
                            db.session.add(cultivation)
                            db.session.flush()  # Get cultivation ID
                            
                            # Add additional costs
                            additional_costs = cult_data.get("additional_costs", [])
                            for cost_data in additional_costs:
                                additional_cost = CultivationAdditionalCost(
                                    cultivation_id=cultivation.id,
                                    cost_name=cost_data.get("name", ""),
                                    amount=float(cost_data.get("amount", 0)) if cost_data.get("amount") else 0.0
                                )
                                db.session.add(additional_cost)
                            
                            # Add plant selections
                            plants = cult_data.get("plants", [])
                            for plant in plants:
                                plant_selection = PlantSelection(
                                    cultivation_id=cultivation.id,
                                    plant_name=plant.get("name", ""),
                                    plant_category=plant.get("category", "")
                                )
                                db.session.add(plant_selection)
                    except Exception as e:
                        print(f"Error processing cultivation data: {e}")
                        import traceback
                        traceback.print_exc()
                
                db.session.commit()
                flash("Account created successfully! Please log in.", "success")
                return redirect(url_for("login_selector"))
            except Exception as e:
                db.session.rollback()
                flash("Error creating account. Please try again.", "error")
                print(f"User creation error: {e}")
                import traceback
                traceback.print_exc()
    
    # Get cities for location selection from the cities dictionary in get_weather_data
    cities = sorted([
        "Anuradhapura", "Mihintale", "Kekirawa", "Medawachchiya", "Habarana", "Eppawala",
        "Galenbindunuwewa", "Galnewa", "Horowupotana", "Kahatagasdigiliya", "Bulnewa",
        "Ganewalpola", "Polonnaruwa", "Kurunegala", "Puttalam", "Chilaw", "Kuliyapitiya",
        "Narammala", "Colombo", "Gampaha", "Kalutara", "Negombo", "Moratuwa", "Panadura",
        "Kandy", "Nuwara Eliya", "Matale", "Hatton", "Gampola", "Ratnapura", "Kegalle",
        "Balangoda", "Avissawella", "Galle", "Matara", "Hambantota", "Weligama", "Tangalle",
        "Badulla", "Monaragala", "Bandarawela", "Haputale", "Batticaloa", "Trincomalee",
        "Ampara", "Kalmunai", "Jaffna", "Vavuniya", "Kilinochchi", "Mullaitivu"
    ])
    
    return render_template("signup.html", form=form, cities=cities)


@app.route("/support", methods=["GET", "POST"])
@login_required
@user_required
def support():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        if name and email and message and len(message) <= 500:  # Basic validation
            flash("Your message has been sent!", "success")
        else:
            flash(
                "Please fill out all fields correctly (message max 500 characters).",
                "error",
            )
        return redirect(url_for("support"))
    greeting = get_greeting()
    return render_template("support.html", greeting=greeting, user=current_user)


@app.route("/about-us")
def about_us():
    """About Us page - public route"""
    greeting = get_greeting() if current_user.is_authenticated else None
    return render_template("about_us.html", greeting=greeting, user=current_user)


@app.route("/profile")
@login_required
@user_required
def profile():
    greeting = get_greeting()
    # Get user profile (with error handling for schema migration)
    try:
        user_profile = UserProfile.query.filter_by(user_id=current_user.id).first()
    except Exception as e:
        if "no such column" in str(e).lower():
            # Schema needs migration - trigger it
            migrate_database()
            user_profile = UserProfile.query.filter_by(user_id=current_user.id).first()
        else:
            raise
    # Get user's cultivations with plants and additional costs
    cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
    cultivation_data = []
    for cultivation in cultivations:
        plants = PlantSelection.query.filter_by(cultivation_id=cultivation.id).all()
        additional_costs = CultivationAdditionalCost.query.filter_by(cultivation_id=cultivation.id).all()
        cultivation_data.append({
            'cultivation': cultivation,
            'plants': plants,
            'additional_costs': additional_costs
        })
    
    # Get cities for location selection
    cities = sorted([
        "Anuradhapura", "Mihintale", "Kekirawa", "Medawachchiya", "Habarana", "Eppawala",
        "Galenbindunuwewa", "Galnewa", "Horowupotana", "Kahatagasdigiliya", "Bulnewa",
        "Ganewalpola", "Polonnaruwa", "Kurunegala", "Puttalam", "Chilaw", "Kuliyapitiya",
        "Narammala", "Colombo", "Gampaha", "Kalutara", "Negombo", "Moratuwa", "Panadura",
        "Kandy", "Nuwara Eliya", "Matale", "Hatton", "Gampola", "Ratnapura", "Kegalle",
        "Balangoda", "Avissawella", "Galle", "Matara", "Hambantota", "Weligama", "Tangalle",
        "Badulla", "Monaragala", "Bandarawela", "Haputale", "Batticaloa", "Trincomalee",
        "Ampara", "Kalmunai", "Jaffna", "Vavuniya", "Kilinochchi", "Mullaitivu"
    ])
    
    return render_template("profile.html", greeting=greeting, user=current_user, 
                         user_profile=user_profile, cultivation_data=cultivation_data, cities=cities)


@app.route("/profile/add-cultivation", methods=["POST"])
@login_required
@user_required
def add_cultivation():
    """Add a new cultivation area"""
    try:
        area_name = request.form.get("area_name")
        city = request.form.get("city")
        sub_area = request.form.get("sub_area", "")
        surface_area = request.form.get("surface_area")
        
        if not area_name or not city:
            flash("Area name and city are required.", "error")
            return redirect(url_for("profile"))
        
        cultivation = Cultivation(
            user_id=current_user.id,
            area_name=area_name,
            city=city,
            sub_area=sub_area,
            surface_area=float(surface_area) if surface_area else None,
            initial_seedling_cost=0.0,
            initial_fertilizer_cost=0.0,
            initial_resource_cost=0.0
        )
        db.session.add(cultivation)
        db.session.commit()
        flash("Cultivation area added successfully!", "success")
    except Exception as e:
        db.session.rollback()
        flash(f"Error adding cultivation: {str(e)}", "error")
    return redirect(url_for("profile"))


@app.route("/set-selected-plant", methods=["POST"])
@login_required
@user_required
def set_selected_plant():
    """Store selected plant in session"""
    data = request.get_json()
    session['selected_plant'] = data.get('plant')
    session['selected_category'] = data.get('category')
    session['selected_plant_location'] = data.get('location', '')
    session['selected_plant_city'] = data.get('city', '')
    session['selected_plant_area'] = data.get('area_name', '')
    return jsonify({"success": True})


@app.route("/profile/add-plant", methods=["POST"])
@login_required
@user_required
def add_plant():
    """Add a plant to a cultivation"""
    try:
        cultivation_id = request.form.get("cultivation_id")
        plant_name = request.form.get("plant_name")
        plant_category = request.form.get("plant_category")
        
        if not all([cultivation_id, plant_name, plant_category]):
            flash("All fields are required.", "error")
            return redirect(url_for("profile"))
        
        # Verify cultivation belongs to user
        cultivation = Cultivation.query.filter_by(id=cultivation_id, user_id=current_user.id).first()
        if not cultivation:
            flash("Invalid cultivation area.", "error")
            return redirect(url_for("profile"))
        
        # Check if plant already exists
        existing = PlantSelection.query.filter_by(
            cultivation_id=cultivation_id,
            plant_name=plant_name
        ).first()
        if existing:
            flash("This plant is already added to this cultivation area.", "error")
            return redirect(url_for("profile"))
        
        plant_selection = PlantSelection(
            cultivation_id=cultivation_id,
            plant_name=plant_name,
            plant_category=plant_category
        )
        db.session.add(plant_selection)
        db.session.commit()
        flash("Plant added successfully!", "success")
    except Exception as e:
        db.session.rollback()
        flash(f"Error adding plant: {str(e)}", "error")
    return redirect(url_for("profile"))


@app.route("/settings", methods=["GET", "POST"])
@login_required
@user_required
def settings():
    form = SettingsForm()
    if form.validate_on_submit():
        if form.current_password.data and check_password_hash(
            current_user.password, form.current_password.data
        ):
            if form.new_password.data == form.current_password.data:
                flash(
                    "New password cannot be the same as the current password.", "error"
                )
            else:
                try:
                    if form.new_password.data:
                        current_user.password = generate_password_hash(
                            form.new_password.data, method="pbkdf2:sha256"
                        )
                    else:
                        flash("New password is required.", "error")
                        return render_template(
                            "settings.html",
                            greeting=get_greeting(),
                            user=current_user,
                            form=form,
                        )
                    db.session.commit()
                    flash("Password updated successfully!", "success")
                    return redirect(url_for("profile"))
                except Exception as e:
                    db.session.rollback()
                    flash("Error updating password. Please try again.", "error")
                    print(f"Password update error: {e}")
        else:
            flash("Current password is incorrect.", "error")
    greeting = get_greeting()
    return render_template(
        "settings.html", greeting=greeting, user=current_user, form=form
    )


@app.route("/delete-account", methods=["POST"])
@login_required
@user_required
def delete_account():
    """Delete user account and all associated data"""
    # Check if confirmation checkbox is checked
    if not request.form.get("confirm_delete"):
        flash("Please confirm that you want to delete your account by checking the box.", "error")
        return redirect(url_for("settings"))
    
    try:
        user_id = current_user.id
        username = current_user.username
        
        # Delete all related data manually (models without cascade delete)
        # Delete CostItems
        CostItem.query.filter_by(user_id=user_id).delete()
        
        # Delete CostProfitRecords
        CostProfitRecord.query.filter_by(user_id=user_id).delete()
        
        # Delete UserSessions
        UserSession.query.filter_by(user_id=user_id).delete()
        
        # Delete SMS Alert Subscriptions (this will cascade delete SMSAlertLog entries)
        SMSAlertSubscription.query.filter_by(user_id=user_id).delete()
        
        # Note: UserProfile, Cultivation (and its related PlantSelection, CultivationAdditionalCost)
        # will be deleted automatically due to cascade="all, delete-orphan" in relationships
        
        # Delete the user (this will cascade delete UserProfile and Cultivations)
        db.session.delete(current_user)
        db.session.commit()
        
        # Logout the user
        logout_user()
        session.pop("user_type", None)
        
        flash(f"Your account '{username}' has been permanently deleted. We're sorry to see you go!", "success")
        return redirect(url_for("home"))
        
    except Exception as e:
        db.session.rollback()
        flash("An error occurred while deleting your account. Please try again or contact support.", "error")
        print(f"Account deletion error: {e}")
        return redirect(url_for("settings"))


@app.route("/logout")
@login_required
def logout():
    """User logout - only for regular users"""
    # SECURITY: Block admins from using user logout route
    if hasattr(current_user, "role") and isinstance(current_user, AdminUser):
        flash("Admin accounts should use the admin logout. Redirecting to admin panel.", "info")
        return redirect(url_for("admin_dashboard"))
    
    # Clean up all user sessions for this user
    if isinstance(current_user, User):
        try:
            UserSession.query.filter_by(user_id=current_user.id).delete()
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            print(f"Error cleaning up user session: {e}")
    
    logout_user()
    session.pop("user_type", None)
    flash("You have been logged out.", "success")
    return redirect(url_for("home"))


@app.route("/cost-profit-analysis", methods=["GET", "POST"])
@login_required
@user_required
def cost_profit_analysis():
    """Cost-Profit Analysis Tool with 3-block layout."""
    # Get user's cultivations with cost data
    cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
    cultivation_data = []
    for cultivation in cultivations:
        plants = PlantSelection.query.filter_by(cultivation_id=cultivation.id).all()
        additional_costs = CultivationAdditionalCost.query.filter_by(cultivation_id=cultivation.id).all()
        cultivation_data.append({
            'cultivation': cultivation,
            'plants': plants,
            'additional_costs': additional_costs
        })
    
    # Get selected plant from session
    selected_plant = session.get('selected_plant')
    selected_category = session.get('selected_category')
    
    if request.method == "POST":
        action = request.form.get("action")

        if action == "generate_pdf":
            return generate_cost_profit_pdf()

    return render_template("cost_profit_analysis.html", 
                         user=current_user,
                         cultivation_data=cultivation_data,
                         selected_plant=selected_plant,
                         selected_category=selected_category)


@app.route("/add_cost_profit_record", methods=["POST"])
@login_required
@user_required
def add_cost_profit_record():
    try:
        total_cost = float(request.form.get("total_cost", 0))
        total_revenue = float(request.form.get("total_revenue", 0))
        net_profit = float(request.form.get("net_profit", 0))
        market_price = float(request.form.get("market_price", 0))

        if not all([total_cost > 0, total_revenue > 0, market_price > 0]):
            return jsonify({"success": False, "message": "Invalid data provided"})

        record = CostProfitRecord(
            user_id=current_user.id,
            total_cost=total_cost,
            total_revenue=total_revenue,
            profit=net_profit,
            market_price=market_price,
        )
        db.session.add(record)
        db.session.commit()

        return jsonify({"success": True, "message": "Record added successfully!"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"success": False, "message": str(e)})


@app.route("/cost-profit-history")
@login_required
@user_required
def cost_profit_history():
    records = (
        CostProfitRecord.query.filter_by(user_id=current_user.id)
        .order_by(CostProfitRecord.date.desc())
        .all()
    )
    return render_template(
        "cost_profit_history.html", user=current_user, records=records
    )


@app.route("/analytics", methods=["GET", "POST"])
@login_required
@user_required
def analytics():
    """Analytics page with ML predictions."""

    # Handle clear data request
    if request.method == "POST" and request.form.get("clear_data"):
        try:
            # Clear records from the database for the current user
            CostProfitRecord.query.filter_by(user_id=current_user.id).delete()
            db.session.commit()
            flash("All your historical data has been cleared successfully!", "success")
        except Exception as e:
            db.session.rollback()
            flash("Error clearing data. Please try again.", "error")
            print(f"Error clearing data: {e}")
        return redirect(url_for("analytics"))

    # Get historical data from the database
    records = (
        CostProfitRecord.query.filter_by(user_id=current_user.id)
        .order_by(CostProfitRecord.date.asc())
        .all()
    )

    # Prepare data for prediction models
    historical_prices = [r.market_price for r in records]
    historical_profits = [r.profit for r in records]

    stats = {
        "num_records": len(records),
        "avg_price": (
            sum(historical_prices) / len(historical_prices) if historical_prices else 0
        ),
        "avg_profit": (
            sum(historical_profits) / len(historical_profits)
            if historical_profits
            else 0
        ),
    }

    # Prepare historical data for display in the chart (must be JSON serializable)
    historical_data_for_chart = [
        {
            "market_price": r.market_price,
            "profit": r.profit,
            "date": r.date.strftime("%Y-%m-%d"),
        }
        for r in records
    ]

    # Get predictions from the ML model
    price_predictions, price_error = market_predictor.predict_future_prices(
        historical_data=historical_prices, periods=3
    )
    profit_predictions, profit_error = market_predictor.predict_future_profits(
        historical_data=historical_profits, periods=3
    )

    return render_template(
        "analytics.html",
        user=current_user,
        stats=stats,
        historical_data=historical_data_for_chart,  # Pass the serializable list
        price_predictions=price_predictions or [],  # Ensure it's a list
        profit_predictions=profit_predictions or [],  # Ensure it's a list
        price_error=price_error,
        profit_error=profit_error,
    )


@app.route("/sms-alerts", methods=["GET", "POST"])
@login_required
@user_required
def sms_alerts():
    """SMS weather alerts subscription page for farmers"""
    form = SMSSubscriptionForm()
    
    # Get user's existing subscriptions
    subscriptions = SMSAlertSubscription.query.filter_by(
        user_id=current_user.id
    ).all()
    
    if form.validate_on_submit():
        # Check if phone number already has active subscription
        existing = SMSAlertSubscription.query.filter_by(
            phone_number=form.phone_number.data,
            is_active=True
        ).first()
        
        if existing:
            flash("This phone number already has an active subscription.", "error")
        else:
            try:
                new_subscription = SMSAlertSubscription(
                    user_id=current_user.id,
                    phone_number=form.phone_number.data,
                    city=form.city.data,
                    alert_types=form.alert_types.data,
                    alert_time=form.alert_time.data,
                    language=form.language.data,
                    is_active=True
                )
                db.session.add(new_subscription)
                db.session.commit()
                flash("SMS alert subscription created successfully! You will receive weather alerts daily.", "success")
                return redirect(url_for("sms_alerts"))
            except Exception as e:
                db.session.rollback()
                flash(f"Error creating subscription: {str(e)}", "error")
    
    return render_template(
        "sms_alerts.html",
        form=form,
        subscriptions=subscriptions,
        user=current_user
    )


@app.route("/sms-alerts/unsubscribe/<int:subscription_id>", methods=["POST"])
@login_required
@user_required
def unsubscribe_sms_alert(subscription_id):
    """Unsubscribe from SMS alerts"""
    subscription = SMSAlertSubscription.query.get_or_404(subscription_id)
    
    # Security: Ensure user owns this subscription
    if subscription.user_id != current_user.id:
        flash("You don't have permission to modify this subscription.", "error")
        return redirect(url_for("sms_alerts"))
    
    try:
        subscription.is_active = False
        db.session.commit()
        flash("You have been unsubscribed from SMS alerts.", "success")
    except Exception as e:
        db.session.rollback()
        flash(f"Error unsubscribing: {str(e)}", "error")
    
    return redirect(url_for("sms_alerts"))


@app.route("/admin/sms-management")
@login_required
@admin_required
def admin_sms_management():
    """Admin page to manage SMS alerts"""
    # Get statistics
    total_subscriptions = SMSAlertSubscription.query.count()
    active_subscriptions = SMSAlertSubscription.query.filter_by(is_active=True).count()
    total_alerts_sent = SMSAlertLog.query.filter_by(status="sent").count()
    failed_alerts = SMSAlertLog.query.filter_by(status="failed").count()
    
    # Get recent alert logs
    recent_logs = SMSAlertLog.query.order_by(desc(SMSAlertLog.sent_at)).limit(50).all()
    
    # Get all subscriptions
    subscriptions = SMSAlertSubscription.query.order_by(desc(SMSAlertSubscription.created_at)).all()
    
    stats = {
        "total_subscriptions": total_subscriptions,
        "active_subscriptions": active_subscriptions,
        "total_alerts_sent": total_alerts_sent,
        "failed_alerts": failed_alerts,
    }
    
    return render_template(
        "admin/sms_management.html",
        stats=stats,
        subscriptions=subscriptions,
        recent_logs=recent_logs
    )


@app.route("/admin/send-weather-alerts", methods=["POST"])
@login_required
@admin_required
def admin_send_weather_alerts():
    """Manually trigger weather alerts (admin only)"""
    try:
        result = check_and_send_weather_alerts()
        if result.get("error"):
            flash(f"Error sending alerts: {result['error']}", "error")
        else:
            flash(
                f"Weather alerts sent successfully! Sent: {result.get('sent', 0)}, Failed: {result.get('failed', 0)}",
                "success"
            )
        log_admin_action(
            "sms_alerts_sent",
            f"Admin manually triggered weather alerts. Sent: {result.get('sent', 0)}, Failed: {result.get('failed', 0)}",
            admin_id=current_user.id
        )
    except Exception as e:
        flash(f"Error sending alerts: {str(e)}", "error")
    
    return redirect(url_for("admin_sms_management"))


@app.route("/admin/sms-logs")
@login_required
@admin_required
def admin_sms_logs():
    """View SMS alert logs"""
    page = request.args.get("page", 1, type=int)
    status_filter = request.args.get("status", "all")
    
    query = SMSAlertLog.query
    
    if status_filter != "all":
        query = query.filter_by(status=status_filter)
    
    logs = query.order_by(desc(SMSAlertLog.sent_at)).paginate(
        page=page, per_page=50, error_out=False
    )
    
    return render_template("admin/sms_logs.html", logs=logs, status_filter=status_filter)


def generate_cost_profit_pdf():
    """Generate PDF report for cost-profit analysis tool."""
    try:
        # Get data from form
        total_cost = float(request.form.get("total_cost", 0))
        total_revenue = float(request.form.get("total_revenue", 0))
        net_profit = float(request.form.get("net_profit", 0))
        market_price = float(request.form.get("market_price", 0))
        harvest_amount = float(request.form.get("harvest_amount", 0))
        
        # Get selected plant from session (from homepage) or form
        selected_plant = session.get('selected_plant') or request.form.get("selected_plant", "Not specified")
        selected_category = session.get('selected_category')
        selected_cultivation_id = request.form.get("cultivation_id")

        # Automatically save to database before generating PDF
        if all([total_cost > 0, total_revenue > 0, market_price > 0]):
            try:
                record = CostProfitRecord(
                    user_id=current_user.id,
                    total_cost=total_cost,
                    total_revenue=total_revenue,
                    profit=net_profit,
                    market_price=market_price,
                )
                db.session.add(record)
                db.session.commit()
            except Exception as db_error:
                db.session.rollback()
                print(f"Error saving to database: {db_error}")
                # Continue with PDF generation even if database save fails

        # Get all user's cultivations for locations
        user_cultivations = Cultivation.query.filter_by(user_id=current_user.id).all()
        cultivation_locations = []
        for cult in user_cultivations:
            location_str = cult.city
            if cult.sub_area:
                location_str += f" - {cult.sub_area}"
            if cult.area_name:
                location_str = f"{cult.area_name}, {location_str}"
            cultivation_locations.append(location_str)

        # Get cultivation and plant details if available
        cultivation_info = None
        plant_details = []
        if selected_cultivation_id:
            try:
                cultivation = Cultivation.query.filter_by(
                    id=int(selected_cultivation_id),
                    user_id=current_user.id
                ).first()
                if cultivation:
                    cultivation_info = cultivation
                    plants = PlantSelection.query.filter_by(cultivation_id=cultivation.id).all()
                    plant_details = [{"name": p.plant_name, "category": p.plant_category} for p in plants]
            except:
                pass

        # Create PDF buffer
        buffer = BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=letter)
        story = []

        # Get styles
        styles = getSampleStyleSheet()
        title_style = ParagraphStyle(
            "CustomTitle",
            parent=styles["Heading1"],
            fontSize=24,
            spaceAfter=30,
            alignment=1,  # Center alignment
            textColor=colors.HexColor("#388659"),
        )

        heading_style = ParagraphStyle(
            "CustomHeading",
            parent=styles["Heading2"],
            fontSize=16,
            spaceAfter=12,
            textColor=colors.HexColor("#388659"),
        )

        normal_style = styles["Normal"]
        small_style = ParagraphStyle(
            "Small",
            parent=styles["Normal"],
            fontSize=9,
            textColor=colors.grey,
        )

        # Add header with title (no logo - logo only in footer)
        header_table_data = [
            [Paragraph("<b>WeatherGuard Harvest</b>", ParagraphStyle("HeaderTitle", parent=normal_style, 
                                                                      fontSize=20, textColor=colors.HexColor("#388659"), alignment=0)),
             Paragraph("Cost-Profit Analysis Report", ParagraphStyle("HeaderSubtitle", parent=normal_style, 
                                                                    fontSize=16, textColor=colors.HexColor("#52AA8A"), alignment=2))]
        ]
        header_table = Table(header_table_data, colWidths=[3.5 * inch, 4 * inch])
        header_table.setStyle(TableStyle([
            ("ALIGN", (0, 0), (0, 0), "LEFT"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (0, 0), 20),
            ("FONTSIZE", (1, 0), (1, 0), 16),
            ("TEXTCOLOR", (0, 0), (0, 0), colors.HexColor("#388659")),
            ("TEXTCOLOR", (1, 0), (1, 0), colors.HexColor("#52AA8A")),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 15),
            ("TOPPADDING", (0, 0), (-1, -1), 15),
        ]))
        
        story.append(header_table)
        
        # Add a decorative line
        story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor("#388659"), spaceBefore=5, spaceAfter=15))

        # Add date and time
        current_datetime = datetime.now()
        current_date = current_datetime.strftime("%B %d, %Y")
        current_time = current_datetime.strftime("%I:%M %p")
        story.append(Paragraph(f"<b>Report Generated:</b> {current_date} at {current_time}", normal_style))
        
        # Add user info (with error handling for schema migration)
        try:
            user_profile = UserProfile.query.filter_by(user_id=current_user.id).first()
            if user_profile:
                # Try to get first_name and last_name, fallback to full_name
                try:
                    if hasattr(user_profile, 'first_name') and user_profile.first_name:
                        user_name = f"{user_profile.first_name} {user_profile.last_name or ''}".strip()
                    else:
                        user_name = user_profile.full_name
                except:
                    user_name = user_profile.full_name if hasattr(user_profile, 'full_name') else current_user.username
                story.append(Paragraph(f"<b>User:</b> {user_name} ({current_user.username})", normal_style))
            else:
                story.append(Paragraph(f"<b>User:</b> {current_user.username}", normal_style))
        except Exception as profile_error:
            if "no such column" in str(profile_error).lower():
                # Schema needs migration
                migrate_database()
                user_profile = UserProfile.query.filter_by(user_id=current_user.id).first()
                if user_profile:
                    try:
                        if hasattr(user_profile, 'first_name') and user_profile.first_name:
                            user_name = f"{user_profile.first_name} {user_profile.last_name or ''}".strip()
                        else:
                            user_name = user_profile.full_name
                    except:
                        user_name = user_profile.full_name if hasattr(user_profile, 'full_name') else current_user.username
                    story.append(Paragraph(f"<b>User:</b> {user_name} ({current_user.username})", normal_style))
                else:
                    story.append(Paragraph(f"<b>User:</b> {current_user.username}", normal_style))
            else:
                # Fallback if profile doesn't exist
                story.append(Paragraph(f"<b>User:</b> {current_user.username}", normal_style))
        
        story.append(Spacer(1, 10))
        
        # Add Vegetable section
        vegetable_text = "Vegetable is not selected"
        if selected_plant and selected_plant != "Not specified":
            vegetable_text = selected_plant
            if selected_category:
                vegetable_text += f" ({selected_category})"
        story.append(Paragraph(f"<b>Vegetable:</b> {vegetable_text}", normal_style))
        
        # Add Locations section
        if cultivation_locations:
            locations_text = ", ".join(cultivation_locations)
            story.append(Paragraph(f"<b>Locations:</b> {locations_text}", normal_style))
        else:
            story.append(Paragraph(f"<b>Locations:</b> No cultivation locations found", normal_style))
        
        story.append(Spacer(1, 20))

        # Create detailed data table
        data = [
            ["Parameter", "Value", "Details"],
            [
                "Market Price (per kg)",
                f"Rs. {market_price:,.2f}",
                "Current market rate",
            ],
            ["Harvest Amount", f"{harvest_amount:,.2f} kg", "Total harvest quantity"],
            [
                "Total Revenue",
                f"Rs. {total_revenue:,.2f}",
                f"{market_price:,.2f} × {harvest_amount:,.2f}",
            ],
        ]
        
        # Add cost breakdown if cultivation info available
        if cultivation_info:
            data.append(["Initial Seedling Cost", f"Rs. {cultivation_info.initial_seedling_cost:,.2f}", "From cultivation setup"])
            data.append(["Initial Fertilizer Cost", f"Rs. {cultivation_info.initial_fertilizer_cost:,.2f}", "From cultivation setup"])
            data.append(["Resource Costs", f"Rs. {cultivation_info.initial_resource_cost:,.2f}", "Human & machine resources"])
            
            # Add additional costs
            additional_costs = CultivationAdditionalCost.query.filter_by(cultivation_id=cultivation_info.id).all()
            for cost in additional_costs:
                data.append([cost.cost_name, f"Rs. {cost.amount:,.2f}", "Additional cost"])
        
        data.append(["Total Cost", f"Rs. {total_cost:,.2f}", "Initial + Subsequent costs"])
        data.append([
            "Net Profit/Loss",
            f"Rs. {net_profit:,.2f}",
            f"{total_revenue:,.2f} - {total_cost:,.2f}",
        ])

        # Create table with enhanced styling
        table = Table(data, colWidths=[2.5 * inch, 2 * inch, 2.5 * inch])
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#388659")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
                    ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                    ("FONTSIZE", (0, 0), (-1, 0), 12),
                    ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
                    ("BACKGROUND", (0, 1), (-1, -1), colors.beige),
                    ("GRID", (0, 0), (-1, -1), 1, colors.black),
                    ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
                    ("FONTSIZE", (0, 1), (-1, -1), 10),
                    ("ALIGN", (0, 0), (-1, -1), "LEFT"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 10),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ]
            )
        )

        story.append(table)
        story.append(Spacer(1, 20))

        # Add comprehensive analysis
        story.append(Paragraph("Detailed Analysis:", heading_style))

        if net_profit >= 0:
            profit_status = "Profitable Business"
            profit_margin = (
                (net_profit / total_revenue) * 100 if total_revenue > 0 else 0
            )
            story.append(Paragraph(f"Status: {profit_status}", normal_style))
            story.append(
                Paragraph(f"Profit Margin: {profit_margin:.2f}%", normal_style)
            )
            story.append(
                Paragraph(
                    f"Return on Investment: {(net_profit / total_cost) * 100:.2f}%"
                    if total_cost > 0
                    else "N/A",
                    normal_style,
                )
            )
        else:
            profit_status = "⚠️ Loss Incurred"
            loss_percentage = (
                (abs(net_profit) / total_revenue) * 100 if total_revenue > 0 else 0
            )
            story.append(Paragraph(f"Status: {profit_status}", normal_style))
            story.append(
                Paragraph(f"Loss Percentage: {loss_percentage:.2f}%", normal_style)
            )

        # Add recommendations
        story.append(Spacer(1, 15))
        story.append(Paragraph("Recommendations:", heading_style))

        if net_profit >= 0:
            story.append(
                Paragraph("• Continue with current farming practices", normal_style)
            )
            story.append(
                Paragraph(
                    "• Consider scaling up production if market conditions remain favorable",
                    normal_style,
                )
            )
            story.append(
                Paragraph(
                    "• Monitor market prices for optimal selling timing", normal_style
                )
            )
        else:
            story.append(
                Paragraph("• Review and optimize cost structure", normal_style)
            )
            story.append(
                Paragraph("• Consider alternative crops or markets", normal_style)
            )
            story.append(
                Paragraph("• Analyze cost reduction opportunities", normal_style)
            )

        # Add footer with signature and logo
        story.append(Spacer(1, 30))
        story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#52AA8A"), spaceBefore=10, spaceAfter=10))
        
        # Try to load logo/symbol for footer only
        logo_path = None
        footer_logo = None
        
        # Try different possible logo/symbol locations (prioritize favicon/symbol)
        possible_logos = [
            "static/plant_tracking/assets/37069890_-_Copy__5_-removebg-preview.png",  # Website symbol/logo
            "static/favicon.ico",
            "static/favicon.png",
            "static/images/favicon.ico",
            "static/images/favicon.png",
            "static/images/logo.png",
            "static/images/logo.jpg",
            "static/images/symbol.png",
            "static/images/icon.png",
        ]
        
        for logo_file in possible_logos:
            if os.path.exists(logo_file):
                try:
                    # Get image dimensions to preserve aspect ratio
                    try:
                        from PIL import Image as PILImage
                        pil_img = PILImage.open(logo_file)
                        img_width, img_height = pil_img.size
                        aspect_ratio = img_width / img_height
                        
                        # Set max height and calculate width to preserve aspect ratio
                        max_height = 0.7 * inch
                        calculated_width = max_height * aspect_ratio
                        # Limit width to reasonable size
                        if calculated_width > 1.2 * inch:
                            calculated_width = 1.2 * inch
                            max_height = calculated_width / aspect_ratio
                        
                        footer_logo = Image(logo_file, width=calculated_width, height=max_height)
                    except ImportError:
                        # Fallback if PIL not available - use fixed size
                        footer_logo = Image(logo_file, width=0.7*inch, height=0.7*inch)
                    except Exception as pil_error:
                        # If PIL fails, use fixed size
                        footer_logo = Image(logo_file, width=0.7*inch, height=0.7*inch)
                    
                    logo_path = logo_file
                    break
                except Exception as e:
                    print(f"Could not load logo from {logo_file}: {e}")
                    continue
        
        # Footer with logo (smaller) and signature
        if footer_logo and logo_path:
            footer_data = [
                [footer_logo, 
                 Paragraph(f"<b>WeatherGuard Harvest</b><br/>Sustainable Farming Solutions to Every Life, Every Day<br/><i>www.weatherguardharvest.com</i>", 
                          ParagraphStyle("FooterText", parent=small_style, fontSize=9, textColor=colors.HexColor("#388659"), alignment=0, leftIndent=50)),
                 Paragraph(f"Report Generated:<br/>{current_date}<br/>{current_time}", 
                          ParagraphStyle("FooterDate", parent=small_style, fontSize=9, textColor=colors.grey, alignment=2))]
            ]
            footer_table = Table(footer_data, colWidths=[1 * inch, 4.5 * inch, 2.5 * inch])
        else:
            footer_data = [
                [Paragraph("<b>WeatherGuard Harvest</b><br/>Sustainable Farming Solutions to Every Life, Every Day<br/><i>www.weatherguardharvest.com</i>", 
                          ParagraphStyle("FooterText", parent=small_style, fontSize=9, textColor=colors.HexColor("#388659"), alignment=0, leftIndent=50)),
                 Paragraph(f"Report Generated:<br/>{current_date}<br/>{current_time}", 
                          ParagraphStyle("FooterDate", parent=small_style, fontSize=9, textColor=colors.grey, alignment=2))]
            ]
            footer_table = Table(footer_data, colWidths=[5.5 * inch, 2.5 * inch])
        
        footer_table.setStyle(TableStyle([
            ("ALIGN", (0, 0), (0, 0), "LEFT"),
            ("ALIGN", (-1, 0), (-1, 0), "RIGHT"),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (0, 0), 60),  # Add left padding to image column to push it more inside
            ("LEFTPADDING", (1, 0), (1, 0), 40),  # Add left padding to text column to move it further away from picture
            ("RIGHTPADDING", (-1, 0), (-1, 0), 40),  # Add right padding to Report Generated column to bring it back inside
            ("FONTNAME", (0, 0), (0, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 9),
            ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#388659")),
            ("TOPPADDING", (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ]))
        story.append(footer_table)

        # Build PDF
        doc.build(story)
        buffer.seek(0)

        # Return PDF as download
        from flask import send_file

        return send_file(
            buffer,
            as_attachment=True,
            download_name=f"cost_profit_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf",
            mimetype="application/pdf",
        )

    except Exception as e:
        flash(f"Error generating PDF: {str(e)}", "error")
        return redirect(url_for("cost_profit_analysis"))


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


@app.errorhandler(500)
def internal_error(e):
    db.session.rollback()
    return render_template("404.html"), 500


def migrate_database():
    """Migrate database schema to match current models"""
    try:
        # Check if user_profile table exists and has old schema
        from sqlalchemy import inspect
        inspector = inspect(db.engine)
        tables = inspector.get_table_names()
        if 'user_profile' in inspector.get_table_names():
            columns = [col['name'] for col in inspector.get_columns('user_profile')]
            
            # Check if old schema exists (has full_name instead of first_name/last_name)
            if 'full_name' in columns and 'first_name' not in columns:
                print("[MIGRATION] Detected old user_profile schema. Migrating...")
                
                # For SQLite, we need to recreate the table
                if 'sqlite' in str(db.engine.url).lower():
                    # Get all existing data
                    old_profiles = db.session.execute(text("SELECT user_id, full_name, mobile_number, date_of_birth, address, created_at, updated_at FROM user_profile")).fetchall()
                    
                    # Drop old table
                    db.session.execute(text("DROP TABLE user_profile"))
                    db.session.commit()
                    
                    # Recreate with new schema
                    UserProfile.__table__.create(db.engine)
                    
                    # Migrate data
                    for profile in old_profiles:
                        user_id, full_name, mobile, dob, address, created, updated = profile
                        # Split full_name into first and last
                        name_parts = (full_name or "").split(" ", 1)
                        first_name = name_parts[0] if name_parts else ""
                        last_name = name_parts[1] if len(name_parts) > 1 else ""
                        
                        # Try to parse address
                        address_city = None
                        address_line1 = None
                        address_line2 = None
                        if address:
                            # Simple split - could be improved
                            address_lines = address.split("\n", 2)
                            if len(address_lines) > 0:
                                address_line1 = address_lines[0]
                            if len(address_lines) > 1:
                                address_line2 = address_lines[1]
                        
                        new_profile = UserProfile(
                            user_id=user_id,
                            first_name=first_name or "Unknown",
                            last_name=last_name or "",
                            mobile_number=mobile or "",
                            date_of_birth=datetime.strptime(dob, "%Y-%m-%d").date() if dob else None,
                            address_city=address_city,
                            address_line1=address_line1,
                            address_line2=address_line2,
                            created_at=created,
                            updated_at=updated
                        )
                        db.session.add(new_profile)
                    
                    db.session.commit()
                    print("[MIGRATION] User profile migration completed successfully")
        
        # Check if cultivation_additional_cost table exists
        if 'cultivation_additional_cost' not in tables:
            print("[MIGRATION] Creating cultivation_additional_cost table...")
            try:
                CultivationAdditionalCost.__table__.create(db.engine)
                print("[MIGRATION] cultivation_additional_cost table created")
            except Exception as e:
                print(f"[MIGRATION] cultivation_additional_cost table may already exist: {e}")
            
    except Exception as e:
        print(f"[MIGRATION ERROR] {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    with app.app_context():
        try:
            # Print database URI for debugging (hide password if present)
            db_uri = app.config.get("SQLALCHEMY_DATABASE_URI", "Not set")
            if db_uri and "mysql" in db_uri:
                # Hide password in MySQL URI for security
                safe_uri = db_uri.split("@")[-1] if "@" in db_uri else db_uri
                print(f"[INFO] Database URI: mysql://...@{safe_uri}")
            else:
                print(f"[INFO] Database URI: {db_uri}")
            
            # Try to create tables
            db.create_all()
            
            # Run migrations
            migrate_database()
            
            print("[OK] Database initialized successfully")
        except Exception as e:
            error_msg = str(e)
            if "no such column" in error_msg:
                print("[WARNING] Database schema mismatch detected!")
                print("   Resetting database to match current models...")
                try:
                    # Drop and recreate all tables
                    db.drop_all()
                    db.create_all()
                    print("[OK] Database reset and initialized successfully")
                except Exception as reset_error:
                    print(f"[ERROR] Database reset failed: {reset_error}")
                    print("   Please manually delete 'instance/users.db' and restart")
                    sys.exit(1)
            elif "unable to open database file" in error_msg:
                print(f"[ERROR] Database initialization failed: {e}")
                print(f"[INFO] Database URI was: {app.config.get('SQLALCHEMY_DATABASE_URI', 'Not set')}")
                print("[INFO] Please check:")
                print("   1. The instance directory exists and is writable")
                print("   2. No other process is using the database file")
                print("   3. You have proper file permissions")
                sys.exit(1)
            else:
                print(f"[ERROR] Database initialization failed: {e}")
                print(f"[INFO] Database URI was: {app.config.get('SQLALCHEMY_DATABASE_URI', 'Not set')}")
                sys.exit(1)

    app.run(debug=True)