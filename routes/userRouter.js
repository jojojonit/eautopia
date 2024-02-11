const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { checkToken } = require("../config/checkToken");

router.get("/", userController.getAll);
router.post("/create", userController.create);
router.post("/login", userController.login);
router.get("/:id/address", checkToken, userController.getAddresses);
router.post("/:id/addAddress", userController.updateAddress);
router.delete("/:id/deleteAddress/:addressId", userController.deleteAddress);
router.put("/:id/editAddress/:addressId", userController.editAddress);

router.get("/check-token", userController.checkToken);

module.exports = router;
