const express = require("express")
const { findUser } = require("../../db/db")
const router = express.Router()

router.get("/profile", (req,res) =>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const address = req.body.address
    const city = req.body.city
    const state = req.body.state
    const zip = req.body.zip

    res.status(200).json({
        message: "Profile - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            
        }
    })
})

router.post("/signup", (req,res) =>{
    const email = req.body.email
    const password = req.body.password

    //findUser({email: req.body.email})

    res.status(200).json({
        message: 'Signup - POST',
        metadata: {
            hostname: req.hostname,
            method: req.method,
            email: email,
            password: password,
        }
    })
})

router.post("/login", (req,res) =>{
    const email = req.body.email
    const password = req.body.password

    //findUser({email: req.body.email})

    res.status(200).json({
        message: 'Login - POST',
        metadata: {
            hostname: req.hostname,
            method: req.method,
            email: email,
            password: password,
        }
    })
})

module.exports = router 