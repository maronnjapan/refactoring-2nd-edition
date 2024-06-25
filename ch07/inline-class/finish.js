class Shipment {
  constructor(shippingCompany, trackingNumber) {
    this._trackingNumber = trackingNumber;
    this._shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

/** 呼び出し部分 */
aShipment.shippingCompany = request.vendor;
