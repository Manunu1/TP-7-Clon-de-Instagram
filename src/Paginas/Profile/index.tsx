import { useState } from "react";
import ProfileHeader from "../../Componentes/ProfileHeader";
import PostGrid from "../../Componentes/PostGrid";
import type { Post } from "../../Types/post";
import "./profile.css";
import PostModal from "../../Componentes/PostModal";

export default function Profile() {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null); //puede ser post, o null

    const posts: Post[] = [ //posteos hardcodeados para mostrar en el perfil
        {
            id: 1,
            image: "https://picsum.photos/300?1",
            likes: 120,
            caption: "Primer post 🚀",
            user: "devmanuel",
            date: "Hace 2 días",
            comments: [
                { id: 1, user: "juan", text: "🔥🔥🔥" },
                { id: 2, user: "ana", text: "muy bueno!" },
            ],
        },
        {
            id: 2,
            image: "https://picsum.photos/300?2",
            likes: 95,
            caption: "Segundo post",
            user: "devmanuel",
            date: "Hace 5 días",
            comments: [
                { id: 1, user: "pedro", text: "tremendo" },
                { id: 2, user: "lucas", text: "me gusta mucho" },
            ],
        },
    ];

    return (
        <div className="profile-container">
            <ProfileHeader />
            <PostGrid posts={posts} setSelectedPost={setSelectedPost} /> {/* el postgrid es el que contiene los posteos (es como el feed) */}

            {selectedPost && ( /* si hay un post seleccionado, muestra el modal con la info del post, sino no muestra nada */
                <PostModal
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
}