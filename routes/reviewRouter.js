const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

const { checkToken } = require("../config/checkToken");

router.get("/", reviewController.getAll);
router.get("/:product_id", reviewController.getByProduct);

router.post("/create", reviewController.createReview);
router.post("/usercreate", checkToken, reviewController.createReviewByUser);

module.exports = router;
