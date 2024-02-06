const express = require("express");
const router = express.Router();


router.post('/registration/verify', async(req,res)=> {
    try {
        const {email, subject, message, duration} = req.body;
    } catch {
        
    }
})