# SMS Weather Alerts Setup Guide

## Overview
The SMS Weather Alerts feature allows farmers to receive daily weather forecasts and plant protection advice via SMS on their mobile phones. This is especially useful for farmers with basic phones who don't have internet access.

## Features
- ✅ Daily weather forecasts via SMS
- ✅ Severe weather alerts (heavy rain, storms, extreme temperatures)
- ✅ Plant protection advice based on weather conditions
- ✅ Works on all phones (including basic button phones)
- ✅ Multiple language support (English, Sinhala, Tamil)
- ✅ Customizable alert types and timing
- ✅ Free SMS API integration

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

The SMS feature uses the following free SMS APIs:
- **Textbelt** (default, free tier: 100 SMS/day)
- **Twilio** (free trial available)
- **Custom SMS API** (configurable)

### 2. Configure SMS Provider

#### Option A: Textbelt (Recommended for Free Tier)
Textbelt offers 100 free SMS per day. No API key needed for basic usage.

Add to your `.env` file:
```env
SMS_PROVIDER=textbelt
TEXTBELT_API_KEY=textbelt  # Optional, for higher limits
```

#### Option B: Twilio (Free Trial)
1. Sign up at https://www.twilio.com/try-twilio
2. Get your Account SID, Auth Token, and Phone Number
3. Add to your `.env` file:
```env
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

#### Option C: Custom SMS API
If you have your own SMS gateway:
```env
SMS_PROVIDER=sms_api
SMS_API_URL=https://your-sms-api.com/send
SMS_API_KEY=your_api_key
```

### 3. Database Migration
The new tables will be created automatically when you run the application:
- `sms_alert_subscription` - Stores farmer subscriptions
- `sms_alert_log` - Logs all sent SMS alerts

If you need to manually create them:
```python
from app import app, db
with app.app_context():
    db.create_all()
```

### 4. Setting Up Daily Alerts

#### Option A: Manual Trigger (Testing)
Admins can manually trigger alerts from the admin panel:
1. Go to Admin Panel → SMS Alerts
2. Click "Send Alerts Now"

#### Option B: Scheduled Task (Production)
For automatic daily alerts, set up a scheduled task:

**Windows (Task Scheduler):**
1. Open Task Scheduler
2. Create Basic Task
3. Set trigger: Daily at 7:00 AM
4. Action: Start a program
5. Program: `python`
6. Arguments: `-c "from app import app, check_and_send_weather_alerts; app.app_context().push(); check_and_send_weather_alerts()"`

**Linux/Mac (Cron):**
Add to crontab (`crontab -e`):
```bash
# Send weather alerts daily at 7:00 AM
0 7 * * * cd /path/to/your/app && python -c "from app import app, check_and_send_weather_alerts; app.app_context().push(); check_and_send_weather_alerts()"
```

**Python Script (Alternative):**
Create `send_alerts.py`:
```python
from app import app, check_and_send_weather_alerts

with app.app_context():
    result = check_and_send_weather_alerts()
    print(f"Alerts sent: {result}")
```

Then schedule it with cron or Task Scheduler.

## Usage

### For Farmers (Users)
1. Log in to the website
2. Go to "SMS Alerts" in the navigation menu
3. Fill in the subscription form:
   - Phone number (e.g., 0771234567 or +94771234567)
   - City (select from dropdown)
   - Alert types (All, Heavy Rain Only, Extreme Temp Only, etc.)
   - Daily alert time (e.g., 08:00)
   - Language (English, Sinhala, Tamil)
4. Click "Subscribe to SMS Alerts"
5. You'll receive daily weather alerts via SMS

### For Admins
1. Log in to Admin Panel
2. Go to "SMS Alerts" in the sidebar
3. View statistics:
   - Total subscriptions
   - Active subscriptions
   - Alerts sent
   - Failed alerts
4. Manually send alerts: Click "Send Alerts Now"
5. View logs: Click "View All Logs" to see SMS history

## SMS Message Format

### Weather Alert (First SMS)
```
WeatherGuard Alert
Anuradhapura - 2024-01-15
Heavy rain
Temp: 22-28°C
Rain: 45mm
```

### Plant Protection Advice (Second SMS, if severe weather)
```
⚠️ HEAVY RAIN ALERT:
• Cover plants with plastic sheets
• Ensure proper drainage
• Move potted plants indoors
• Avoid fertilizer application
• Check for waterlogging
```

## Alert Conditions

Alerts are sent when:
- **Heavy Rain**: Weather code 65, 67, 82 or precipitation > 20mm
- **Extreme Heat**: Temperature > 35°C
- **Low Temperature**: Temperature < 15°C
- **Thunderstorms**: Weather codes 95, 96, 99
- **All Alerts**: Daily forecast regardless of conditions

## Phone Number Format

The system automatically formats phone numbers:
- Input: `0771234567` → Converts to: `+94771234567`
- Input: `+94771234567` → Used as is
- Input: `94771234567` → Converts to: `+94771234567`

## Troubleshooting

### SMS Not Sending
1. Check SMS provider configuration in `.env`
2. Verify API credentials (for Twilio)
3. Check SMS logs in Admin Panel → SMS Alerts → View All Logs
4. Ensure phone number format is correct
5. Check provider limits (Textbelt: 100/day free)

### Alerts Not Received
1. Verify subscription is active
2. Check phone number is correct
3. Verify alert conditions are met
4. Check SMS logs for errors
5. Ensure SMS provider has credits/limits

### Database Errors
1. Ensure database tables are created
2. Check database connection
3. Verify models are imported correctly

## API Limits

- **Textbelt Free**: 100 SMS/day
- **Twilio Trial**: Limited credits (check dashboard)
- **Custom API**: Depends on your provider

## Cost Considerations

- **Textbelt**: Free for 100 SMS/day, paid plans available
- **Twilio**: Pay-as-you-go after trial (check pricing)
- **Custom API**: Varies by provider

For production with many users, consider:
- Upgrading to paid SMS provider
- Implementing rate limiting
- Sending alerts only for severe weather
- Batch sending during off-peak hours

## Security Notes

- Phone numbers are stored in the database
- SMS logs are kept for audit purposes
- Only admins can view all subscriptions
- Users can only manage their own subscriptions
- Unsubscribe functionality available

## Future Enhancements

Possible improvements:
- [ ] SMS templates customization
- [ ] Multi-language support (Sinhala/Tamil)
- [ ] SMS delivery status tracking
- [ ] Bulk SMS sending optimization
- [ ] SMS scheduling by timezone
- [ ] Two-way SMS (farmer responses)
- [ ] SMS alerts for specific crop types

## Support

For issues or questions:
1. Check SMS logs in Admin Panel
2. Review error messages in logs
3. Verify SMS provider status
4. Check application logs

---

**Note**: This feature uses free SMS APIs with daily limits. For production use with many farmers, consider upgrading to a paid SMS service or implementing rate limiting.

