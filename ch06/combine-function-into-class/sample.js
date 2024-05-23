const invoice = {
  customer: "ABC Company",
  items: [
    { name: "Item 1", quantity: 10, price: 50 },
    { name: "Item 2", quantity: 5, price: 100 },
    { name: "Item 3", quantity: 8, price: 75 },
  ],
  taxRate: 0.1,
  shippingCost: 20,
};

const getSubtotal = (invoice) => {
  let subtotal = 0;
  for (const item of invoice.items) {
    subtotal += item.quantity * item.price;
  }
  return subtotal;
};

const getTax = (invoice) => {
  const subtotal = getSubtotal(invoice);
  return subtotal * invoice.taxRate;
};

const getTotal = (invoice) => {
  const subtotal = getSubtotal(invoice);
  const tax = getTax(invoice);
  return subtotal + tax + invoice.shippingCost;
};

const printInvoice = (invoice) => {
  console.log(`Customer: ${invoice.customer}`);
  console.log("Items:");
  for (const item of invoice.items) {
    console.log(`  ${item.name}: ${item.quantity} x $${item.price}`);
  }
  console.log(`Subtotal: $${getSubtotal(invoice)}`);
  console.log(`Tax: $${getTax(invoice)}`);
  console.log(`Shipping Cost: $${invoice.shippingCost}`);
  console.log(`Total: $${getTotal(invoice)}`);
};

// Usage
printInvoice(invoice);
