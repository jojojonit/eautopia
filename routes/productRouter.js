const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

const { checkAdmin } = require("../config/checkAdmin");

router.get("/", productController.getAll);

//admin routes
router.post("/create", checkAdmin, productController.createProduct);
router.patch("/:id/update", checkAdmin, productController.updateProduct);
router.delete("/delete", checkAdmin, productController.deleteProduct);

module.exports = router;
