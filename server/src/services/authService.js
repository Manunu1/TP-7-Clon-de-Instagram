import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (data) => {
    const { nombre_usuario, nombre_completo, email, password } = data;

    // 1. verificar duplicado
    const userExists = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
    );

    if (userExists.rows.length > 0) {
        throw new Error("El email ya está registrado");
    }

    // 2. hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. insertar usuario
    const result = await pool.query(
        `INSERT INTO usuarios 
     (nombre_usuario, nombre_completo, email, password)
     VALUES ($1, $2, $3, $4)
     RETURNING id, nombre_usuario, email`,
        [nombre_usuario, nombre_completo, email, hashedPassword]
    );

    return result.rows[0];
};

export const loginUser = async (data) => {
    const { email, password } = data;

    const result = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
    );

    if (result.rows.length === 0) {
        throw new Error("Usuario no encontrado");
    }

    const user = result.rows[0];

    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );

    return {
        token,
        user: {
            id: user.id,
            nombre_usuario: user.nombre_usuario,
            email: user.email
        }
    };
};