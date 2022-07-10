const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require('../api/routes/userRouter');
const mongoose = require('mongoose');
require('dotenv').config();

//middleware
app.use(cors());

//middleware for JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up!",
    metadata: {
      method: req.method,
      hostname: req.hostname,
    },
  });
});

app.use("/users", userRouter);

//middleware for bad url and errors
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

//Mongoose connection to mongodb
module.exports = app;