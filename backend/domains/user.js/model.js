const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    events: {
      type: String,
      required: true,
    },
    workshops: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Detail', detailSchema)