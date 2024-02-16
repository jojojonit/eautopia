const checkAdmin = (req, res, next) => {
  try {
    console.log("User:", req.user);
    if (req.user && req.user.role === "admin") {
      console.log("User is an admin:", req.user);
      return next();
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    return res.status(403).json({ error: error.message || "Unauthorized" });
  }
};

module.exports = { checkAdmin };
