# Viaje a Bilbao 2026

Web app de presentación del vídeo «Viaje a Bilbao 2026», al estilo de
[alfonso65.vercel.app](https://alfonso65.vercel.app/): reproductor vertical 9:16,
botones de descarga / compartir / pantalla completa, conmutador de idioma ES/EN,
PWA instalable y Vercel Analytics.

## Estructura

- `index.html` — carcasa y metadatos Open Graph
- `styles.css` — estilos (tema oscuro + dorado)
- `app.js` — lógica: idioma, play, compartir, pantalla completa, analytics
- `video/viaje-bilbao-2026.mp4` — el vídeo (vertical 1080x1920, 2:35)
- `poster.jpg` — portada del reproductor y miniatura al compartir
- `icon.svg`, `manifest.webmanifest`, `sw.js` — PWA

## Despliegue en Vercel

1. En el dashboard de Vercel: **Add New → Project → Import** `jpecinagithub/viaje-bilbao-2026`.
2. Framework: **Other**. Sin build ni variables de entorno.
3. **Deploy**.

Tras desplegar, comprobar que `og:image` apunta al dominio final
(`https://viaje-bilbao-2026.vercel.app/poster.jpg`).
