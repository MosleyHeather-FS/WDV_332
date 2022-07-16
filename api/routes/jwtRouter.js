const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkAuth = require("../../auth/check.Auth");
require("dotenv").config();

router.use(express.json());

// require ("crypto").randomBytes(30).toString('hex'), can do any number instructor did 64
router.post("/login", (req, res, next) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = req.body.email;
  const password = result.password;

  const token = jwt.sign(
    {
      email: email,
      password: password,
    },
    process.env.JWTKEY,
    { expiresIn: "30m" }
  );

  res.status(200).json({ message: "Secure", token: token });
});

router.get("/profile", checkAuth, (req, res, next) => {
  res.status(200).json({ message: decoded });
});

module.exports = router;
