const express = require("express");
const router = express.Router();

const { create, update, findAll, findOne, remove } = require("../controllers/product.controller");

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;