import express from "express";
import { addTodo, deleteTodo, getAllTodo } from "../controllers/todo.js";
const router = express.Router();

router.post("/create", addTodo);
router.get("/todo", getAllTodo);
router.delete("/todo", deleteTodo);

export default router;
