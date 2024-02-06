require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
// const logger = require("morgan");

const server = express();

//middleware block
server.use(express.json());
server.use(express.static(path.join(__dirname, "dist")));

server.get("/test", (req, res) => {
  res.json({ hello: "world" });
});

server.use("/api/user", userRouter);

//listen block
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
