require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://coolguyz.ai']
}));

// Basic input validation function
const validateInput = (data) => {
  const { name, email, mobile, address, message } = data;
  if (!name || !email || !mobile || !address || !message) {
    return 'All fields are required.';
  }
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format.';
  }
  // Basic mobile number validation (10 digits)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    return 'Mobile number must be 10 digits.';
  }
  return null; // No validation errors
};

// Rate limiting (basic example, consider a dedicated library for production)
const rateLimit = {};
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!rateLimit[ip]) {
    rateLimit[ip] = [];
  }

  // Remove old requests outside the window
  rateLimit[ip] = rateLimit[ip].filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (rateLimit[ip].length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
  }

  rateLimit[ip].push(now);
  next();
});

// POST endpoint for contact form submissions
app.post('/submit-contact', async (req, res) => {
  const formData = req.body;

  const validationError = validateInput(formData);
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  if (!WEBHOOK_URL) {
    console.error('WEBHOOK_URL is not defined in environment variables.');
    return res.status(500).json({ success: false, message: 'Server configuration error: Webhook URL is missing.' });
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      res.status(200).json({ success: true, message: 'Form submitted successfully to webhook!' });
    } else {
      const errorText = await response.text();
      console.error(`Failed to forward to webhook: ${response.status} - ${errorText}`);
      res.status(response.status).json({ success: false, message: `Failed to submit form to webhook: ${errorText}` });
    }
  } catch (error) {
    console.error('Error forwarding to webhook:', error.message);
    if (error.name === 'FetchError') {
      // Specific handling for network-related fetch errors
      res.status(503).json({ success: false, message: 'Service unavailable: Could not reach webhook.', details: error.message });
    } else {
      // General error handling
      res.status(500).json({ success: false, message: 'Internal server error when forwarding to webhook.', details: error.message });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Global unhandled exception handler
process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
  // Optionally, perform graceful shutdown or restart logic here
  // For now, we'll just log and let nodemon handle restarts if configured
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionally, perform graceful shutdown or restart logic here
});