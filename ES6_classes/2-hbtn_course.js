export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      console.error('TypeError: Name must be a string');
      console.error("    ...")
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      console.error('TypeError: Length must be a number');
      console.error("    ...")
    }
    if (Array.isArray(students) === true && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      console.error('TypeError: Students must be an array of strings');
      console.error("    ...")
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('TypeError: Name must be a string');
      console.error("    ...")
    }
  }

  set lenght(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      console.error('TypeError: Length must be a number');
      console.error("...")
    }
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) === true && newStudents.every((item) => typeof item === 'string')) {
      this._students = newStudents;
    }
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
