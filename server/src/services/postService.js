import pool from "../config/db.js";

export const createPostService = async (userId, descripcion, url_imagen) => {
    const result = await pool.query(
        `INSERT INTO publicaciones (usuario_id, descripcion, url_imagen)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [userId, descripcion, url_imagen]
    );

    return result.rows[0];
};

export const getPublicacionesService = async () => {
    const result = await pool.query(`
        SELECT p.*, u.nombre_usuario
        FROM publicaciones p
        JOIN usuarios u ON p.usuario_id = u.id
        ORDER BY p.fecha_creacion DESC
    `);

    return result.rows;
};