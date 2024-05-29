function calculatePoints(product, quantity, customerType) {
  const basePrice = product.price * quantity;
  let discount = 0;

  if (customerType === "PREMIUM") {
    discount = basePrice * 0.1;
  } else if (customerType === "REGULAR" && quantity > 10) {
    discount = basePrice * 0.05;
  }

  const totalPrice = basePrice - discount;
  let points = 0;

  if (totalPrice > 100) {
    points = Math.floor(totalPrice / 10);
  }

  return points;
}
