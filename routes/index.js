const express = require("express");
const router = express.Router();

const customerRouter = require("./customer.router");
const productRouter = require("./product.router");

router.use("/customer", customerRouter);
router.use("/product", productRouter);

module.exports = router;