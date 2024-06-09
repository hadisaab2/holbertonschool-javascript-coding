// Import the express module
const express = require('express');

// Process command-line arguments to get the database path
const args = process.argv.slice(2);
// Import the countStudents function from the 3-read_file_async module
const countStudents = require('./3-read_file_async');

// Assign the first command-line argument as the path to the database
const DATABASE = args[0];

// Create an instance of an Express application
const app = express();
// Define the port number the server will listen on
const port = 1245;

// Define a route for the root path '/'
app.get('/', (req, res) => {
  // Send a simple text response when the root path is requested
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' path
app.get('/students', async (req, res) => {
  // Base message for the '/students' path
  const msg = 'This is the list of our students\n';
  try {
    // Await the result of countStudents which reads and processes the database
    const students = await countStudents(DATABASE);
    // Send the student count along with the detailed list as the response
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    // If an error occurs, send the base message along with the error message
    res.send(`${msg}${error.message}`);
  }
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  // This line is commented out, but it can be used for logging when the server starts
  // console.log(`Example app listening at http://localhost:${port}`);
});

// Export the app for testing or for requiring in other modules
module.exports = app;
