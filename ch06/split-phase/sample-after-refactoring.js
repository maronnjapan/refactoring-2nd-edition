function calculatePriceData(product, quantity, customerType) {
  const basePrice = product.price * quantity;

  const totalPrice = basePrice - calculateDiscount(basePrice, customerType);

  return { basePrice, discount, totalPrice };
}

function calculateDiscount(basePrice, customerType) {
  if (customerType === "PREMIUM") {
    return basePrice * 0.1;
  }

  return customerType === "REGULAR" && quantity > 10 ? basePrice * 0.05 : 0;
}

function calculatePoints(priceData) {
  return priceData.totalPrice > 100 ? Math.floor(priceData.totalPrice / 10) : 0;
}

function getPoints(product, quantity, customerType) {
  const priceData = calculatePriceData(product, quantity, customerType);
  const points = calculatePoints(priceData);

  return points;
}
