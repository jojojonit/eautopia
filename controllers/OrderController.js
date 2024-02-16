const Order = require("../models/Order.js");
const OrderItem = require("../models/OrderItem.js");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getAll = async (req, res) => {
  try {
    const orders = await Order.find().populate({
      path: "items",
      populate: [
        { path: "product_id", model: "Product" },
        { path: "order_id", model: "Order" },
      ],
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const find = async (req, res) => {
  const { id } = req.body;
  try {
    const orders = await Order.find({ id });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOrderByUser = async (req, res) => {
  const user_id = req.user._id;
  try {
    const order = await Order.findOne({ user_id, completed: false }).populate({
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

const getCompletedOrderByUser = async (req, res) => {
  const user_id = req.user._id;
  try {
    const order = await Order.find({ user_id, completed: true }).populate({
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

const createOrderItemByUser = async (req, res) => {
  try {
    const { product_id, quantity, price } = req.body;

    let order = await Order.findOne({
      user_id: req.user._id,
      completed: false,
    });

    if (!order) {
      order = new Order({
        user_id: req.user._id,
        completed: false,
        date: new Date(),
      });

      await order.save();
    }
    let orderItem = await OrderItem.findOne({
      order_id: order._id,
      product_id: product_id,
    });

    if (orderItem) {
      orderItem.quantity += quantity;
      orderItem.price += price;
      await orderItem.save();
    } else {
      const orderItem = new OrderItem({
        order_id: order._id,
        product_id: product_id,
        quantity: quantity,
        price: price,
      });
      await orderItem.save();

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

//? something is wrong here

const createOrderItem = async (req, res) => {
  try {
    const { _id } = req.body;
    const { product_id, quantity, price } = req.body;

    let order = await Order.findOne({ _id });

    if (!order) {
      order = new Order({
        // user_id: req.user._id,
        completed: false,
        date: new Date(),
      });

      await order.save();
    }
    let orderItem = await OrderItem.findOne({
      order_id: order._id,
      product_id: product_id,
    });

    if (orderItem) {
      orderItem.quantity += quantity;
      orderItem.price += price;
      await orderItem.save();
    } else {
      const orderItem = new OrderItem({
        order_id: order._id,
        product_id: product_id,
        quantity: quantity,
        price: price,
      });
      await orderItem.save();

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

const updateOrderItemByUser = async (req, res) => {
  const { id, newQuantity } = req.body;
  try {
    const orderItem = await OrderItem.findById(id);
    if (!orderItem) {
      return res.status(404).json({ error: "ORDER ITEM not found" });
    }
    orderItem.quantity = newQuantity;
    res.status(200).json({
      message: "ORDER ITEM updated successfully",
      orderItem,
      newQuantity,
    });
    await orderItem.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update order item quantity" });
  }
};

const deleteOrderItemByUser = async (req, res) => {
  const { id } = req.body;

  try {
    const orderItem = await OrderItem.findByIdAndDelete(id);

    if (!orderItem) {
      return res.status(404).json({ error: "ORDER ITEM not found" });
    }

    const order = await Order.findOneAndUpdate(
      { _id: orderItem.order_id },
      { $pull: { items: id } },
      { new: true }
    );

    res.json({
      message: "ORDER ITEM deleted successfully",
      deletedOrderItem: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const checkout = async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "sgd",
      product_data: {
        name: product.product_id.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  const orderIds = products.map((product) => product.order_id);

  await Order.updateMany(
    { _id: { $in: orderIds } },
    { $set: { completed: true } }
  );
  res.json({ id: session.id });
};

module.exports = {
  getAll,
  find,
  getOrderByUser,
  getCompletedOrderByUser,
  createOrderItem,
  createOrderItemByUser,
  updateOrderItemByUser,
  deleteOrderItemByUser,
  checkout,
};
