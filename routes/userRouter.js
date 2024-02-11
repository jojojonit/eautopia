const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { checkToken } = require("../config/checkToken");

router.get("/", userController.getAll);
router.post("/create", userController.create);
router.post("/login", userController.login);
router.get("/:id/address", checkToken, userController.getAddresses);
router.post("/:id/addAddress", checkToken, userController.updateAddress);
router.delete(
  "/:id/deleteAddress/:addressId",
  checkToken,
  userController.deleteAddress
);
router.put(
  "/:id/editAddress/:addressId",
  checkToken,
  userController.editAddress
);

module.exports = router;
