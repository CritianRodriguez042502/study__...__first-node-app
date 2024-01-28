import { Router } from "express";
import controllers from "../controllers/index.controllers.js";

const router = Router();

router.get("/tasks", controllers.tasks.read_tasks);
router.get("/tasks/:id", controllers.tasks.read_task_detail);
router.post("/tasks", controllers.tasks.create_task);
router.put("/tasks/:id", controllers.tasks.update_task);
router.delete("/tasks/:id", controllers.tasks.delete_task);

export default router;
