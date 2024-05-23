class Invoice {
  constructor(customer, items, taxRate, shippingCost) {
    this._customer = customer;
    this._items = items;
    this._taxRate = taxRate;
    this._shippingCost = shippingCost;
  }

  get customer() {
    return this._customer;
  }

  get items() {
    return this._items;
  }

  get taxRate() {
    return this._taxRate;
  }

  get shippingCost() {
    return this._shippingCost;
  }

  getSubtotal() {
    let subtotal = 0;
    for (const item of this._items) {
      subtotal += item.quantity * item.price;
    }
    return subtotal;
  }

  getTax() {
    return this.getSubtotal() * this._taxRate;
  }

  getTotal() {
    return this.getSubtotal() + this.getTax() + this._shippingCost;
  }

  printInvoice() {
    console.log(`Customer: ${this._customer}`);
    console.log("Items:");
    for (const item of this._items) {
      console.log(`  ${item.name}: ${item.quantity} x $${item.price}`);
    }
    console.log(`Subtotal: $${this.getSubtotal()}`);
    console.log(`Tax: $${this.getTax()}`);
    console.log(`Shipping Cost: $${this._shippingCost}`);
    console.log(`Total: $${this.getTotal()}`);
  }
}

// Usage
const invoiceData = {
  customer: "ABC Company",
  items: [
    { name: "Item 1", quantity: 10, price: 50 },
    { name: "Item 2", quantity: 5, price: 100 },
    { name: "Item 3", quantity: 8, price: 75 },
  ],
  taxRate: 0.1,
  shippingCost: 20,
};

const invoice = new Invoice(
  invoiceData.customer,
  invoiceData.items,
  invoiceData.taxRate,
  invoiceData.shippingCost
);

invoice.printInvoice();
