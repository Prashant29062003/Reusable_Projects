const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

// Serve static files (like generated images)
app.use(express.static('public'));

// Route to generate QR code using Python script
app.get('/generate_qr', (req, res) => {
    const text = req.query.text;
    if (!text) {
        return res.status(400).send('Text is required');
    }

    // Run the Python script to generate the QR code
    exec(`python generate_qr.py "${text}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Failed to generate QR code');
        }

        // Serve the generated QR code image
        res.sendFile(path.join(__dirname, 'qr_code.png'));
    });
});

// Frontend page to trigger QR code generation
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
