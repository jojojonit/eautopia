const Review = require("../models/Review.js");

const getAll = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user_id");
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getByProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    const reviews = await Review.find({ product_id }).populate("user_id");
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createReview = async (req, res) => {
  const data = req.body;
  try {
    const review = await Review.create(data);
    res.status(200).json({ review });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createReviewByUser = async (req, res) => {
  const { _id } = req.user;
  const data = req.body;
  try {
    const review = await Review.create({ user_id: _id, ...data });
    res.status(200).json({ review });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  getByProduct,
  createReview,
  createReviewByUser,
};
