import express from "express";
import { createCourse } from "../controllers/course.js";
const router = express.Router();

router.post("/create", createCourse);

export default router;