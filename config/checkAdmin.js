const checkAdmin = (req, res, next) => {
  try {
    // Check if the user is an admin
    if (req.user && req.user.role === "admin") {
      return next(); // User is an admin, proceed to the next middleware or route handler
    } else {
      throw new Error("Unauthorized"); // Throw an error for unauthorized access
    }
  } catch (error) {
    return res.status(403).json({ error: error.message || "Unauthorized" });
  }
};

module.exports = { checkAdmin };
