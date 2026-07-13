import type { Post } from "../Types/post";

export const getPosts = async (): Promise<Post[]> => { //la promise significa que no va a tener la respuesta inmediatame, le dice al programa que puede seguir ejecutando hasta que tenga la respuesta, y cuando la tenga, va a volver a esa linea
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10"); //hace el fetch a la api, y espera la respuesta
  const data = await res.json(); //convierte la res a json y espera

  const formattedPosts: Post[] = data.message.map((img: string, i: number) => ({ //mapea cada item del array que viene en data.message y lo formatea en items del tipo post
    id: i,
    image: img,
    likes: Math.floor(Math.random() * 500),
    caption: "Un perrito 🐶",
    user: "manuel_dev",
    date: "Hace 2 días",
    comments: [
      { id: 1, user: "juan", text: "🔥🔥🔥" },
      { id: 2, user: "ana", text: "muy bueno" }
    ]
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