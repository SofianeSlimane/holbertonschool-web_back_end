export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students) === true && students.every((item) => typeof item === 'string')) {
      this._students = students;
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  set lenght(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
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
