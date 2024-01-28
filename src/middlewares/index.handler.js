import express from "express";
import error_handler from "./error.handler.js";

const err = express();

err.use(error_handler);

export default err;
