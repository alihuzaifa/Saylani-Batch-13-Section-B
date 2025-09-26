import express from "express";
import { createStudent, getAllStudents } from "../controllers/student.js";
const router = express.Router();

router.post("/create", createStudent);
router.get("/students", getAllStudents);

export default router;