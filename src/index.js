import app from "./app.js";
import config_env from "./config/config.js";
import sequelize from "./db/config.js";


// Import models
import "./db/models/index.js";


// run server with port defined in .env
// using app.js with express

const run_server = async () => {
  try {
    await sequelize.sync({force : false});

    app.listen(config_env.port);
    console.log(`Server running on port: ${config_env.port}`);
  } catch (err) {
    console.log("server error: ", err);
  }
};

run_server();
