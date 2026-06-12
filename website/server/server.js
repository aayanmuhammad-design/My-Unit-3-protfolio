require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Basic health
app.get('/ping', (req, res) => res.json({ ok: true }));

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!email || !message) return res.status(400).send('Missing email or message');

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toAddress = process.env.TO_EMAIL || 'Aayan.muhammad@ada.ac.uk';
    const fromAddress = process.env.FROM_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).send('SMTP not configured on server');
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: `${name || 'Website Visitor'} <${fromAddress}>`,
      to: toAddress,
      subject: subject || `Website message from ${name || email}`,
      text: `Name: ${name || ''}\nEmail: ${email}\n\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send failed', err);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => console.log(`Email server listening on ${PORT}`));
