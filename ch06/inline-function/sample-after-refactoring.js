function calculateTotalPrice(items, taxRate, discountThreshold, discountRate) {
  const itemsBasePrice = items.map((item) => item.price * item.quantity);
  const totalBasePrice = itemsBasePrice.reduce((pre, acc) => pre + acc, 0);

  const discountedSubtotal =
    totalBasePrice > discountThreshold
      ? subtotal - subtotal * discountRate
      : subtotal;

  const tax = discountedSubtotal * taxRate;
  const totalPrice = discountedSubtotal + tax;

  return totalPrice;
}
