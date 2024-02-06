const express = require("express");
const Detail = require("../models/detailModel");

const OTP = require("../models/OTPModel");

let nodemailer = require("nodemailer");
const router = express.Router();

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL, // generated ethereal email
//     pass: process.env.PASS, // generated ethereal password
//   },
// });

router.post("/register", async (req, res) => {
  console.log(req.body);
  //   const OTPvalue = Number(Math.floor(Math.random() * 10000));
  const otp = 1234;
  console.log(otp);
//   const { name, college, events, workshops, department, year, number, email } =
    // req.body;

    const {name, department, college } =
    req.body;
    
  try {
    const detail = await Detail.create({ name, department, college });

    // var mailOptions = {
    //   from: process.env.EMAIL,
    //   to: req.body.email,
    //   subject: "OTP verification",
    //   html: `Your OTP is ${otp}`,
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: ");
    //   }
    // });

    res.status(200).json(detail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
