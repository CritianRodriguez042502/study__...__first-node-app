import { config } from "dotenv";

config();

// Config environment variables
export default {
  port: process.env.PORT || 3000,

  // Postgres
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME,
};
