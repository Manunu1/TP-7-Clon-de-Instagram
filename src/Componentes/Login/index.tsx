import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/api";
import "./Login.css"; 

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await login(email, password);

        if (res.ok) {
            navigate("/home");
        } else {
            setError(res.message || "Error al iniciar sesión");
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2 className="login-logo">Instagram</h2>

                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="login-input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="login-btn-submit" type="submit">Ingresar</button>
                </form>

                {error && <p className="login-error">{error}</p>}
            </div>

            <div className="login-box switch-box">
                <p>
                    ¿No tenés cuenta?{" "}
                    <button className="login-btn-switch" onClick={() => navigate("/register")}>
                        Registrarse
                    </button>
                </p>
            </div>
        </div>
    );
}