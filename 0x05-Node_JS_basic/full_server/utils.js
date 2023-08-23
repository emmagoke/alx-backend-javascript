const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'UTF-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};

        const dataList = data.toString().split('\n');

        // this slice from 1 to the end python equi is [1:]
        for (const item of dataList.slice(1)) {
          const content = item.trim().split(',');

          if (Object.hasOwnProperty.call(students, content[3])) {
            students[content[3]].push(content[0]);
          } else {
            students[content[3]] = [content[0]];
          }
        }

        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
