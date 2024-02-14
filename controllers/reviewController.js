const Review = require("../models/Review.js");

const getAll = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user_id");
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
};
