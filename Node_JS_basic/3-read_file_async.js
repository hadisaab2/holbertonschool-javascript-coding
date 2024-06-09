const fs = require('fs');

// Function to count students and organize them by field
function countStudents(path) {
  // Returning a promise since file reading is asynchronous
  return new Promise((resolve, reject) => {
    // Asynchronously read file content
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise in case of an error
        reject(Error('Cannot load the database'));
        return;
      }
      // Array to hold the response messages
      const response = [];
      let msg;

      // Split the file content line by line
      const content = data.toString().split('\n');

      // Filter out any empty lines
      let students = content.filter((item) => item);

      // Split each line into components based on commas (CSV)
      students = students.map((item) => item.split(','));

      // Calculate the number of students, excluding the header
      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(msg);
      response.push(msg);

      // Object to hold the count of students in each field
      const fields = {};
      for (const i in students) {
        // Skip the header row
        if (i !== 0) {
          // Initialize the field in the object if not already
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          // Push the student name to the respective field
          fields[students[i][3]].push(students[i][0]);
        }
      }

      // Remove the entry for 'field' key, which comes from the header
      delete fields.field;

      // Iterate over each field to prepare the response
      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(msg);

        // Push the message to the response array
        response.push(msg);
      }

      // Resolve the promise with the array of response messages
      resolve(response);
    });
  });
}

module.exports = countStudents;
