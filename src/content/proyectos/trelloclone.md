---
title: "Trello Clone"
tech:
  ["ReactJS", "NodeJS", "@dnd-kit", "TailwindCSS", "Zustand", "JWT", "MongoDB"]
imgPath: "/projects/taskflow.webp"
description: "Un clon de trello hecho con React, Tailwind y Express"
demoLink: "https://clone-trello-ten.vercel.app/"

nota:
  "La API de este proyecto tiene cold start de entre 15 y 40 segundos, así que
  puede tardar un poco en cargarse"
---

# 🧩 Clon de Trello

Este es el proyecto más completo que he desarrollado hasta ahora: un **clon
funcional de Trello**, que incluye **registro de usuarios**, **inicio de
sesión** y **autenticación mediante JWT**.

La aplicación permite:

- **Crear y eliminar** listas y tarjetas
- **Reordenar listas** dentro del tablero
- **Mover tarjetas** dentro de una misma lista o entre listas diferentes Todo
  esto con una experiencia fluida gracias a la implementación de drag and drop
  con `@dnd-kit`.

En el lado del backend, desarrollé una **API REST** utilizando **Node.js** y
**Express**, con rutas bien organizadas, modelos para la base de datos y
configuración de **CORS**. La base de datos está alojada en **MongoDB Atlas**, y
utilicé herramientas como **Rest Client** e **Insomnia** para probar la API
durante el desarrollo.

Además, implementé **Zustand** como manejador de estado global para evitar
`prop drilling` y mejorar la escalabilidad del frontend.

### 🚀 Lo que aprendí

- Manejo de estado global con Zustand
- Conexión e integración con bases de datos en la nube (MongoDB Atlas)
- Diseño de rutas protegidas y autenticación con JWT
- Organización del backend por controladores, modelos y rutas
- Integración avanzada de drag and drop con `@dnd-kit`

### 🛠 Tecnologías y herramientas utilizadas

- React
- @dnd-kit
- Tailwind CSS
- Zustand
- JWT
- MongoDB
- Node.js
- Express
- TypeScript
