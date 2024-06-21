class Address {
  constructor(street, city, state, zipCode) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }

  toString() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
  }
}

class Order {
  constructor(itemName, quantity, price, shippingAddress) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.price = price;
    this.shippingAddress = shippingAddress;
  }

  getShippingAddressString() {
    return this.shippingAddress.toString();
  }

  getShippingAddress() {
    return this.shippingAddress;
  }

  calculateTotal() {
    return this.quantity * this.price;
  }
}

// 使用例
const address = new Address("123 Main St", "Anytown", "CA", "12345");
const order = new Order("Widget", 5, 9.99, address);
console.log(order.getShippingAddressString());
console.log(order.calculateTotal());
