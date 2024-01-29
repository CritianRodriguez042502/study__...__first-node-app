import { Router } from "express";
import controllers from "../controllers/index.controllers.js";

const router = Router();

router.get("/", controllers.users.home);


export default router;
