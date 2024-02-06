const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OTPSchema = new Schema(
  {
    email : {
        type: String,
    },
    otp : {
        type: Number,
        // required: true,
    }
  }
);

module.exports = mongoose.model('OTP', OTPSchema)