const { Customer } = require('../models/Customer');

const c1 = new Customer(1, 'Cliente', 'Feliz', 'cliente@feliz.com', 'Chile', [{ product_id: 1, quantity: 10}, {product_id: 2, quantity: 5}]);
const c2 = new Customer(2, 'Cliente', 'Enojado', 'cliente@enojado.com', 'Chile', [{ product_id: 1, quantity: 10}]);
const c3 = new Customer(3, 'No Cliente', 'Neutro', 'nocliente@neutro.com', 'Chile', [{ product_id:2, quantity: 1}, {product_id:3, quantity: 8}]);



const create = (req, res) => {
  res.send(
    {
      ok: true,
      description: 'Cliente creado correctamente'
    }
  );
};

const update = (req, res) => {
  res.send({ ok: true, description: 'Cliente actualizado correctamente' });
}

const remove = (req, res) => {
  res.send({ ok: true, description: 'Cliente eliminado correctamente' });
}

const findAll = (req, res) => {
  res.send([c1, c2, c3]);
}

const findOne = (req, res) => {
  res.send(c1);
}

const addCarrito = (req, res) => {
  res.send({ ok: true, description: 'Producto agregado al carrito' });
}
const removeCarrito = (req, res) => {
  res.send({ ok: true, description: 'Producto removido del carrito' });
}

module.exports = { create, update, remove, findAll, findOne, addCarrito, removeCarrito };