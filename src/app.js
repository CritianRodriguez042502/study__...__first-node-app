import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.routes.js";
import errorHandler from "./middlewares/index.handler.js";

const app = express();

// Config cors
const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// express middlewares
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

// errors handler
app.use(errorHandler);

export default app;
