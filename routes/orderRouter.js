const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

const { checkToken } = require("../config/checkToken");

router.get("/", orderController.getAll);
router.get("/user/:id/", orderController.getOrderByUser);
router.post("/addtocart", checkToken, orderController.createOrderItemByUser);

module.exports = router;
