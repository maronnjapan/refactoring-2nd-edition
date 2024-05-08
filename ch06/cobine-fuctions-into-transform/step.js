var acquireReading = () => ({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

// client1 最初は基本料金を出すために記載していた
var aReading = acquireReading();
var baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2 課税対象料金を計算する処理にも使われている
var aReading2 = acquireReading();
var base = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
var taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));

// client3 ここでも同じような処理が使われている
var aReading3 = acquireReading();
var basicChargeAmount = calculateBaseCharge(aReading3);
var calculateBaseCharge = (aReading) =>
  baseRate(aReading.month, aReading.year) * aReading.quantity;

// 解消方法 派生値を変換ステップに移す

/**
 * STEP1 変換関数の作成
 * オブジェクトをコピーする
 * @param {object} original - 元のオブジェクト
 * @returns {object} - コピーしたオブジェクト
 */
var enrichReading = (original) => _.cloneDeep(original);

/** STEP2 変換関数の適用
 *  client3 に適用
 */
var rawReading = acquireReading();
var aReading3 = enrichReading(rawReading);
var basicChargeAmount = calculateBaseCharge(_aReading3);

/**
 * STEP-3 関数の移動
 * enrichReading関数に処理を移動
 */
var enrichReading = (original) => {
  var result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
};

/** STEP-4 STEP3の内容をもとに取得する値を変更
 *  client3 に適用
 */
var rawReading = acquireReading();
var aReading3 = enrichReading(rawReading);
var basicChargeAmount = aReading3.baseCharge;

/**
 * STEP-5 client1へも適用
 */
var rawReading = acquireReading();
var aReading = enrichReading(rawReading);
var baseCharge = aReading.baseCharge;

/**
 * STEP-6 変数のインライン化≒過剰な変数化の解除をclient1にする
 * ⇒ 変数baseChargeを設ける必要がない
 */
var rawReading = acquireReading();
var aReading = enrichReading(__rawReading);

/**
 * STEP-7 client2も修正
 */
var rawReading = acquireReading();
var aReading2 = enrichReading(rawReading);
var base = aReading2.baseCharge;
var taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));

/**
 * STEP-8 変数のインライン化≒過剰な変数化の解除をclient2にする
 * ⇒ 変数baseを設ける必要がない
 */
var rawReading = acquireReading();
var aReading2 = enrichReading(rawReading);
var taxableCharge = Math.max(
  0,
  aReading2.baseCharge - taxThreshold(aReading2.year)
);

/**
 * STEP-9 変換関数に税の対象料金計算処理を移す
 */
var enrichReading = (original) => {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
};

/**
 * STEP-10 移したプロパティから値を取得
 */
var rawReading = acquireReading();
var aReading2 = enrichReading(rawReading);
var taxableCharge = aReading2.taxableCharge;

/**
 * STEP-11 変数のインライン化≒過剰な変数化の解除をtaxableChargeに施す
 * ⇒変数taxableChargeを変数定義する必要がない
 */
var rawReading = acquireReading();
var aReading = enrichReading(rawReading);
