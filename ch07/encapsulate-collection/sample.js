class Course {
  constructor(name, isAdvanced) {
    this.name = name;
    this.isAdvanced = isAdvanced;
    this.students = [];
  }
}

// Usage example
const course = new Course("JavaScript Programming", true);
course.students.push("John");
course.students.push("Alice");

console.log(course.name); // "JavaScript Programming"
console.log(course.isAdvanced); // true
console.log(course.students); // ["John", "Alice"]

course.students.splice(course.students.indexOf("Alice"), 1);
console.log(course.students); // ["John"]
