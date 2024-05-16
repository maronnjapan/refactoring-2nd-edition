// After refactoring
function calculateTotalCost(price, quantity, taxRate) {
  const subtotal = calculateOrderCost(price, quantity);
  const tax = subtotal * taxRate;
  const totalCost = subtotal + tax;

  return totalCost;
}

function calculateOrderCost(price, quantity) {
  return price * quantity;
}

function calculateOrdersTotalCost(orders, taxRate) {
  let totalCost = 0;

  for (const order of orders) {
    const { price, quantity } = order;
    const orderTotalCost = calculateTotalCost(price, quantity, taxRate);
    totalCost += orderTotalCost;
  }

  return totalCost;
}

// Usage
const orders = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 },
  { price: 20, quantity: 3 },
];

const taxRate = 0.1;

const totalCost = calculateOrdersTotalCost(orders, taxRate);
console.log(totalCost);
