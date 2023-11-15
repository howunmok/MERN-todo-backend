import express from "express";
import {
  addTask,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = express.Router();

router.get("/", getTask);
router.post("/add", addTask);
router.delete("/delete/:_id", deleteTask);
router.put("/update/:_id", updateTask);

export default router;
