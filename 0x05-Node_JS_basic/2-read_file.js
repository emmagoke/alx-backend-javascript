const fs = require('fs');

function countStudents(path) {
  try {
    let total = 0; let cs = 0; let
      swe = 0;
    const csList = []; const
      sweList = [];
    let files = fs.readFileSync(path);
    files = files.toString();
    const filesList = files.split('\n');
    for (const file of filesList.slice(1)) {
      total += 1;
      const content = file.trim().split(',');
      if (content[3] === 'CS') {
        cs += 1;
        csList.push(content[0]);
      } else if (content[3] === 'SWE') {
        swe += 1;
        sweList.push(content[0]);
      }
    }
    process.stdout.write(`Number of students: ${total}\n`);
    process.stdout.write(`Number of students in CS: ${cs}.\
 List: ${csList.join(', ')}\n`);
    process.stdout.write(`Number of students in SWE: ${swe}.\
 List: ${sweList.join(', ')}\n`);
    // console.log(files_list[1:], total);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
