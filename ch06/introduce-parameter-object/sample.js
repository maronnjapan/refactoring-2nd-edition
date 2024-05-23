function processOrder(
  userId,
  itemId,
  quantity,
  price,
  discountCode,
  shippingMethod,
  shippingAddress,
  billingAddress
) {
  // 注文処理のロジックを実装
  // ...
  console.log(
    `User ${userId} ordered ${quantity} units of item ${itemId} at $${price} each, using discount code "${discountCode}".`
  );
  console.log(`Shipping method: ${shippingMethod}`);
  console.log(`Shipping address: ${shippingAddress}`);
  console.log(`Billing address: ${billingAddress}`);
}

// 関数の使用例
processOrder(
  "user123",
  "item456",
  2,
  49.99,
  "SUMMER_SALE",
  "Express",
  "123 Main St, Anytown, USA",
  "456 Elm St, Anytown, USA"
);
