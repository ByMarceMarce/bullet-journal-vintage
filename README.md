
Bullet Journal Vintage v5.1 - Proyecto React + Vite + Tailwind (PWA)
------------------------------------------------------------------

Contenido del proyecto:
- package.json, vite.config.js, tailwind.config.js, postcss.config.cjs
- index.html, manifest.json, service-worker.js
- public/icon.svg, public/icon-192.png, public/icon-512.png
- src/ (código React)

Instalación local (para desarrollo):
1. Asegúrate de tener Node.js (>=16) y npm instalados.
2. Desde la carpeta del proyecto ejecuta:
   npm install
   npm run dev
3. Abre http://localhost:5173 (o la URL que indique vite).

Build para producción:
1. npm run build
2. npm run preview  (verifica locally antes de subir)
3. Los archivos optimizados estarán en la carpeta /dist

Despliegue en Vercel (recomendado):
- Crea un repositorio en GitHub y sube todo el contenido.
- En Vercel -> New Project -> Import Git Repository -> Selecciona tu repo.
- Framework Preset: Other
- Build command: npm run build
- Output directory: dist
- Deploy

Despliegue en Netlify (opción alternativa):
- Conecta tu repo de GitHub en Netlify.
- Build command: npm run build
- Publish directory: dist

Instalación PWA:
- Después de desplegar, abre la URL en tu navegador. Chrome/Edge mostrarán opción "Instalar" (Add to home screen / Install app).
- En local, puedes usar `npm run preview` y luego instalar desde el navegador.

Exportar secciones a PDF:
- Usa el botón de la sección (o imprimir) para generar PDF con estilo vintage.

Si quieres que yo haga el push al repo o despliegue por ti, dame acceso al repo o un token temporal y te indico los pasos seguros.
