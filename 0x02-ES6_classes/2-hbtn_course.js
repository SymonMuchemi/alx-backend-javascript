// holberton class blueprint
class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : TypeError('Name must be a string');
    this._length = typeof length === 'number' ? length : TypeError('Length must be an number');
    this._students = Array.isArray(students) ? students : TypeError('Students must be an array of strings');
  }

  // name getter
  get name() {
    return this._name;
  }

  // length getter
  get length() {
    return this._length;
  }

  // students getter
  get students() {
    return this._students;
  }

  // name setter
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw TypeError('Name must be an string');
    }
  }

  // length setter
  set length(len) {
    if (typeof len === 'number') {
      this._length = len;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // students setter
  set students(studentsArr) {
    if (Array.isArray(studentsArr)) {
      this._students = studentsArr;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
