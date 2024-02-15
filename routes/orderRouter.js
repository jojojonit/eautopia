const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

const { checkToken } = require("../config/checkToken");

router.get("/", orderController.getAll);
router.get("/find", orderController.find);

router.post("/guestaddtocart", orderController.createOrderItem);

router.get("/viewcart", checkToken, orderController.getOrderByUser);
router.get(
  "/viewcomplete",
  checkToken,
  orderController.getCompletedOrderByUser
);

router.post("/addtocart", checkToken, orderController.createOrderItemByUser);
router.patch("/updatecart", checkToken, orderController.updateOrderItemByUser);
router.delete(
  "/deletecartitem",
  checkToken,
  orderController.deleteOrderItemByUser
);

router.post("/checkout", checkToken, orderController.checkout);

module.exports = router;
