const jwt = require("jsonwebtoken");
// const { v4: uuidv4 } = require("uuid");

// const generateGuestUser = () => {
//   // Set an expiration time for the guest user (e.g., 1 hour)
//   const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour in seconds

//   // Generate a guest user as per your application's requirements
//   const guestUser = {
//     _id: `guest_${uuidv4()}`,
//     role: "guest",
//     expirationTime,
//   };

//   return guestUser;
// };

const checkToken = (req, res, next) => {
  const token = req.get("Authorization").split(" ")[1];
  //? testing out guest user

  //   if (!token) {
  //     // logic to handle guest user
  //     const guestUser = generateGuestUser();
  //     req.user = guestUser;
  //     next();
  //     return;
  //   }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = decodedToken.user;

    // const { _id, role } = decodedToken.user;

    next();
  } catch (error) {
    res.status(403).json({ msg: "wrong token" });
  }
};

module.exports = { checkToken };
