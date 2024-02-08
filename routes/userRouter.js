const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAll);
router.post("/create", userController.create);
router.post("/login", userController.login);
router.get("/:id/address", userController.getAddresses);
router.post("/:id/addAddress", userController.updateAddress);
router.delete("/:id/deleteAddress/:addressId", userController.deleteAddress);
router.put("/:id/editAddress/:addressId", userController.editAddress);

module.exports = router;
