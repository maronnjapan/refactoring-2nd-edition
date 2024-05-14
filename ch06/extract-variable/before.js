/**
 * Part-1 関数
 * @param {object} order 注文内容
 * @returns 購入数 × 料金から割引をし、送料を足した金額
 */
const price = (order) =>
  order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.quantity * order.itemPrice * 0.1, 100);

/**
 * Part-2 クラス
 */
class order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this.itemPrice;
  }

  get price() {
    return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100)
    );
  }
}
