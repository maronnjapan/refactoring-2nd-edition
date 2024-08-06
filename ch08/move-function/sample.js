class Account {
    get bankCharge(){
        let result = 4.5;
        if(this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge(){
        if(this.type.isPremium){
            const baseCharge = 10;
            if(this._daysOverdrawn <)
        }
    }
}