import pool from "../config/db.js";

export const createPost = async (req, res) => {
    try {
        const userId = req.user.id;
        const { descripcion, url_imagen } = req.body;

        const result = await pool.query(
            `INSERT INTO publicaciones (usuario_id, descripcion, url_imagen)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [userId, descripcion, url_imagen]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear publicación" });
    }
};

export const getPublicaciones = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT p.*, u.nombre_usuario
            FROM publicaciones p
            JOIN usuarios u ON p.usuario_id = u.id
            ORDER BY p.fecha_creacion DESC
        `);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener publicaciones" });
    }
};