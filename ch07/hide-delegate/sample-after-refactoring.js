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

  getStockQuantity() {
    return this.stockQuantity;
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

  getItems() {
    return [...this.items];
  }

  clear() {
    this.items = [];
  }
}

/** オンラインショップを管理するクラス */
class OnlineShop {
  constructor() {
    this.products = [];
    this.customers = [];
    this.shoppingCarts = [];
    this.orders = [];
  }

  addProduct(name, price, stockQuantity) {
    const product = new Product(name, price, stockQuantity);
    this.products.push(product);
    return product;
  }

  getProductByName(name) {
    return this.products.find((product) => product.name === name);
  }

  registerCustomer(name, email, address) {
    const customer = new Customer(name, email, address);
    this.customers.push(customer);
    return customer;
  }

  getCustomerByEmail(email) {
    return this.customers.find((customer) => customer.email === email);
  }

  addCreditCardToCustomer(customerEmail, cardNumber, expirationDate, cvv) {
    const customer = this.getCustomerByEmail(customerEmail);
    if (customer) {
      const creditCard = new CreditCard(cardNumber, expirationDate, cvv);
      customer.addCreditCard(creditCard);
      return true;
    }
    return false;
  }

  createShoppingCart() {
    const cart = new ShoppingCart();
    this.shoppingCarts.push(cart);
    return cart;
  }

  addToCart(cart, productName, quantity) {
    const product = this.getProductByName(productName);
    if (product) {
      return cart.addItem(product, quantity);
    }
    return false;
  }

  removeFromCart(cart, productName) {
    const product = this.getProductByName(productName);
    if (product) {
      return cart.removeItem(product);
    }
    return false;
  }

  processOrder(customerEmail, cart) {
    const customer = this.getCustomerByEmail(customerEmail);
    if (!customer) {
      return null;
    }

    const order = new Order(
      customer,
      cart.getItems().map((item) => item.product)
    );
    if (order.process()) {
      this.orders.push(order);
      cart.clear();
      return order;
    }
    return null;
  }

  getOrderStatus(orderId) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      return {
        status: order.status,
        totalPrice: order.getTotalPrice(),
        items: order.items.map((item) => item.name),
      };
    }
    return null;
  }

  getProductStock(productName) {
    const product = this.getProductByName(productName);
    return product ? product.getStockQuantity() : null;
  }
}

const shop = new OnlineShop();

const laptop = shop.addProduct("Laptop", 1000, 10);
const mouse = shop.addProduct("Mouse", 50, 20);

const customer = shop.registerCustomer(
  "John Doe",
  "john@example.com",
  "123 Main St"
);
shop.addCreditCardToCustomer(
  "john@example.com",
  "1234-5678-9012-3456",
  "12/25",
  "123"
);

const cart = shop.createShoppingCart();
shop.addToCart(cart, "Laptop", 1);
shop.addToCart(cart, "Mouse", 2);

const order = shop.processOrder("john@example.com", cart);
console.log(order.status);
console.log(shop.getProductStock("Laptop"));
console.log(shop.getProductStock("Mouse"));
