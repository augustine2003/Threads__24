const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    selectedCollege: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    selectedYear: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    selectedEvents: {
      type: String,
      // required: true,
    },
    selectedWorkshops: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Detail", detailSchema);

// events: {
//   type: String,
//   required: true,
// },
// workshops: {
//   type: String,
//   required: true,
// },

// year: {
//   type: Number,
//   required: true,
// },
// number: {
//   type: Number,
//   required: true,
// },
// email: {
//   type: String,
//   required: true,
// },
