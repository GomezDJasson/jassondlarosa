# Jasson D La Rosa

Sitio personal de **Jasson D La Rosa** para centralizar redes sociales, comunidad, compras y contacto.

## ✨ Características

- Perfil con logo e identidad propia.
- Enlaces a Discord, Twitch, Facebook, Instagram, X, TikTok y YouTube.
- Sección independiente de **Compras** para acceder a Stefa Store.
- Contacto directo por correo electrónico.
- Diseño responsive para escritorio y dispositivos móviles.
- Iconos de plataformas mediante React Icons.
- Microinteracciones y efectos visuales.
- Despliegue automático con GitHub Pages.

## 🛠️ Tecnologías

- React
- TypeScript
- Vite
- React Icons
- Lucide React
- CSS
- GitHub Actions
- GitHub Pages

## 📁 Estructura

```text
jassondlarosa/
├── .github/workflows/static.yml
├── public/assets/logo-jassondlarosa.png
├── src/
│   ├── components/
│   ├── data/profile.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## 🌐 GitHub Pages

Cada cambio enviado a `main` ejecuta el workflow de GitHub Actions y publica la aplicación en GitHub Pages.

La configuración de Vite utiliza `/jassondlarosa/` como ruta base.

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
