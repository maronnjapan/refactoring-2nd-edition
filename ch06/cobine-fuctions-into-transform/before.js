const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
const acuquireReading = () => reading;
const aReading = acuquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

const basicChargeAmount = calculateBaseCharge(aReading);
const calculateBaseCharge = (aReading) =>
  baseRate(aReading.month, aReading.year) * aReading.quantity;
