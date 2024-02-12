const Order = require("../models/Order.js");
const OrderItem = require("../models/OrderItem.js");
const Product = require("../models/Product.js");

const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOrderByUser = async (req, res) => {
  const user_id = req.user._id;
  try {
    const order = await Order.findOne({ user_id }).populate({
      path: "items",
      populate: [
        { path: "product_id", model: "Product" },
        { path: "order_id", model: "Order" },
      ],
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//? testing out async creating order item them add to order, if no order, create new order
// const createOrderByUser = async (req, res) => {
//   const user_id = req.user._id;
//   const { product_id, quantity } = req.body;
//   try {
//     const order = await Order.findOne({user_id})
//     const product = await Product.findOne({_id: product_id})
//     if (!product) {
//         res.status(404).json({msg: "product not found"})
//         return
//     }
//   }
// };

const createOrderItemByUser = async (req, res) => {
  try {
    const { product_id, quantity, price } = req.body;

    // Check if there's an existing order for the user
    let order = await Order.findOne({ user_id: req.user._id });

    // If there's no existing order, create a new one
    if (!order) {
      order = new Order({
        user_id: req.user._id,
        completed: false,
        date: new Date(),
      });

      await order.save();
    }
    // Check if there's an existing OrderItem for the product in the current order
    let orderItem = await OrderItem.findOne({
      order_id: order._id,
      product_id: product_id,
    });

    if (orderItem) {
      // If OrderItem already exists, increase the quantity and price
      orderItem.quantity += quantity;
      orderItem.price += price;
      await orderItem.save();
    } else {
      // If OrderItem doesn't exist, create a new one
      const orderItem = new OrderItem({
        order_id: order._id,
        product_id: product_id,
        quantity: quantity,
        price: price,
      });
      await orderItem.save();

      // Push the OrderItem _id into the items array of the corresponding Order
      order.items.push(orderItem._id);
      await order.save();
    }
    res
      .status(201)
      .json({ message: "OrderItem created successfully", orderItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OrderItem failed to create" });
  }
};
module.exports = {
  getAll,
  getOrderByUser,
  createOrderItemByUser,
};
