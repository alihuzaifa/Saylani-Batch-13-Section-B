import express from "express";
import { createUser, getAllUsers, signinUser } from "../controllers/user.js";
import authenticate from "../middleware/auth.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", signinUser);
router.get("/allUsers", authenticate, getAllUsers);

export default router;
