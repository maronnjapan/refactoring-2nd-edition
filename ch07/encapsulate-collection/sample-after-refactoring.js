class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
    this._students = [];
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }

  get students() {
    return [...this._students];
  }

  addStudent(student) {
    this._students.push(student);
  }

  removeStudent(student) {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }
}

// Usage example
const course = new Course("JavaScript Programming", true);
course.addStudent("John");
course.addStudent("Alice");

console.log(course.name);
console.log(course.isAdvanced);
console.log(course.students);

course.removeStudent("Alice");
console.log(course.students);
