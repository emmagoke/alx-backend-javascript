const express = require('express');
const fs = require('fs');

const port = 1245;

const app = express();

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

        let output = '';

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

        output += `Number of students: ${total}\n`;
        for (const [key, value] of Object.entries(studentCount)) {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${student[key].join(', ')}\n`;
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.append('Content-Type', 'text/plain');
  response.send('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((result) => {
      response.send(result.slice(0, -1));
    })
    .catch(() => {
      response.status(404);
      response.send('Cannot load the database');
    });
});

app.listen(port, () => {});

module.exports = app;
