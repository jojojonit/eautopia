const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.post("/create", productController.createProduct);
router.patch("/:id/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);

module.exports = router;
