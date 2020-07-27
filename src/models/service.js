const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 200,
    required: true,
  },

  description: {
    type: String,
    maxlength: 200,
  },

  measurementUnit: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true,
  },

  unitPrice: {
    type: Number,
    minlength: 1,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

module.exports = mongoose.model("service", serviceSchema);
