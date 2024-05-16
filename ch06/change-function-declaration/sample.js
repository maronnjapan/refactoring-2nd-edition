function calculateTotalCost(orders) {
  let subtotal = 0;
  for (const order of orders) {
    subtotal += order.price * order.quantity;
  }

  const tax = subtotal * 0.1;
  const totalCost = subtotal + tax;

  return totalCost;
}

// Usage
const orders = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 15, quantity: 1 },
  { name: "Product 3", price: 20, quantity: 3 },
];

const totalCost = calculateTotalCost(orders);
console.log(totalCost);
