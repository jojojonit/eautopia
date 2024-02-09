const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.post("/create", productController.create);
router.patch("/:id/update", productController.update);

module.exports = router;
