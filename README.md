# Jasson D La Rosa

Página personal de enlaces de **Jasson D La Rosa**, creada para reunir en un solo lugar sus redes sociales, comunidad, tienda y contacto.

El sitio combina una identidad visual propia con una interfaz responsive, efectos de iluminación y fondos adaptados a escritorio y dispositivos móviles. Está desarrollado con React, TypeScript y Vite, y se publica mediante GitHub Pages.

## ✨ Características

- Perfil personal con logo y estilo visual propio.
- Enlaces directos a Discord, Twitch, Facebook, Instagram, X, TikTok y YouTube.
- Sección independiente de **Compras** con acceso a Stefa Store.
- Contacto por correo electrónico.
- Diseño adaptable a escritorio y móviles.
- Fondos visuales personalizados para distintos tamaños de pantalla.
- Iconos de redes sociales con React Icons.
- Iconos de interfaz con Lucide React.
- Halos luminosos, efectos hover y animaciones sutiles.
- Despliegue automático mediante GitHub Actions.

## 🔗 Enlaces del perfil

Los enlaces del perfil se definen en `src/data/profile.ts`, junto con el nombre, descripción, logo, información de la tienda, correo y texto del pie de página. Así es posible actualizar el contenido sin modificar la estructura de los componentes.

Actualmente incluye:

- **Comunidad:** Discord.
- **Streaming:** Twitch.
- **Redes sociales:** Facebook, Instagram, X, TikTok y YouTube.
- **Compras:** acceso a [Stefa Store](https://stefastore.com).
- **Contacto:** correo electrónico.

## 🧩 Componentes

La interfaz está dividida en componentes reutilizables:

- `ProfileHeader.tsx` — logo, nombre y descripción del perfil.
- `SocialLinks.tsx` — organiza los enlaces sociales.
- `SocialLink.tsx` — presenta cada enlace individual.
- `Shopping.tsx` — tarjeta de acceso a la tienda.
- `Footer.tsx` — copyright y enlace al portafolio.
- `App.tsx` — compone las secciones principales de la página.

Los estilos generales están en `src/index.css` y los estilos de la página en `src/App.css`.

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Construcción de la interfaz |
| TypeScript | Tipado del código |
| Vite 8 | Servidor de desarrollo y compilación |
| React Icons | Iconos de redes sociales |
| Lucide React | Iconos de interfaz |
| CSS | Diseño responsive, fondos y animaciones |
| GitHub Actions | Automatización de la publicación |
| GitHub Pages | Hosting del sitio |

## 📁 Estructura del proyecto

```text
jassondlarosa/
├── .github/
│   └── workflows/
│       └── static.yml
├── public/
│   └── assets/
│       ├── Castillo bajo la luna roja.png
│       ├── anime-night-mobile.webp
│       └── logo-jassondlarosa.png
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── Shopping.tsx
│   │   ├── SocialLink.tsx
│   │   └── SocialLinks.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Instalación y desarrollo

Necesitas tener Node.js y npm instalados.

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/GomezDJasson/jassondlarosa.git
cd jassondlarosa
npm install
```

Inicia el servidor local:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir el sitio en el navegador.

## 📦 Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo.

### Compilación

```bash
npm run build
```

Genera la versión optimizada para producción en la carpeta `dist/`.

### Vista previa

```bash
npm run preview
```

Permite revisar localmente la versión generada por la compilación.

## 🌐 Despliegue en GitHub Pages

El repositorio utiliza el workflow `.github/workflows/static.yml`. Al enviar cambios a la rama `main`, GitHub Actions instala las dependencias, ejecuta el build y publica el contenido de `dist/` en GitHub Pages. También se puede iniciar manualmente desde la pestaña **Actions**.

La configuración de Vite define la ruta base del proyecto:

```ts
base: '/jassondlarosa/'
```

Sitio publicado:

**https://gomezdjasson.github.io/jassondlarosa/**

## 👨‍💻 Autor

**Jasson D La Rosa**

- GitHub: https://github.com/GomezDJasson
- Portafolio: https://portafolio-jasson.vercel.app/

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para ver los términos.

---

© 2026 Jasson D La Rosa. Todos los derechos reservados.
