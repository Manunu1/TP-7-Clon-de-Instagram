import { useState } from "react";
import ProfileHeader from "../../Componentes/ProfileHeader";
import PostGrid from "../../Componentes/PostGrid";
import type { Post } from "../../Types/post";

export default function Profile() {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    // fake posts (para el perfil)
    const posts: Post[] = [
        {
            id: 1,
            image: "https://picsum.photos/300?1",
            likes: 120,
            caption: "Primer post 🚀",
            user: "devmanuel",
        },
        {
            id: 2,
            image: "https://picsum.photos/300?2",
            likes: 95,
            caption: "Segundo post",
            user: "devmanuel",
        },
    ];

    return (
        <div>
            <ProfileHeader />
            <PostGrid posts={posts} setSelectedPost={setSelectedPost} />
        </div>
    );
}