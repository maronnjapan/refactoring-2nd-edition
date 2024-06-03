const customerData = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
};

customerData[customerID].usages[year][month] = amount;

const compareUsage = (customerID, lateYear, month) => {
  const later = customerData[customerID].usages[lateYear][month];
  const earlier = customerData[customerID].usages[lateYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};
