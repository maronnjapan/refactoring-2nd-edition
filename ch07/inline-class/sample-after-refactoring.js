class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this.name = name;
    this.officeAreaCode = officeAreaCode;
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getOfficeAreaCode() {
    return this.officeAreaCode;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// クライアントコード
const person = new Person("John Doe", "123", "456-7890");
console.log(person.getName());
console.log(person.getOfficeAreaCode());
console.log(person.getOfficeNumber());
