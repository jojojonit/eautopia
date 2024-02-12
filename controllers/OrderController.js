const Order = require("../models/Order.js");
constOrderItem - require("../models/OrderItem.js");

const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOrderByUser = async (req, res) => {
  try {
    const { userid } = req.params;
    const orders = await Order.find({ userid });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAll,
  getOrderByUser,
};
