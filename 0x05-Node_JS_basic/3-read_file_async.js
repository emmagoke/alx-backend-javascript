// This script contains a function that read file asynchronously
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'UTF-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        let total = 0;
        const student = {}; const studentCount = {};

        const files = data.toString();
        const filesList = files.split('\n');

        for (const file of filesList.slice(1)) {
          total += 1;
          const content = file.trim().split(',');
          // this checks if CS or SWE are keys in the object student
          if (Object.prototype.hasOwnProperty.call(student, content[3])) {
            studentCount[content[3]] += 1;
            student[content[3]].push(content[0]);
          } else {
            studentCount[content[3]] = 1;
            student[content[3]] = [content[0]];
          }
        }

        console.log(`Number of students: ${total}`);
        for (const [key, value] of Object.entries(studentCount)) {
          console.log(`Number of students in ${key}: ${value}. List: ${student[key].join(', ')}`);
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
