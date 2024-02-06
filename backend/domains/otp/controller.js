const OTP =  require('./model')
const generateOTP = require('./../../util/generateOTP')
const sendEmail = require('./../../util/sendEmail')
const {hashData} = require('./../../util/hashData')

const sentOTP = async({email,subject, message, duration=1}) =>{
    try {
        if (!(email && subject && message)) {
            throw Error("Provide values for email, subject, message");
        }

        await OTP.deleteOne({email});

        const generatedOTP=await generateOTP();

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject,
            html: `<p>${message}</p> <b> {generatedOTP} </b>`
        }

    } catch(error) {
        
    }
}