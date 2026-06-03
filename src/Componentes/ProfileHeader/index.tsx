import "./profileHeader.css";

export default function ProfileHeader() {
    return (
        <div className="profile-header">

            {/* Foto */}
            <div className="profile-header__left">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="avatar"
                    className="profile-header__avatar"
                />
            </div>

            {/* Info */}
            <div className="profile-header__right">

                {/* Username + botones */}
                <div className="profile-header__top">
                    <h2 className="username">devmanuel</h2>
                    <button className="btn primary">Seguir</button>
                    <button className="btn">Mensaje</button>
                </div>

                {/* Stats */}
                <div className="profile-header__stats">
                    <span><strong>42</strong> publicaciones</span>
                    <span><strong>1.2k</strong> seguidores</span>
                    <span><strong>180</strong> seguidos</span>
                </div>

                {/* Bio */}
                <div className="profile-header__bio">
                    <p className="name">Manuel Dev</p>
                    <p>Construyendo cosas en React 🚀</p>
                </div>

            </div>
        </div>
    );
}