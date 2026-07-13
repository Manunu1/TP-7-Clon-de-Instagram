import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Paginas/Home";
import Profile from "./Paginas/Profile";
import LoginPage from "./Paginas/Login";
import RegisterPage from "./Paginas/Register";

function App() {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div style={{ display: "flex" }}>
      {/* Mostrar solo si no estamos en login/register */}
      {!hideSidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;