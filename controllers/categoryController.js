const Category = require("../models/Category.js");

const getAll = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createCategory = async (req, res) => {
  const data = req.body;
  try {
    const category = await Category.create(data);
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteCategory = async (req, res) => {
  const data = req.body;
  try {
    const category = await Category.deleteOne(data);
    res
      .status(200)
      .json({ message: "category DELETED successfullt", category });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  createCategory,
  deleteCategory,
};
