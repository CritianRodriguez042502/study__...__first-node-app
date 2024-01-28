// Errors common to all routes
import express from "express";
const err = express();

err.use((req, res, next) => {
  res.status(200).send("404 Not Found");
});

export default err;
