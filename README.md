# Clarix Digital · Landing page

Next.js (App Router) + React + TypeScript estricto + Tailwind CSS 4, exportado como sitio **estático** para Cloudflare Pages.

## Comandos
    npm install
    npm run dev        # desarrollo en http://localhost:3000
    npm run typecheck  # TypeScript
    npm run lint       # ESLint
    npm run build      # genera la carpeta out/
    npm run preview    # sirve out/ en local

## Dónde editar
Todo el contenido (teléfonos, email, packs, FAQ, textos) está en `src/data/site.ts`.
El número principal de los botones de WhatsApp/llamada es el primero de `site.contacts`.
Colores en `src/app/globals.css` (bloque `@theme`). Las fuentes (Inter y Plus Jakarta Sans) se sirven desde el propio sitio vía paquetes `@fontsource`.

## Variables de entorno (opcional)
`NEXT_PUBLIC_SITE_URL` con el dominio definitivo (sin barra final): activa canonical, `sitemap.xml` y `robots.txt` con sitemap. Sin ella se omiten.

## Despliegue en Cloudflare Pages
1. Sube el proyecto a un repositorio de GitHub.
2. Cloudflare → Workers y Pages → Crear → Pages → Conectar con Git.
3. Build command: `npm run build` · Build output directory: `out` · Variable `NODE_VERSION` = `22`.
4. Añade el dominio en Pages → Custom domains y, si quieres canonical, define `NEXT_PUBLIC_SITE_URL`.

## Pendiente antes de publicar
- Completar titular, NIF y domicilio en `/aviso-legal` y `/privacidad` (marcados `[PENDIENTE]`).
- Añadir una imagen para compartir (Open Graph) y un favicon en `src/app/` si se desea.
- No hay formularios, cookies ni analítica. No se ha incluido JSON-LD por no haber datos de negocio verificados (dirección, horario, perfiles).
