export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof (length) !== 'number') {
      throw new TypeError('Number must be a string');
    }
    this._length = length;

    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an Array');
    }
    for (const student of students) {
      if (typeof (student) !== 'string') {
        throw new TypeError('Students must contain strings');
      }
    }
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // getter for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Number must be a string');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(student) {
    if (typeof (student) !== 'string') {
      throw new TypeError('Students must contain strings');
    }
    this._students.push(student);
  }
}
