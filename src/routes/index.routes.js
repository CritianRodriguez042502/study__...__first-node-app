import { Router } from "express";
import users_routes from "./users.routes.js";
import tasks_routes from "./tasks.routes.js";

const routes = Router();

routes.use(users_routes);
routes.use(tasks_routes);

export default routes;

