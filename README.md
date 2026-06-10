# 📸 Clon de Instagram - Trabajo Práctico

## 🧠 Descripción

Este proyecto consiste en el desarrollo de un **clon simplificado de Instagram**, realizado con **React y TypeScript**, con el objetivo de aplicar conceptos de frontend moderno como:

* Componentización
* Manejo de estado
* Tipado con TypeScript
* Diseño UI similar a una aplicación real

---

## 🚀 Funcionalidades

### 🏠 Feed (Home)

* Visualización de publicaciones
* Historias (Stories) en formato horizontal
* Apertura de publicaciones en modal
* Visualización de:

  * Imagen
  * Usuario
  * Descripción
  * Fecha
  * Comentarios simulados
* Sistema de **likes interactivo**

---

### 👤 Perfil

* Información del usuario
* Grilla de publicaciones
* Reutilización de componentes del feed

---

### 💬 Publicaciones

Cada post incluye:

* Imagen
* Usuario
* Cantidad de likes
* Descripción
* Fecha
* Comentarios simulados

---

### 📱 Historias (Stories)

* Barra horizontal scrolleable
* Imágenes circulares
* Estilo visual similar a Instagram (aro de colores)

---

## 🧱 Tecnologías utilizadas

* ⚛️ React
* 🟦 TypeScript
* 🎨 CSS
* ⚡ Vite

---

## 📂 Estructura del proyecto

```
src/
│
├── Componentes/
│   ├── Post
│   ├── PostGrid
│   ├── StoriesBar
│   ├── ProfileHeader
│
├── Pages/
│   ├── Home
│   ├── Profile
│
├── Types/
│   ├── post.ts
│   ├── comment.ts
│   ├── story.ts
│
└── styles/
```

---

## 🧩 Conceptos aplicados

* Separación de componentes reutilizables
* Uso de `useState` para manejar estado
* Tipado fuerte con interfaces/types
* Props entre componentes
* Renderizado dinámico con `.map()`

---

## 🎯 Objetivo del trabajo

Simular una red social moderna enfocándose en:

* Diseño visual
* Experiencia de usuario
* Buenas prácticas en React

---

## 📌 Notas

* Las historias y comentarios son **simulados (mock data)**
* No hay conexión con backend
* El proyecto está enfocado únicamente en frontend

---

## 👨‍💻 Autor

Desarrollado por **Manuel Mandel**

---

## 🏁 Estado del proyecto

✅ Funcional
✅ Interfaz completa
✅ Listo para entrega

---

## 💡 Posibles mejoras futuras

* Conexión a API real
* Sistema de autenticación
* Likes persistentes
* Historias interactivas
* Subida de publicaciones

---

✨ *Proyecto realizado con fines educativos*
