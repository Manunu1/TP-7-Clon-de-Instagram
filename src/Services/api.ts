import type { Post } from "../Types/post";

export const getPosts = async (): Promise<Post[]> => {

  const res = await fetch(`${API_URL}/publicaciones`);
  
  const data = await res.json();

  // adaptamos la data de backend a tu tipo Post
  const formattedPosts: Post[] = data.map((post: any) => ({
    id: post.id,
    image: post.url_imagen,
    likes: post.likes || 0,
    caption: post.descripcion || "",
    user: post.nombre_usuario,
    date: new Date(post.fecha_creacion).toLocaleDateString(),
    comments: [] // por ahora vacío
  }));

  return formattedPosts;
};

const API_URL = "http://localhost:3000/api";

type LoginResponse = {
  ok: boolean;
  token?: string;
  message?: string;
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        ok: false,
        message: data.message || "Error en login"
      };
    }

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return {
      ok: true,
      ...data
    };

  } catch (error: any) {
    return {
      ok: false,
      message: error.message
    };
  }
};

type RegisterResponse = {
  ok: boolean;
  message?: string;
  token?: string;
};

export const register = async (
  email: string,
  password: string,
  nombreUsuario: string,
  nombreCompleto: string
): Promise<RegisterResponse> => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        nombre_usuario: nombreUsuario,
        nombre_completo: nombreCompleto
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        ok: false,
        message: data.message || "Error en registro"
      };
    }

    return {
      ok: true,
      ...data
    };

  } catch (error: any) {
    return {
      ok: false,
      message: error.message
    };
  }
};

export const createPost = async (
  descripcion: string,
  url_imagen: string
) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/publicaciones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      descripcion,
      url_imagen
    })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Error al crear post");
  }

  return data;
};