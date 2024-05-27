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

const calculateInvoice = (invoice) => {
  const calculateSubtotal = (items) => {
    return items.reduce(
      (subtotal, item) => subtotal + item.quantity * item.price,
      0
    );
  };

  const calculateTax = (subtotal, taxRate) => {
    return subtotal * taxRate;
  };

  const calculateTotal = (subtotal, tax, shippingCost) => {
    return subtotal + tax + shippingCost;
  };

  const subtotal = calculateSubtotal(invoice.items);
  const tax = calculateTax(subtotal, invoice.taxRate);
  const total = calculateTotal(subtotal, tax, invoice.shippingCost);

  return {
    subtotal,
    tax,
    total,
  };
};

const printInvoice = (invoice) => {
  const invoiceCopy = JSON.parse(JSON.stringify(invoice));
  const { subtotal, tax, total } = calculateInvoice(invoiceCopy);

  console.log(`Customer: ${invoiceCopy.customer}`);
  console.log("Items:");
  for (const item of invoiceCopy.items) {
    console.log(` ${item.name}: ${item.quantity} x $${item.price}`);
  }
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tax: $${tax}`);
  console.log(`Shipping Cost: $${invoiceCopy.shippingCost}`);
  console.log(`Total: $${total}`);
};

printInvoice(invoice);
