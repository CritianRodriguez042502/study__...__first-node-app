import { config } from "dotenv";

config();

const environment = true;

let config_env;

if (environment) {
  config_env = {
    port: process.env.PORT || 3000,

    // Postgres
    db_port: process.env.PROD_DB_PORT,
    db_user: process.env.PROD_USER,
    db_password: process.env.PROD_DB_PASSWORD,
    db_host: process.env.PROD_HOST,
    db_name: process.env.PROD_DATABASE,
  };
} else {
  config_env = {
    port: process.env.PORT || 3000,

    // Postgres
    db_port: process.env.DEV_PORT_DB,
    db_user: process.env.DEV_USER,
    db_password: process.env.DEV_DB_PASSWORD,
    db_host: process.env.DEV_HOST,
    db_name: process.env.DEV_DATABASE,
  };
}

export default config_env;
