require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { findUser, saveUser } = require("../../db/db");
const jwt = require('jsonwebtoken');
const checkAuth = require("../../auth/check.Auth");

/**
 * @swagger
 * tags:
 *  name: User Post
 *  description: This is for the user post
 * /posts/post:
 *  post:
 *      tags: [User Post]
 *      requestBody:
 *          required: true,
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              default: Why me
 *                          post:
 *                              type: string
 *                              default: Because you are you
 *      responses:
 *         default:
 *             description: Success
 */

router.use(express.json());

router.post("/signup", (req, res, next) => {
  findUser(req.body.email)
    .then((result) => {
      if (result) {
        return res.status(409).json({ message: "User Exists" });
      } else {
        const password = req.body.password;

        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({ message: err.message });
          } else {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              address: req.body.address,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
            });
            saveUser(user)
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User Created",
                  method: req.method,
                  user,
                });
              })
              .catch((err) => {
                console.error(err.message);
                res.status(500).json({ error: { message: err.message } });
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: { message: err.message } });
    });
});

router.post("/login", (req, res, next) => {
  findUser(req.body.email)
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "Authentication Failed" });
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) return res.status(501).json({ message: err.message });
          if (result) {
            const email = req.body.email;
            const password = user.password;
            const name = user.firstName;

            // JWT Token
            const token = jwt.sign(
              {
                email: email,
                password: password,
                name: name
              },
              process.env.JWTKEY,
              { expiresIn: "30m" }
            );
            // JWT Response with Welcome Page that says firstName and sends back - (name: user.firstName)
            res.status(200).json({ 
              message: "Secure", 
              token: token, 
              name: name
            });
            
          } else {
            res.status(401).json({
              message: "Authorization Failed",
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: { message: err.message } });
    });
});

router.get("/profile", checkAuth, (req, res, next) => {
  res.status(200).json({ 
    message: `Welcome ${req.userData.name}`,  
    result: req.userData, 
  });
});

module.exports = router;
