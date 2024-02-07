const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    streetAddress: {
      type: String,
      // required: true,
    },
    apartment: {
      type: String,
    },
    country: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
    },
    postal: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    address: [addressSchema],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

const SALT_ROUNDS = 10;

userSchema.pre("save", async function (next) {
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = model("User", userSchema);
