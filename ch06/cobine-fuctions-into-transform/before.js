const acquireReading = () => ({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

// client1 最初は基本料金を出すために記載していた
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2 課税対象料金を計算する処理にも使われている
const aReading2 = acquireReading();
const base = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));

// client3 ここでも同じような処理が使われている
const aReading3 = acquireReading();
const basicChargeAmount =
  baseRate(aReading3.month, aReading3.year) * aReading3.quantity;
const calculateBaseCharge = (aReading) =>
  baseRate(aReading.month, aReading.year) * aReading.quantity;
