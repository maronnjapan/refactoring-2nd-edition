const customerData2 = {
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

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    return (this._data[customerID].usages[year][month] = amount);
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
let customerData = new CustomerData({
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
});
const getCustomerData = () => customerData;

getCustomerData().setUsage(customerID, year, month, amount);

const compareUsage = (customerID, lateYear, month) => {
  const later = getCustomerData().usage(customerID, lateYear, month);
  const earlier = getCustomerData().usage(customerID, lateYear - 1, month);
  return { laterAmount: later, change: later - earlier };
};
