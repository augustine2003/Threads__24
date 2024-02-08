const express = require("express");
const Detail = require("../models/detailModel");

const OTP = require("../models/OTPModel");

const nodemailer = require("nodemailer");
const router = express.Router();


router.post("/sendotp", async (req, res) => {
  const otp = Number(Math.floor(Math.random() * 10000));
  console.log(otp);
  // const otp = 1234;
  const { email } = req.body;
  const user = await OTP.findOne({ email });
  if (user) {
    console.log("updating OTP");
    await OTP.updateOne({ email: email }, { $set: { otp: otp } });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal email
        pass: process.env.PASS, // generated ethereal password
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "OTP verification",
      html: `<p>your otp is ${otp}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).json(error);
        console.log(error);
      } else {
        console.log("Email sent: ");
        res.json(otp);
      }
    });

    res.status(200);
  } else {
    const detail = await OTP.create({ email, otp });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal email
        pass: process.env.PASS, // generated ethereal password
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "OTP verification",
      html: `<p>your otp is ${otp}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).json(error);
        console.log(error);
      } else {
        console.log("Email sent: ");
        res.json(otp);
      }
    });
  }
});

router.post("/verifyotp", async (req, res) => {
  const { email, otp } = req.body;

  const user = await OTP.findOne({ email });
  console.log("user email: ", user.email);
  console.log("User otp: ", user.otp);
  console.log("VerifyOtp");
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.otp == otp) {
    user.otp = null;
    await user.save();
    res.json({ success: true });
  } else {
    console.log("Wrong otp entered");
    res.status(400).json({ success: false });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  console.log("register route");
  // const { name, college, events, workshops, department, year, number, email } = req.body;

  const {
    name,
    department,
    selectedCollege,
    email,
    number,
    selectedEvents,
    selectedWorkshops,
    selectedYear,
  } = req.body;
  console.log();

  try {
    const detail = await Detail.create({
      name,
      department,
      selectedCollege,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
    });

    res.status(200).json(detail);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/download", async (req, res) => {
  console.log(req.body);
  
    const {email } = req.body;
    Detail.find( { "email": email } )
    .then(user=>(res.json(user)))
    .catch(err=>(res.status(400).json(err)));

});
module.exports = router;