const express = require('express');
const app = express();

// Define port. Uncomment the second line to use a port number from the command line arguments if needed.
const port = 1245;
// const port = process.argv[3];

// Route that sends a simple message when the root is accessed
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Export the Express app for use in other modules
module.exports = app;
