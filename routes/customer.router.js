const express = require("express");
const router = express.Router();

const { create, update, findAll, findOne, remove, addCarrito, removeCarrito } = require("../controllers/customer.controller");

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

router.post("/:id/add-carrito", addCarrito);
router.delete("/:customer_id/remove-carrito/:product_id", removeCarrito);

module.exports = router;