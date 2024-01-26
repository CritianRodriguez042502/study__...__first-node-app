import { config } from "dotenv";

config();

const env = {
    port : process.env.PORT || 3000,
    api_key : process.env.API_KEY,
}

export default env