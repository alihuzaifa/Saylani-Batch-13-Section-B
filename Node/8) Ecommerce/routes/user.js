import express from "express";
import { createUser, deleteUser, getAllUsers, signinUser } from "../controllers/user.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", signinUser);
router.get("/allUsers", getAllUsers);
router.delete("/delete", deleteUser);

export default router;