class Customer {
  constructor(id, name, lastName, email, country) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
  }
}

module.exports = { Customer };