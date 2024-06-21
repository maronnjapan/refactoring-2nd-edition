class Order {
  constructor(
    itemName,
    quantity,
    price,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingZipCode
  ) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.price = price;
    this.shippingAddress = shippingAddress;
    this.shippingCity = shippingCity;
    this.shippingState = shippingState;
    this.shippingZipCode = shippingZipCode;
  }

  getShippingAddress() {
    return `${this.shippingAddress}, ${this.shippingCity}, ${this.shippingState} ${this.shippingZipCode}`;
  }

  calculateTotal() {
    return this.quantity * this.price;
  }
}

// 使用例
const order = new Order(
  "Widget",
  5,
  9.99,
  "123 Main St",
  "Anytown",
  "CA",
  "12345"
);
console.log(order.getShippingAddress());
console.log(order.calculateTotal());
