import { Router } from "express";
import controllers from "../controllers/index.controllers.js";

const router = Router();

router.get("/", controllers.tasks.get_tasks);
router.get("/:id", controllers.tasks.get_detailed_task);
router.post("/", controllers.tasks.create_task);
router.put("/:id", controllers.tasks.update_task);
router.delete("/:id", controllers.tasks.delete_task);

export default router;
