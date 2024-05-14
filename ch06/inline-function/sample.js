// 購入内容から割引を行い税金を加算した金額の計算を行う関数
function calculateTotalPrice(items, taxRate, discountThreshold, discountRate) {
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += item.price * item.quantity;
  }

  if (totalPrice > discountThreshold) {
    totalPrice -= totalPrice * discountRate;
  }

  totalPrice += totalPrice * taxRate;

  return totalPrice;
}
