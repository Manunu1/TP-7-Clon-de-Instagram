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
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;