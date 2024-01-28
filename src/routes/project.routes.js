import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", controllers.Home);

router.get("/about/:id", controllers.About);

export default router;
