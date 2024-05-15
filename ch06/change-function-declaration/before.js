const circum = (radius) => 2 * Math.PI * radius;

class Book {
  addReservation(customer) {
    this._reservations.push(customer);
  }
}

const inNewEngland = (aCustomer) =>
  ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
// isNewEngland関数を使用しているコード(リファクタリング対象外)
const newEnglands = someCusteomrs.filter((c) => isNewEngland(c));
