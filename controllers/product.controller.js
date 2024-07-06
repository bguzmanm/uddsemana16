const { Product } = require('../models/Product');

const p1 = new Product(1, 'iphone 12', 1500);
const p2 = new Product(2, 'iphone 13', 1800);
const p3 = new Product(3, 'iphone 14', 2000);

const products = [p1, p2, p3];

const create = (req, res) => {
  res.send({ ok: true, description: 'Producto creado correctamente' });
};

const update = (req, res) => {
  res.send({ ok: true, description: 'Producto actualizado correctamente' });
}

const remove = (req, res) => {
  res.send({ ok: true, description: 'Producto eliminado correctamente' });
}

const findAll = (req, res) => {
  res.send(products);
}

const findOne = (req, res) => {
  const id = req.params.id;

  const result = products.filter(p => { return p.id === Number.parseInt(id) });
  if (result.length == 0) {
    res.status(404).send({ ok: false, description: 'No encontré' });
  }

  res.send(products.filter(p => { return p.id === Number.parseInt(id) }));
}

module.exports = { create, update, remove, findAll, findOne };