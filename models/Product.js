class Product {
  constructor(id, name, price, available, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.available = available;
    this.stock = stock;
  }
}

module.exports = { Product };