import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getPerfil, updatePerfil } from "../controllers/userController.js";

const router = express.Router();

router.get("/perfil", authMiddleware, getPerfil);
router.put("/perfil", authMiddleware, updatePerfil);

export default router;