# ILLAPA — Sitio web del proyecto

Sitio estático preparado para GitHub Pages.

## Estructura

- `index.html` — página principal
- `styles.css` — estética y diseño responsive
- `script.js` — navegación y previsualización local del video
- `assets/illapa.png` — imagen visual de Illapa
- `assets/video.mp4` — coloca aquí el video final

## Cómo publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
3. Coloca tu video final dentro de `assets/` con el nombre exacto:
   `video.mp4`
4. En GitHub entra a:
   Settings → Pages
5. Selecciona la rama `main` y la carpeta `/root`.
6. Guarda y espera a que GitHub Pages genere el enlace público.

## Importante sobre "Cargar video"

El botón de carga de la página sirve para **previsualizar un video localmente en el navegador**. GitHub Pages es un hosting estático y no tiene una base de datos/servidor para guardar los archivos que un visitante suba.

Para que el profesor vea el video al entrar a la página, el archivo debe estar incluido en el repositorio como `assets/video.mp4`.

## Relato

El texto del relato está integrado en `index.html` y puede editarse directamente si necesitas cambiarlo por la versión final aprobada.
