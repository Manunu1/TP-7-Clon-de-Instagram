import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Services/api";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await register(
            email,
            password,
            nombreUsuario,
            nombreCompleto
        );

        console.log({
            email,
            password,
            nombreUsuario,
            nombreCompleto
        });

        if (res.ok) {
            navigate("/");
        } else {
            setError(res.message || "Error al registrarse");
        }
    };

    return (
        <div className="register-page-container">
            <div className="register-box">
                <h2 className="register-logo">Registro</h2>

                <form className="register-form" onSubmit={handleRegister}>

                    <input
                        className="register-input"
                        type="text"
                        placeholder="Nombre de usuario"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                        required
                    />

                    <input
                        className="register-input"
                        type="text"
                        placeholder="Nombre completo"
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        required
                    />

                    <input
                        className="register-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="register-input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="register-btn-submit" type="submit">
                        Registrarse
                    </button>
                </form>

                {error && <p className="register-error">{error}</p>}
            </div>

            <div className="register-box switch-box">
                <p>
                    ¿Ya tenés una cuenta?{" "}
                    <button
                        className="register-btn-switch"
                        onClick={() => navigate("/")}
                    >
                        Iniciá sesión
                    </button>
                </p>
            </div>
        </div>
    );
}