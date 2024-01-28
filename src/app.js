import express from "express";
import morgan from "morgan";
import routes from "./routes/project.routes.js";

// Config app 

const app = express();

app.use(routes);
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());    

export default app