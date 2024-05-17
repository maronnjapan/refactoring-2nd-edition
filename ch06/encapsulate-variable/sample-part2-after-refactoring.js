const defaultUser = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

export class User {
  constructor(data) {
    this._name = data.name;
    this._age = data.age;
    this._email = data.email;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}

export function getDefaultUser() {
  return new User(defaultUser);
}
