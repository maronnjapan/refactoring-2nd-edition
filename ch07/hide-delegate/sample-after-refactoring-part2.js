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

  getEmployeeNames() {
    return this.employees.map((e) => e.getName());
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

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address ? this.address.toString() : "No address set";
  }

  getDepartmentName() {
    return this.department ? this.department.name : "No department assigned";
  }
}

class EmployeeManager {
  constructor() {
    this.employees = [];
    this.departments = [];
  }

  createEmployee(name, position, salary) {
    const employee = new Employee(name, position, salary);
    this.employees.push(employee);
    return employee;
  }

  createDepartment(name) {
    const department = new Department(name);
    this.departments.push(department);
    return department;
  }

  setEmployeeAddress(employee, street, city, zipCode) {
    const address = new Address(street, city, zipCode);
    employee.setAddress(address);
  }

  assignEmployeeToDepartment(employee, department) {
    employee.setDepartment(department);
  }

  getEmployeeInfo(employee) {
    return `${employee.getName()} works in the ${employee.getDepartmentName()} department. Address: ${employee.getAddress()}`;
  }

  getEmployeesInDepartment(department) {
    return department.getEmployeeNames();
  }
}

const manager = new EmployeeManager();

const salesDepartment = manager.createDepartment("Sales");
const marketingDepartment = manager.createDepartment("Marketing");

const john = manager.createEmployee("John Doe", "Sales Representative", 50000);
manager.setEmployeeAddress(john, "123 Main St", "Anytown", "12345");
manager.assignEmployeeToDepartment(john, salesDepartment);

const jane = manager.createEmployee(
  "Jane Smith",
  "Marketing Specialist",
  60000
);
manager.setEmployeeAddress(jane, "456 Elm St", "Othertown", "67890");
manager.assignEmployeeToDepartment(jane, marketingDepartment);

console.log(manager.getEmployeeInfo(john));

manager.assignEmployeeToDepartment(john, marketingDepartment);
console.log(manager.getEmployeeInfo(john));

console.log(
  `Employees in Marketing department: ${manager
    .getEmployeesInDepartment(marketingDepartment)
    .join(", ")}`
);
