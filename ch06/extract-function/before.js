var printOwing = (invoice) => {
  let outStanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // 未払金の計算
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  // 締め日の記録
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 明細の印字
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outStanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};
