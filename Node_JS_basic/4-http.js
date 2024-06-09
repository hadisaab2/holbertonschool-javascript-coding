// Disable ESLint rules for the entire file
/* eslint-disable */

// Import the http module to create an HTTP server
const http = require('http');

// Create an HTTP server instance and handle incoming requests
const app = http.createServer((req, res) => {
    // Set the status code of the response to 200 (OK)
    res.statusCode = 200;
    // Set the Content-Type of the response to text/plain
    res.setHeader('Content-Type', 'text/plain');
    // Send the response body 'Hello Holberton School!' and end the response
    res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the server instance for potential use in other modules or for testing
module.exports = app;
