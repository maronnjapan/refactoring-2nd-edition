const defaultOwner = { firstName: "Martin", lastName: "Fowler" };

export const getDefaultOwner = () => new Person(defaultOwner);
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
}

export const setDefaultOwnerData = (owner, ownerData) => {
  Object.entries(ownerData).forEach((val) => {
    owner[val[0]] = val[1];
  });
};
