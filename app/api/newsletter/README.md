# Newsletter Email Configuration

To enable newsletter email sending, you need to configure SMTP settings in your environment variables.

## Required Environment Variables

Add these to your `.env.local` or `.env` file:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com          # Your SMTP server hostname
SMTP_PORT=587                     # SMTP port (587 for TLS, 465 for SSL)
SMTP_USER=your-email@gmail.com    # Your SMTP username/email
SMTP_PASSWORD=your-app-password   # Your SMTP password or app password
SMTP_FROM=noreply@techmapperz.com # From email address (optional, defaults to SMTP_USER)
SMTP_FROM_NAME=Techmapperz        # From name displayed in email (optional, defaults to "Techmapperz")
```

## Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password
```

**Note for Gmail:** You need to:
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password (not your regular password)

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
SMTP_FROM=noreply@yourdomain.com
```

## Testing

After configuring SMTP settings, test the newsletter sending functionality from the admin panel. The system will:
- Verify SMTP connection
- Send emails to all active subscribers
- Return success/failure counts for each recipient

## Troubleshooting

1. **"SMTP configuration not found"**: Make sure all required environment variables are set
2. **"SMTP configuration is invalid"**: Check your SMTP credentials and server settings
3. **Emails not received**: Check spam folder, verify SMTP settings, and check server logs

