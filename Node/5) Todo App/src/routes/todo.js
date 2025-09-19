import express from "express";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todo.js";
const router = express.Router();

router.post("/create", addTodo);
router.get("/todo", getAllTodo);
router.delete("/todo", deleteTodo);
router.put("/todo", updateTodo);

export default router;
