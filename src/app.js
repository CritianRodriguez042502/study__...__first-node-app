import express from "express";
import morgan from "morgan";
import routes from "./routes/index.routes.js";
import errorHandler from "./middlewares/index.handler.js";

// Config app with express
const app = express();

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.json()); 
app.use(routes);
app.use(errorHandler);

export default app;
