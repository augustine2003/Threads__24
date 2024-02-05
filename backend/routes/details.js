const express = require("express");
const Detail = require('../models/detailModel')

const router = express.Router();

router.post('/registration',async (req, res)=> {
    const {name, college, events, workshops, department, year, number, email} = req.body

    try {
        const detail = await Detail.create({name, college, events, workshops, department, year, number, email})
        res.status(200).json(detail)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})
module.exports = router;
