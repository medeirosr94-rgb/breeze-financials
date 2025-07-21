# Email Setup Guide for Breeze Financials

## What We've Built
✅ **Complete SMTP email integration** using Nodemailer
✅ **Instant lead notifications** when someone requests a free audit
✅ **Professional auto-response emails** to leads
✅ **GoDaddy SMTP configuration** optimized for your hosting

## Required Environment Variables

You'll need to add these environment variables to your Replit project:

### 1. SMTP_USER
- **Value**: Your full GoDaddy email address
- **Example**: `rodrigomedeiros@breezefinancials.com`

### 2. SMTP_PASS
- **Value**: Your email password or app-specific password
- **Note**: If you have 2FA enabled, you may need an app password

### 3. NOTIFICATION_EMAIL (IMPORTANT!)
- **Value**: Email where you want to receive lead notifications
- **Current**: `no-reply@breezefinancials.com` (needs to be changed!)
- **Should be**: Your actual email like `rodrigomedeiros@breezefinancials.com`
- **Default**: Uses SMTP_USER if not set

### 4. SMTP_HOST (Optional)
- **Value**: `smtpout.secureserver.net` (GoDaddy default)
- **Note**: Pre-configured, only change if GoDaddy support gives different settings

### 5. SMTP_PORT (Optional)
- **Value**: `465` (secure SMTP)
- **Note**: Pre-configured for GoDaddy

## How to Add Environment Variables in Replit

1. **In your Replit project**, click on "Secrets" in the left sidebar (🔒 icon)
2. **Add each variable**:
   - Key: `SMTP_USER`
   - Value: `your-email@breezefinancials.com`
   - Click "Add new secret"
3. **Repeat for each variable** above

## What Happens When Someone Submits a Form

### For You (Business Owner):
- **Instant email notification** with lead details
- **Professional formatting** with lead information
- **Quick action buttons** to reply or book meeting
- **Time-stamped** for easy tracking

### For The Lead:
- **Immediate auto-response** thanking them
- **Clear next steps** explaining what happens
- **Professional branding** with your logo and colors
- **Call-to-action** to book directly if they prefer

## Email Templates Include:

### Lead Notification (to you):
- Lead's contact information
- Business details
- Source tracking (form type)
- Quick reply buttons
- Calendly integration

### Auto-Response (to lead):
- Personalized thank you
- Audit process explanation
- Timeline expectations
- Direct booking option
- Professional branding

## Testing the Setup

1. **Add the environment variables** as described above
2. **Restart your Replit project**
3. **Submit a test form** on your landing page
4. **Check your email** for notifications

## Troubleshooting

### If emails aren't sending:
1. **Verify SMTP credentials** in GoDaddy
2. **Check if 2FA requires app password**
3. **Confirm SMTP is enabled** in GoDaddy email settings
4. **Check Replit logs** for error messages

### GoDaddy SMTP Settings:
- **Outgoing Server**: smtpout.secureserver.net
- **Port**: 465 (SSL) or 587 (TLS)
- **Security**: SSL/TLS required
- **Authentication**: Yes

## Need Help?
- Check Replit console logs for error messages
- Verify GoDaddy email settings in your hosting panel
- Test with a simple email first to confirm SMTP works