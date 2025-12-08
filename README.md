# WeatherGuard Harvest

Agricultural management web application for farmers in Sri Lanka.

## Features

- 🌤️ **Weather Tracking** - Real-time weather data for 12 Sri Lankan cities
- 🌱 **Plant Tracking** - Visual plant growth tracking system
- 💰 **Cost-Profit Analysis** - Financial tracking with PDF report generation
- 🤖 **ML Predictions** - AI-powered price and profit forecasting
- 📱 **SMS Alerts** - Weather-based SMS notifications
- 👨‍💼 **Admin Panel** - Complete user and system management

## Technology Stack

- **Framework**: Flask 2.3.3
- **Database**: SQLite (default) / MySQL (configurable)
- **ML Library**: scikit-learn
- **PDF Generation**: ReportLab
- **SMS Service**: Twilio

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 12.1
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   SECRET_KEY=your-secret-key-here
   FLASK_ENV=production
   DB_TYPE=sqlite
   # For MySQL:
   # DB_TYPE=mysql
   # MYSQL_HOST=localhost
   # MYSQL_PORT=3306
   # MYSQL_USER=your_user
   # MYSQL_PASSWORD=your_password
   # MYSQL_DATABASE=your_database
   # For Twilio SMS:
   # TWILIO_ACCOUNT_SID=your_account_sid
   # TWILIO_AUTH_TOKEN=your_auth_token
   # TWILIO_PHONE_NUMBER=your_phone_number
   ```

5. **Initialize database**
   ```bash
   python app.py
   ```
   The database will be automatically created in the `instance/` directory.

## Deployment

### Azure App Service

1. **Create Azure App Service**
   - Go to Azure Portal
   - Create a new Web App
   - Select Python runtime

2. **Configure Application Settings**
   - Add all environment variables from `.env` file
   - Set `FLASK_ENV=production`
   - Set `DEBUG=False`

3. **Deploy**
   - Use Azure CLI or GitHub Actions
   - Or deploy via VS Code Azure extension

4. **Configure Startup Command**
   ```
   gunicorn app:app
   ```

### Environment Variables for Production

Required:
- `SECRET_KEY` - Flask secret key (generate a strong random key)
- `FLASK_ENV=production`

Optional:
- `DB_TYPE` - sqlite or mysql
- MySQL connection variables (if using MySQL)
- Twilio credentials (if using SMS alerts)

## Video Storage

Videos are hosted on Azure Blob Storage:
- Storage Account: `weatherapp1`
- Container: `app-videos`
- Videos are loaded directly from Azure Blob Storage URLs

## Project Structure

```
.
├── app.py                 # Main Flask application
├── config.py              # Configuration management
├── ml_model.py            # Machine Learning predictions
├── requirements.txt       # Python dependencies
├── Procfile              # Heroku/Azure deployment config
├── instance/             # Database directory (auto-created)
├── templates/            # HTML templates
└── static/               # Static assets (CSS, JS, images)
```

## License

[Your License Here]

## Support

For support, contact [your-email@example.com]

