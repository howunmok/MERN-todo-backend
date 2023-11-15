import express from "express";

import TasksRoutes from "./task.routes.js";

const router = express.Router();

router.use("/tasks", TasksRoutes);

export default router;
