class Person {
  constructor(name) {
    this._name = name;
    this._department = new Department();
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
}

class Department {
  constructor({ chargeCode, manager }) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

/** 呼び出し先 */
manager = aPerson.department.manager;
