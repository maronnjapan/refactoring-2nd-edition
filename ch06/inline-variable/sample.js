function calculateTotal(
  quantity,
  itemPrice,
  discountThreshold,
  discountRate,
  taxRate
) {
  const basePrice = quantity * itemPrice;
  let discountedPrice;

  if (basePrice > discountThreshold) {
    discountedPrice = basePrice * (1 - discountRate);
  } else {
    discountedPrice = basePrice;
  }

  const totalPrice = discountedPrice * (1 + taxRate);
  let shippingFee;

  if (totalPrice > 1000) {
    shippingFee = 0;
  } else {
    shippingFee = 50;
  }

  const finalPrice = totalPrice + shippingFee;
  return finalPrice;
}
