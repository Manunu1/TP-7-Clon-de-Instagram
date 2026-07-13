import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createPost, getPublicaciones } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPublicaciones);
router.post("/", authMiddleware, createPost);

export default router;