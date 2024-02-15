const { Schema, model } = require("mongoose");

const notesSchema = new Schema(
  {
    head: {
      type: String,
    },
    heart: {
      type: String,
    },
    base: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    notes: [notesSchema],
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    stock: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1664198874730-86cd91c757b7?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    review_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
