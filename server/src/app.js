import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// PUBLICAS
app.use("/api/auth", authRoutes);

// PROTEGIDAS (pero middleware dentro de routes)
app.use("/api/publicaciones", postRoutes);

app.get("/", (req, res) => {
    res.send("API Instagram funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});