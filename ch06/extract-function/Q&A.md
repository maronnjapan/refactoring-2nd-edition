Q. 関数の抽出はどのタイミングで行うとよいでしょうか?
A. 何をしているかの意図が伝わりにくいと考えたタイミングで行うとよいです。

Q. 関数の抽出をしたら処理が一行だけになりましたが、問題ないでしょうか？
A. 問題ありません。むしろ各関数は短い方がよいです。ただし、内部の処理で意図が伝わる場合は、関数にすると冗長になるので、避けるべきです。

Q. calculateOutstanding 関数で let を使っていますが問題ありませんか？
A. 最初の定義と、一種類の処理であれば問題ありません。ただし、以下のように複数の処理の結果を代入する場合は変数の分離を行うべきです。

```js
const calculateOutstanding = (invoice) => {
  let outStanding = 0;
  for (const o of invoice.orders) {
    outStanding += o.amount;
  }

  outStandint = outStanding * 2;

  return outStanding;
};
```
