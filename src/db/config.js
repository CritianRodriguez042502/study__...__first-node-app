import Sequelize from "sequelize";
import config_env from "../config/config.js";

// Connect to database - postgres
const sequelize = new Sequelize(
    config_env.db_name,
    config_env.db_user,
    config_env.db_password,
    {
        host: config_env.db_host,
        dialect: "postgres",
    }
)

export default sequelize