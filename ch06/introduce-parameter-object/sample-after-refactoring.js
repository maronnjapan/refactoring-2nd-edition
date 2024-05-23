function processOrder(customer, order, shippingInfo, billingInfo) {
  // 注文処理のロジックを実装
  // ...
  console.log(
    `User ${customer.userId} ordered ${order.quantity} units of item ${order.itemId} at $${order.price} each, using discount code "${order.discountCode}".`
  );
  console.log(`Shipping method: ${shippingInfo.method}`);
  console.log(`Shipping address: ${shippingInfo.address}`);
  console.log(`Billing address: ${billingInfo.address}`);
}

// 関数の使用例
const customer = {
  userId: "user123",
};

const order = {
  itemId: "item456",
  quantity: 2,
  price: 49.99,
  discountCode: "SUMMER_SALE",
};

const shippingInfo = {
  method: "Express",
  address: "123 Main St, Anytown, USA",
};

const billingInfo = {
  address: "456 Elm St, Anytown, USA",
};

processOrder(customer, order, shippingInfo, billingInfo);
