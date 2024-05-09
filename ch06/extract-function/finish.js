const printOwing = (invoice) => {
  printBanner();

  const outStanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outStanding);
};

const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};

const calculateOutstanding = (invoice) => {
  let outStanding = 0;
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  return outStanding;
};

const recordDueDate = (invoice) => {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printDetails = (invoice, outStanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outStanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};
