const priceOrder = (product, quantity, shippingMethod) => {
  const priceData = calculatePriceingData(product, quantity);

  return applyShipping(priceData, shippingMethod, discount);
};

const calculatePriceingData = (product, quantity) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice, quantity, discount };
};

const applyShipping = (priceData, shippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return basePrice - priceData.discount + shippingCost;
};
