class Organization {
  constructor(data) {
    this._data.name = data.name;
    this._data.country = data.country;
  }
  get name() {
    return this._data.name;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get country() {
    return this._data.country;
  }
  set country(aString) {
    this._data.country = aString;
  }
}
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

const getOrganization = () => organization;

let result = "";
result += `<h1>${getOrganization().name}</h1>`;

getOrganization().name = newName;
