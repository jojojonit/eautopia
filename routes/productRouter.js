const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

const { checkAdmin } = require("../config/checkAdmin");
const { checkToken } = require("../config/checkToken");

router.get("/", productController.getAll);

//admin routes
router.post("/create", checkToken, checkAdmin, productController.createProduct);
router.patch("/:id/update", productController.updateProduct);
router.delete(
  "/:id/delete",
  checkToken,
  checkAdmin,
  productController.deleteProduct
);

module.exports = router;
