import express from "express";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

// Config app 

const app = express();

app.use(routes);
app.use(morgan("dev"));
app.use(express.json());    

export default app