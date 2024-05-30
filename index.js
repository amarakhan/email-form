const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 3000;

require('dotenv').config();
const formId = process.env.FORM_ID;

// Parse incoming request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to handle form submissions
app.post('/api/send-email', async (req, res) => {
    const { email, subject, message } = req.body;
    
    if (!email || !subject || !message) {
        return res.status(400).json({ message: 'Please provide all required fields: email, subject, message' });
    }

    const formspreeEndpoint = `https://formspree.io/f/${formId}`;

    try {
        const response = await axios.post(formspreeEndpoint, {
            email,
            subject,
            message
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
            res.json({ message: 'Email sent successfully' });
        } else {
            res.status(response.status).json({ message: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

    // // Testing block:
    // setTimeout(() => {
    //     return res.status(500).json({ message: 'error' });
    // }, 4000);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
