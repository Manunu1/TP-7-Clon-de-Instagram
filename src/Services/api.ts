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