class Invoice {
  constructor(customer, items) {
    this.customer = customer;
    this.items = items;
  }

  calculateTotal() {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += item.price * item.quantity;
    }

    const taxRate = 0.1;
    const taxAmount = subtotal * taxRate;

    const shipping = 10;
    const grandTotal = subtotal + taxAmount + shipping;

    return grandTotal;
  }
}
