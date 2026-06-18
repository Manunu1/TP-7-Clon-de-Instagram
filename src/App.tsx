import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Profile from "./Paginas/Profile";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* establezco que "/" es la ruta del home, donde inicia el usuario */}
        <Route path="/profile" element={<Profile />} /> {/* establezco que "/profile" es la ruta del profile, donde se muestra el perfil del usuario */}
      </Routes>
    </div>
  );
}

export default App;