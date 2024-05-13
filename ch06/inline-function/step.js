// リファクタリングPart-1
var rateing = (aDriver) => (moreThanFiveLateDeliveries(aDriver) ? 2 : 1);
// 内部の処理を読んで推測する内容と関数の名前に相違がない
var moreThanFiveLateDeliveries = (aDriver) =>
  aDriver.numberOfLateDeliveries > 5;

/**
 * STEP-1 不要な関数を無くす
 * aDriver.numberOfLateDeliveries > 5 は遅配の数が5より大きいかという意味だと推測する
 * moreThanFiveLateDeliveriesも遅配の数が5より大きいかという意味だと推測する
 * ⇒関数に置き換える意味がない
 */
var rateing = (aDriver) => (aDriver.numberOfLateDeliveries > 5 ? 2 : 1);

// リファクタリングPart-2
var reportLines = (aCustomer) => {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
};
/**
 * pushメソッドにはデータを追加する機能がある
 * aCustomerという変数名から消費者と分かる
 * ⇒out.push(['プロパティ名',aCustomer[プロパティ名]])で意図は伝わる。
 */
var gatherCustomerData = (out, aCustomer) => {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
};

/**
 * STEP-1 name属性の移動
 */
var reportLines = (aCustomer) => {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
};
var gatherCustomerData = (out, aCustomer) => {
  out.push(["location", aCustomer.location]);
};

/**
 * STEP-2 location属性の移動
 */
var reportLines = (aCustomer) => {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
};
