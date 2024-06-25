class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this.name = name;
    this.telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  getName() {
    return this.name;
  }

  getOfficeAreaCode() {
    return this.telephoneNumber.areaCode;
  }

  getOfficeNumber() {
    return this.telephoneNumber.number;
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this.areaCode = areaCode;
    this.number = number;
  }

  getAreaCode() {
    return this.areaCode;
  }

  getNumber() {
    return this.number;
  }
}

const person = new Person("John Doe", "123", "456-7890");
console.log(person.getName());
console.log(person.getOfficeAreaCode());
console.log(person.getOfficeNumber());
