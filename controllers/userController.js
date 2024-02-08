const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

const create = async (req, res) => {
  const data = req.body;

  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    if (data.password.trim().length < 3) {
      const error = { msg: "Server password too short" };
      return res.status(400).json(error);
    }

    const user = await User.create(data);
    const token = createJWT(user);

    res.json(token);
  } catch (error) {
    if (error.code === 11000 || error.code === 11001) {
      return res.status(400).json({ error: "Email already in use" });
    }

    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user === null) {
      res.status(401).json({ msg: "user not found" });
      return;
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      res.status(401).json({ msg: "wrong password" });
      return;
    }

    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateAddress = async (req, res) => {
  const { id } = req.params;
  const newAddress = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.address.push(newAddress);
    await user.save();

    res.json({ msg: "Address added successfully", newAddress, user });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAddresses = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const addresses = user.address;

    res.json({ addresses });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAddress = async (req, res) => {
  const { id, addressId } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.address = user.address.filter((address) => address._id != addressId);
    await user.save();

    res.json({ message: "Address deleted successfully", user });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAll,
  create,
  login,
  updateAddress,
  getAddresses,
  deleteAddress,
};
