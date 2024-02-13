const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

const { checkToken } = require("../config/checkToken");

router.get("/", orderController.getAll);
router.get("/viewcart", checkToken, orderController.getOrderByUser);
router.post("/addtocart", checkToken, orderController.createOrderItemByUser);
router.patch("/updatecart", checkToken, orderController.updateOrderItemByUser);
router.delete(
  "/deletecartitem",
  checkToken,
  orderController.deleteOrderItemByUser
);

module.exports = router;
