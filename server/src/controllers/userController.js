import pool from "../config/db.js";

// 🔹 Obtener perfil
export const getPerfil = async (req, res) => {
    try {
        const userId = req.user.id;

        const result = await pool.query(
            `SELECT 
                id,
                nombre_usuario,
                nombre_completo,
                email,
                foto_perfil,
                biografia
             FROM usuarios
             WHERE id = $1`,
            [userId]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener perfil" });
    }
};

// 🔹 Actualizar perfil
export const updatePerfil = async (req, res) => {
    try {
        const userId = req.user.id;

        const { nombre_completo, biografia, foto_perfil } = req.body;

        const result = await pool.query(
            `UPDATE usuarios
             SET nombre_completo = $1,
                 biografia = $2,
                 foto_perfil = $3
             WHERE id = $4
             RETURNING 
                id,
                nombre_usuario,
                nombre_completo,
                email,
                foto_perfil,
                biografia`,
            [nombre_completo, biografia, foto_perfil, userId]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar perfil" });
    }
};