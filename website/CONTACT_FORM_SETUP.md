# Contact Form Setup Instructions

Your contact form is now configured to send emails through your Node.js backend server. Follow these steps to get it working:

## Step 1: Configure Email (SMTP) Credentials

Edit `server/.env` with your email provider's SMTP settings.

### Option A: Using Gmail
1. Go to: https://myaccount.google.com/apppasswords
2. Generate an app-specific password
3. Update `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
TO_EMAIL=Aayan.muhammad@ada.ac.uk
FROM_EMAIL=your-gmail@gmail.com
```

### Option B: Using Ada/Office 365 Email
1. Contact your IT support for SMTP settings
2. Typically: smtp.office365.com, port 587
3. Update `.env`:
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@ada.ac.uk
SMTP_PASS=your-password
TO_EMAIL=Aayan.muhammad@ada.ac.uk
FROM_EMAIL=your-email@ada.ac.uk
```

## Step 2: Install Dependencies

Open terminal in the `server` folder:
```
npm install
```

## Step 3: Start the Server

Run the backend server:
```
npm start
```

You should see:
```
Server running on port 3000
```

## Step 4: Test the Contact Form

1. Keep the server running (from Step 3)
2. Open the website: `file:///c:/Users/Aayan.Muhammad/Documents/website/index.html`
3. Click Contact in the sidebar
4. Fill out the form and submit
5. You should receive an email at: `Aayan.muhammad@ada.ac.uk`

## For Production (Hosting Online)

When you deploy your website to a live server:
1. Update the backend URL in `js/script.js` to match your server's address
2. Set environment variables on your hosting platform
3. Ensure your server is running and accessible

## Troubleshooting

**"Failed to connect to server"**: Make sure the server is running (npm start)
**"SMTP not configured"**: Check that `.env` file is properly configured
**"Incorrect username or password"**: Verify SMTP credentials are correct
**Emails not arriving**: Check spam folder, verify recipient email address

Need help? Contact your email provider's support for SMTP configuration details.
