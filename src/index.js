import app from "./app.js";
import config_env from "./config/config.js";

app.listen(config_env.port, function () {
  console.log("Run server in port:", config_env.port);
});
