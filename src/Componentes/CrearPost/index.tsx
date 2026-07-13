// Componentes/CreatePost.tsx
import { useState } from "react";
import { createPost } from "../../Services/api";
import "./crearpost.css";

export default function CreatePost({ onPostCreated }: any) {
    const [descripcion, setDescripcion] = useState("");
    const [urlImagen, setUrlImagen] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newPost = await createPost(descripcion, urlImagen);

            onPostCreated(newPost);

            setDescripcion("");
            setUrlImagen("");

        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="create-post-card">
            <h3 className="create-post-title">Crear nueva publicación</h3>

            <form className="create-post-form" onSubmit={handleSubmit}>
                <input
                    className="create-post-input"
                    placeholder="URL de la imagen..."
                    value={urlImagen}
                    onChange={(e) => setUrlImagen(e.target.value)}
                    required
                />

                <input
                    className="create-post-input"
                    placeholder="Escribe un pie de foto (Descripción)..."
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <button className="create-post-btn" type="submit">
                    Publicar
                </button>
            </form>
        </div>
    );
}