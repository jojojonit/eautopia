const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.get("/", orderController.getAll);
router.get("/user/:id/", orderController.getOrderByUser);

module.exports = router;
