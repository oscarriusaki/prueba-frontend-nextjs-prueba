# My App

Proyecto Next.js creado con `create-next-app`.

## Resumen

Este repositorio contiene una aplicación Next.js. Este README explica cómo configurar el proyecto, instalar dependencias, ejecutarlo en desarrollo y producción, y cómo levantarlo usando Docker Compose.

## Requisitos

- Node.js v18 o superior
- npm 9+ (o `pnpm` / `yarn` alternativos)
- Docker y Docker Compose (en Linux: `docker` y `docker-compose` o la integración de Docker Desktop)

## Preparación (clonar y dependencias)

1. Clona el repositorio:

   git clone <url-del-repositorio>
   cd my-app

2. Instala dependencias (elige uno):

- Con npm:

  npm install

- Con pnpm:

  pnpm install

- Con yarn:

  yarn install

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto para variables privadas que no quieres en el repositorio. Ejemplo mínimo:

```
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Añade aquí otras variables necesarias por tu app
```

Asegúrate de revisar el código para ver qué variables más se requieren (buscar `process.env.` o `NEXT_PUBLIC_`).

## Ejecutar en desarrollo (local)

1. Instalar dependencias (ver arriba).
2. Ejecutar el servidor de desarrollo:

   npm run dev

3. Abre en el navegador:

   http://localhost:3000

El servidor se recarga automaticamente al cambiar archivos.

## Construir y ejecutar en modo producción (local)

1. Construir la app:

   npm run build

2. Ejecutar:

   npm start

Por defecto la app servirá en el puerto 3000.

## Comandos útiles

- npm run dev — servidor de desarrollo
- npm run build — construir la app
- npm start — ejecutar la app en modo producción
- npm test — (si existe) ejecutar tests
- npm run lint — (si existe) ejecutar linter

## Troubleshooting rápido

- Puerto en uso: cambia el puerto exportando `PORT` o usa otro puerto.
- Errores de dependencias: borra `node_modules` y lockfile y vuelve a instalar.
- Si Docker falla al construir por permisos, asegúrate de tener permisos adecuados o añade `--no-cache` si quieres forzar reconstrucción.

## Contribuir

Si vas a contribuir, crea un branch, realiza cambios y abre un Pull Request. Añade documentación de las nuevas variables de entorno o requisitos adicionales.

---

Si quieres, puedo:

- generar también el `Dockerfile` y `docker-compose.yml` en el repositorio,
- añadir un ejemplo de `.env.example`.

Indica si deseas que cree esos archivos ahora.
