const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, require: true },
  imageUrl: { type: String, require: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
