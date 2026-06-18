import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

import {
    Home,
    Search,
    Compass,
    Clapperboard,
    MessageCircle,
    Heart,
    PlusSquare,
    User,
    Menu
} from "lucide-react"; //me importo los iconos de lucide-react

export default function Sidebar() {
    const navigate = useNavigate(); //esto me deja cambiar la pagina sin recargar, es parte de react-router-dom

    return (
        <aside className="sidebar">

            <h2 className="logo">Instagram</h2>

            <nav className="menu">

                <div className="menu-item active" onClick={() => navigate("/")} style={{ cursor: "pointer" }}> {/* cuando hago click, me manda a la home */}
                    <Home size={24} />
                    <span>
                        Home
                    </span>
                </div>

                <div className="menu-item">
                    <Search size={24} />
                    <span>Search</span>
                </div>

                <div className="menu-item">
                    <Compass size={24} />
                    <span>Explore</span>
                </div>

                <div className="menu-item">
                    <Clapperboard size={24} />
                    <span>Reels</span>
                </div>

                <div className="menu-item">
                    <MessageCircle size={24} />
                    <span>Messages</span>
                </div>

                <div className="menu-item">
                    <Heart size={24} />
                    <span>Notifications</span>
                </div>

                <div className="menu-item">
                    <PlusSquare size={24} />
                    <span>Create</span>
                </div>

                <div className="menu-item" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}> {/* cuando hago click, me manda a la pagina del perfil */}
                    <User size={24} />
                    <span>
                        Profile
                    </span>
                </div>

            </nav>

            <div className="menu bottom">
                <div className="menu-item">
                    <Menu size={24} />
                    <span>More</span>
                </div>
            </div>

        </aside>
    );
}