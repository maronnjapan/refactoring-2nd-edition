const defaultOwner = { firstName: "Martin", lastName: "Fowler" };
// 変数への直接アクセスが防げない場合
const __privateOnly_defaultOwner = { firstName: "Martin", lastName: "Fowler" };

export const getDefaultOwner = () => defaultOwner;
export const setDefaultOwner = (arg) => {
  defaultOwner = arg;
};

// 使用側
spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

// Part-2-1
export const _getDefaultOwner = () => Object.assign({}, defaultOwner);
export const _setDefaultOwner = (arg) => {
  defaultOwner = arg;
};
// Part-2-2
export const __getDefaultOwner = () => new Person(defaultOwner);
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
}
