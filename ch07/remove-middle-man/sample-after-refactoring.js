class Customer {
  constructor(name, loyaltyProgram) {
    this.name = name;
    this.loyaltyProgram = loyaltyProgram;
  }

  get loyaltyProgram() {
    return this.loyaltyProgram;
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

const bob = new Customer("Bob", new LoyaltyProgram());
bob.loyaltyProgram.addPoints(3000);
console.log(bob.loyaltyProgram.points); // 3000
console.log(bob.loyaltyProgram.getTier()); // "Silver"
console.log(bob.loyaltyProgram.calculateDiscount()); // 0.10
