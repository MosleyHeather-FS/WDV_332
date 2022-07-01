const express = require("express")
const { findUser } = require("../../db/db")
const router = express.Router()

router.post("/signup", (req,res) =>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    //findUser({email: req.body.email})

    res.status(200).json({
        message: 'Signup - POST',
        metadata: {
            hostname: req.hostname,
            method: req.method,
            firstName: firstName,
            lastName: lastName,
        }
    })
})

router.get("/profile", (req,res) =>{
    res.status(200).json({
        message: "Profile - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            email: email,
            userName: userName,
        }
    })
})

module.exports = router 