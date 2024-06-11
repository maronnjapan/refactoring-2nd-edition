class Order {
  constructor(customer, amount, discountRate) {
    this.customer = customer;
    this.amount = amount;
    this.discountRate = discountRate;
  }

  calculateDiscountedAmount() {
    if (this.discountRate >= 0 && this.discountRate <= 100) {
      return this.amount - (this.amount * this.discountRate) / 100;
    } else {
      throw new Error("Invalid discount rate");
    }
  }
}

// Usage example
const order = new Order("John Doe", 1000, 10);
console.log(order.calculateDiscountedAmount()); // 900
