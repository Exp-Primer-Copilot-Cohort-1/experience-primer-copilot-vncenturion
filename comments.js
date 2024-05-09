// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));

// Data
const comments = [
    {
        // Add closing curly brace here
    }
];
