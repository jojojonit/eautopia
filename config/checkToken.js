const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.get("Authorization").split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = decodedToken.user;

    next();
  } catch (error) {
    res.status(403).json({ msg: "wrong token" });
  }
};

module.exports = { checkToken };
