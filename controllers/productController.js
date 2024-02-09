const Product = require("../models/Product.js");

const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProduct = async (req, res) => {
  const data = req.body;
  try {
    const product = await Product.create(data);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "PRODUCT not found" });
    }
    // product.name = newData.name;

    Object.keys(newData).forEach((key) => {
      if (product[key] !== undefined) {
        product[key] = newData[key];
      }
    });

    await product.save();
    res
      .status(200)
      .json({ message: "Product UPDATED successfully", product, id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const data = req.body;
  try {
    const product = await Product.deleteOne(data);
    res.status(200).json({ message: "Product DELETED successfullt", product });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
};
