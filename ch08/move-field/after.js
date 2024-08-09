/** 顧客クラス */
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date(), discountRate);
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
    /**　以降も処理が続くとする */
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

/** 契約クラス */
class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}
