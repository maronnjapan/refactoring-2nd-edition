function calculateTotal(
  quantity,
  itemPrice,
  discountThreshold,
  discountRate,
  taxRate
) {
  const discountedPrice =
    quantity * itemPrice > discountThreshold
      ? quantity * itemPrice * (1 - discountRate)
      : quantity * itemPrice;

  const totalPrice = discountedPrice * (1 + taxRate);

  return totalPrice > 1000 ? totalPrice : totalPrice + 50;
}
