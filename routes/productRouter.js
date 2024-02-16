const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

const { checkAdmin } = require("../config/checkAdmin");
const { checkToken } = require("../config/checkToken");

router.get("/", productController.getAll);
router.get("/perfumes", productController.getPerfumes);

router.post("/create", checkToken, checkAdmin, productController.createProduct);
router.patch(
  "/:id/update",
  checkToken,
  checkAdmin,
  productController.updateProduct
);
router.delete(
  "/:id/delete",
  checkToken,
  checkAdmin,
  productController.deleteProduct
);
router.post("/:id/addnotes", productController.addNotes);

module.exports = router;
