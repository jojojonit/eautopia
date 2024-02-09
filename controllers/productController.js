const Product = require("../models/Product.js");

const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const product = await Product.create(data);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  create,
};
