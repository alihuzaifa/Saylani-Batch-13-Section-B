import express from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/product.js";
const router = express.Router();

router.post("/create", createProduct);
router.get("/allProducts", getAllProduct);
router.put("/update", updateProduct);
router.delete("/delete", deleteProduct);

export default router;