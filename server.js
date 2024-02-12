require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const orderRouter = require("./routes/orderRouter");
// const logger = require("morgan");

const server = express();

//middleware block
server.use(express.json());
server.use(express.static(path.join(__dirname, "dist")));
// server.use(require("./config/checkToken"));

server.get("/test", (req, res) => {
  res.json({ hello: "world" });
});

server.use("/api/user", userRouter);
server.use("/api/product", productRouter);
server.use("/api/category", categoryRouter);
server.use("/api/order", orderRouter);

//listen block
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
