class Discount {
  constructor(rate) {
    if (rate >= 0 && rate <= 100) {
      this._rate = rate;
    } else {
      throw new Error("Invalid discount rate");
    }
  }

  get rate() {
    return this._rate;
  }

  calculate(amount) {
    return amount - (amount * this._rate) / 100;
  }
}

class Order {
  constructor(customer, amount, discount) {
    this.customer = customer;
    this.amount = amount;
    this.discount = discount;
  }

  calculateDiscountedAmount() {
    return this.discount.calculate(this.amount);
  }
}

// Usage example
const discount = new Discount(10);
const order = new Order("John Doe", 1000, discount);
console.log(order.calculateDiscountedAmount()); // 900
