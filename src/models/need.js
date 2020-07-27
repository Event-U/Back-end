const mongoose = require("mongoose");

const needSchema = mongoose.Schema({
  description: {
    type: String,
    minlength: 5,
    maxlength: 200,
    required: true,
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
    required: true,
  },

  quotation: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "quotation",
      },
    ],
  },

  isAwared: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Need", needSchema);
