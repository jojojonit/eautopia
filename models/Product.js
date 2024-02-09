const { Schema, model } = require("mongoose");

const notesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    notes: {
      type: [notesSchema],
      default: undefined,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    inventory_id: {
      type: Schema.Types.ObjectId,
      ref: "Inventory",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
