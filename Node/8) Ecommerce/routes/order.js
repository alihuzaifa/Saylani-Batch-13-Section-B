import express from "express";
import { createOrder, deleteOrder, getAllOrder } from "../controllers/order.js";
const router = express.Router();

router.post("/create", createOrder);
router.delete("/delete", deleteOrder);
router.get("/getAllOrder", getAllOrder);

export default router;