import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No hay token" });
    }

    // formato: Bearer token
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token inválido" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // guardamos usuario en request

        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};