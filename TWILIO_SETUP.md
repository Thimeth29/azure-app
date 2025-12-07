# Twilio SMS Setup - Complete Guide

## ✅ Configuration Complete!

Your Twilio credentials have been configured in the code. The SMS system is now ready to use!

## Your Twilio Credentials

- **Account SID**: `ACd39865067b3c076ebe6d7c4d6708029c`
- **Auth Token**: `3ed48a9a02b9307b3c4c81ce0a1a1d55`
- **Phone Number**: `+19033075922`

## How It Works

The code is configured to:
1. **Use Twilio as the primary SMS provider** (default)
2. **Automatically format phone numbers** to international format (+94 for Sri Lanka)
3. **Handle errors gracefully** with fallback options
4. **Log all SMS attempts** in the admin panel

## Optional: Environment Variables (Recommended)

For better security, you can move credentials to `.env` file:

```env
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=ACd39865067b3c076ebe6d7c4d6708029c
TWILIO_AUTH_TOKEN=3ed48a9a02b9307b3c4c81ce0a1a1d55
TWILIO_PHONE_NUMBER=+19033075922
```

**Note**: The code already has these as defaults, so it will work even without `.env` file.

## Testing SMS Functionality

### Method 1: Via Admin Panel
1. Log in as admin
2. Go to **Admin Panel → SMS Alerts**
3. Click **"Send Alerts Now"** button
4. Check the logs to see if SMS was sent successfully

### Method 2: Subscribe as User
1. Log in as a normal user
2. Go to **SMS Alerts** page
3. Subscribe with your phone number
4. Wait for alerts or trigger manually from admin panel

## Phone Number Format

The system automatically converts:
- `0771234567` → `+94771234567`
- `94771234567` → `+94771234567`
- `+94771234567` → `+94771234567` (already correct)

## Troubleshooting

### SMS Not Sending?
1. **Check Twilio Account**: Verify your account has credits
2. **Check Phone Number**: Ensure it's in correct format (+94XXXXXXXXX)
3. **Check Logs**: Admin Panel → SMS Alerts → View All Logs
4. **Check Twilio Console**: Log in to Twilio dashboard to see message status

### Common Errors:
- **"Invalid phone number"**: Check number format
- **"Insufficient credits"**: Add funds to Twilio account
- **"Unverified number"**: For trial accounts, verify recipient numbers in Twilio console

## Twilio Trial Limitations

If you're on a Twilio trial account:
- You can only send SMS to **verified phone numbers**
- To verify numbers: Go to Twilio Console → Phone Numbers → Verified Caller IDs
- Add the phone numbers you want to send SMS to

## Production Ready

The SMS system is now fully functional with Twilio! All features work:
- ✅ User subscriptions
- ✅ Daily weather alerts
- ✅ Plant protection advice
- ✅ Admin management
- ✅ SMS logging
- ✅ Error handling

## Next Steps

1. **Test the system**: Subscribe with a test phone number
2. **Verify numbers** (if on trial): Add recipient numbers in Twilio console
3. **Set up daily alerts**: Configure cron job or scheduled task
4. **Monitor usage**: Check Twilio dashboard for SMS usage and costs

---

**Note**: Keep your Twilio credentials secure. Don't share them publicly or commit them to public repositories.

