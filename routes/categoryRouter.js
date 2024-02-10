const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAll);
router.post("/create", categoryController.createCategory);
router.delete("/delete", categoryController.deleteCategory);

module.exports = router;
