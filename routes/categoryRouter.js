const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

const { checkAdmin } = require("../config/checkAdmin");
const { checkToken } = require("../config/checkToken");

router.get("/", categoryController.getAll);
router.post(
  "/create",
  checkToken,
  checkAdmin,
  categoryController.createCategory
);
router.delete("/delete", categoryController.deleteCategory);

module.exports = router;
