// 内部の処理がそれぞれ何をしているかがコメントを見ないとわからない
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

// 解決方法：処理を関数として抽出することで、各処理の意図を分かるようにする

/**
 * STEP-1 バナーを印字する部分の抽出し、それに置き換える
 */
const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};

var printOwing = (invoice) => {
  let outStanding = 0;

  printBanner();

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

/**
 * STEP-2 明細の印字も関数に抽出し、置き換える
 */
var printOwing = (invoice) => {
  let outStanding = 0;

  printBanner();

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

  printDetails();

  // 明細の印字
  const printDetails = () => {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outStanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  };
};
// ※以下の方法での定義でも良い
const printDetails = (invoice, outStanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outStanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

/**
 * STEP-3 締め日の記録部分を関数に抽出し、それを使用する
 */
const recordDueDate = (invoice) => {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

var printOwing = (invoice) => {
  let outStanding = 0;

  printBanner();

  // 未払金の計算
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outStanding);
};

/**
 * STEP-4 未払金支払い部分に関係する処理を近くにする
 */
var printOwing = (invoice) => {
  printBanner();

  // 未払金の計算
  let outStanding = 0;
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outStanding);
};

/**
 * STEP-5 未払金の計算を関数に抽出して、それを使用する
 */
const calculateOutstanding = (invoice) => {
  let outStanding = 0;
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  return outStanding;
};

var printOwing = (invoice) => {
  printBanner();

  const outStanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outStanding);
};
