/** 顧客クラス */
class Customer{
    constructor(name,discountRate){
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(new Date()))
    }

    get discountRate(){return this._discountRate}

    becomePreferred(){
        this._discountRate += 0.03;
        /**　以降も処理が続くとする */
    }

    applyDiscount(amount){
        return amount.subtract(amount.multiply(this._discountRate))
    }
}

/** 契約クラス */
class CustomerContract{
    constructor(startDate){
        this._startDate = startDate;
    }
}