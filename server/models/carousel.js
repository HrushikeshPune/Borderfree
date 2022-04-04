const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carousels = new Schema({
  image: {
    type: String,
    required: true,
  },
  clicked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Carousels", carousels);
