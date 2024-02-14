const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);
