class TrackingInformation {
  constructor(data) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
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
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  constructor(shippingCompany, trackingNumber) {
    this._trackingInfomation = new TrackingInformation({
      shippingCompany,
      trackingNumber,
    });
  }

  get trackingInfo() {
    return this._trackingInfomation.display;
  }

  get trackingInformation() {
    return this._trackingInfomation;
  }

  set TrackingInformation(aTrackingInformation) {
    this._trackingInfomation = aTrackingInformation;
  }
}

/** 呼び出し部分 */
aShipment.trackingInformation.shippingCompany = request.vendor;
