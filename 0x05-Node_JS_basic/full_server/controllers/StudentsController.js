/**
 * Contains the student-related route handlers.
 */

const readDatabase = require('../utils');

/* The list of supported majors. */
const validMajor = ['SWE', 'CS'];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((output) => {
      const compareValue = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        } if (a[0].toLowerCase > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      };

      const result = [];
      result.push('This is the list of our students');
      for (const [key, value] of Object.entries(output).sort(compareValue)) {
        result.push(`Number of students in ${key}: ${output[key].length}. List: ${value.join(', ')}`);
      }
      response.status(200).send(result.join('\n'));
    }).catch((error) => {
      response.status(500).send(error.toString());
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (validMajor.includes(major)) {
      readDatabase(process.argv[2]).then((output) => {
        const majorGroup = output[major];
        response.status(200).send(`List: ${majorGroup.join(', ')}`);
      }).catch((error) => {
        response.status(500).send(error.toString());
      });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
