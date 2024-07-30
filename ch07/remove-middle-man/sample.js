// リファクタリング前

class Customer {
  constructor(name, loyaltyProgram) {
    this.name = name;
    this.loyaltyProgram = loyaltyProgram;
  }

  get points() {
    return this.loyaltyProgram.points;
  }

  addPoints(amount) {
    this.loyaltyProgram.addPoints(amount);
  }

  get tier() {
    return this.loyaltyProgram.getTier();
  }

  getDiscount() {
    return this.loyaltyProgram.calculateDiscount();
  }
}

class LoyaltyProgram {
  constructor() {
    this.points = 0;
  }

  addPoints(amount) {
    this.points += amount;
  }

  getTier() {
    if (this.points < 1000) return "Bronze";
    if (this.points < 5000) return "Silver";
    return "Gold";
  }

  calculateDiscount() {
    const tier = this.getTier();
    if (tier === "Bronze") return 0.05;
    if (tier === "Silver") return 0.1;
    return 0.15;
  }
}

/** 使用例 */
const alice = new Customer("Alice", new LoyaltyProgram());
alice.addPoints(2000);
console.log(alice.points); // 2000
console.log(alice.tier); // "Silver"
console.log(alice.getDiscount()); // 0.10
