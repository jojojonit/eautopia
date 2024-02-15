const Product = require("../models/Product.js");

const getAll = async (req, res) => {
  try {
    const products = await Product.find().populate("category_id");
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPerfumes = async (req, res) => {
  try {
    const products = await Product.find({
      category_id: "65c7a08bfc736911bf949631",
    }).populate("category_id");
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
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
      deletedProduct: product,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addNotes = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    product.notes.push(data);
    await product.save();

    res.json({ msg: "Notes added successfully", data, product });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAll,
  getPerfumes,
  createProduct,
  updateProduct,
  deleteProduct,
  addNotes,
};
