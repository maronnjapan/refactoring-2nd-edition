/** クレジットカード情報を管理するクラス */
class CreditCard {
  constructor(number, expirationDate, cvv) {
    this.number = number;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  isValid() {
    /** クレジットカードの有効性チェックロジック */
    return true;
  }
}

/** 顧客情報を管理するクラス */
class Customer {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.creditCards = [];
  }

  addCreditCard(creditCard) {
    this.creditCards.push(creditCard);
  }

  getDefaultCreditCard() {
    return this.creditCards[0];
  }
}

/** 注文を管理するクラス */
class Order {
  constructor(customer, items) {
    this.customer = customer;
    this.items = items;
    this.status = "pending";
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  process() {
    const creditCard = this.customer.getDefaultCreditCard();
    if (creditCard.isValid()) {
      /** 支払い処理のロジック */
      this.status = "processed";
      return true;
    }
    return false;
  }
}

/** 商品を管理するクラス */
class Product {
  constructor(name, price, stockQuantity) {
    this.name = name;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }

  isInStock() {
    return this.stockQuantity > 0;
  }

  reduceStock(quantity) {
    if (this.stockQuantity >= quantity) {
      this.stockQuantity -= quantity;
      return true;
    }
    return false;
  }
}

/** ショッピングカートを管理するクラス */
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (product.isInStock() && product.reduceStock(quantity)) {
      this.items.push({ product, quantity });
      return true;
    }
    return false;
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      const { quantity } = this.items[index];
      product.stockQuantity += quantity;
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  checkout(customer) {
    const order = new Order(
      customer,
      this.items.map((item) => item.product)
    );
    if (order.process()) {
      this.items = [];
      return order;
    }
    return null;
  }
}

/** オンラインショップを管理するクラス */
class OnlineShop {
  constructor() {
    this.products = [];
    this.customers = [];
    this.shoppingCarts = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  registerCustomer(customer) {
    this.customers.push(customer);
  }

  createShoppingCart() {
    const cart = new ShoppingCart();
    this.shoppingCarts.push(cart);
    return cart;
  }

  processOrder(customer, shoppingCart) {
    return shoppingCart.checkout(customer);
  }
}

const shop = new OnlineShop();

const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Mouse", 50, 20);
shop.addProduct(product1);
shop.addProduct(product2);

const customer = new Customer("John Doe", "john@example.com", "123 Main St");
const creditCard = new CreditCard("1234-5678-9012-3456", "12/25", "123");
customer.addCreditCard(creditCard);
shop.registerCustomer(customer);

const cart = shop.createShoppingCart();
cart.addItem(shop.products[0], 1);
cart.addItem(shop.products[1], 2);

const order = shop.processOrder(shop.customers[0], cart);
console.log(order.status);
console.log(shop.products[0].stockQuantity);
console.log(shop.products[1].stockQuantity);
