const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
const acquireReading = () => reading;

const enrichReading = (original) => {
  const result = _.cloneDeep(original);
  const calculateBaseCharge = (aReading) =>
    baseRate(aReading.month, aReading.year) * aReading.quantity;

  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
};

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
