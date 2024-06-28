class Address {
  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  toString() {
    return `${this.street}, ${this.city}, ${this.zipCode}`;
  }
}

class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }
}

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.address = null;
    this.department = null;
  }

  setAddress(address) {
    this.address = address;
  }

  setDepartment(department) {
    if (this.department) {
      this.department.removeEmployee(this);
    }
    this.department = department;
    department.addEmployee(this);
  }

  getAddress() {
    return this.address;
  }

  getDepartment() {
    return this.department;
  }
}

const salesDepartment = new Department("Sales");
const marketingDepartment = new Department("Marketing");

const john = new Employee("John Doe", "Sales Representative", 50000);
john.setAddress(new Address("123 Main St", "Anytown", "12345"));
john.setDepartment(salesDepartment);

const jane = new Employee("Jane Smith", "Marketing Specialist", 60000);
jane.setAddress(new Address("456 Elm St", "Othertown", "67890"));
jane.setDepartment(marketingDepartment);

console.log(
  `${john.name} works in the ${john.getDepartment().name} department`
);
console.log(`${john.name}'s address: ${john.getAddress().toString()}`);

john.setDepartment(marketingDepartment);
/**  */
john.setDepartment(marketingDepartment);
console.log(
  `${john.name} now works in the ${john.getDepartment().name} department`
);

console.log(
  `Employees in Marketing department: ${marketingDepartment.employees
    .map((e) => e.name)
    .join(", ")}`
);
