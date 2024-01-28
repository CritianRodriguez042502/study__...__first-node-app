import { Router } from "express";
import users_routes from "./users.routes.js";
import tasks_routes from "./tasks.routes.js";

const routes = Router();

const versioning_of_the_api = "/api/v1";

routes.use(versioning_of_the_api, routes)

routes.use("/users",users_routes);
routes.use("/tasks",tasks_routes);

export default routes;

