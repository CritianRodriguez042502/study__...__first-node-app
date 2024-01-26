import app from "./app.js";
import env from "../src/config/env.config.js";

app.listen(env.port);
console.log(`Server running on http://localhost:${env.port}`);