class Invoice {
  constructor(customer, items) {
    this.customer = customer;
    this.items = items;
  }

  calculateTotal() {
    const subtotal = this.calculateSubtotal();
    const taxAmount = this.calculateTaxAmount(subtotal);
    const shipping = this.getShippingCost();
    return subtotal + taxAmount + shipping;
  }

  calculateSubtotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  calculateTaxAmount(subtotal) {
    return subtotal * this.getTaxRate();
  }

  getShippingCost() {
    return 10;
  }

  getTaxRate() {
    return 0.1;
  }
}
