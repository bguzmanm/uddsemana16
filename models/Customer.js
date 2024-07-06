class Customer {
  constructor(id, name, lastName, email, country, carrito) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.carrito = carrito;
  }
}

module.exports = { Customer };