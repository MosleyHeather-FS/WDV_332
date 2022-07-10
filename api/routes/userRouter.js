const express = require("express");
const { findUser } = require("../../db/db");
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require("bcrypt");

router.get("/profile", (req, res) => {
  res.status(200).json({
    message: "Profile - GET",
  });
});

router.post("/signup", (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      user.password = hash;
      res.status(200).json({ password: hash });
    }
  });

  //findUser({email: req.body.email})

  res.status(200).json({
    message: "Signup - POST",
    metadata: {
      hostname: req.hostname,
      method: req.method,
      email: email,
      password: password,
    },
  });
});

router.post("/login", (req, res) => {
  bcrypt.compare(req.body.password, req.body.hash, (err, result) => {
    if (err) return res.status(501).json({ message: err.message });
    if (result) {
      res.status(200).json({
        message: "Authorization Successful",
        result: result,
      });
    } else {
      res.status(401).json({
        message: "Authorization Failed",
        result: result,
      });
    }
  });
  const email = req.body.email;
  const password = req.body.password;

  //findUser({email: req.body.email})

  res.status(200).json({
    message: "Login - POST",
    metadata: {
      hostname: req.hostname,
      method: req.method,
      email: email,
      password: password,
    },
  });
});

module.exports = router;
