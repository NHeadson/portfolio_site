# Nick Headson Portfolio

A personal portfolio site built with Nuxt 4, Vue 3, Tailwind CSS 4, and DaisyUI. The site presents a landing page with a profile hero, a projects page with featured work, and a light/dark theme toggle.

## Features

- Home page with an introduction and call-to-action
- Projects page showcasing featured external work
- Theme switching between `NeutralLight` and `dracula`
- Custom background images and glassmorphism-style panels
- Google font setup with `Noto Serif`
- Favicon and optimized image assets stored in `public/images`

## Tech Stack

- Nuxt 4
- Vue 3
- Tailwind CSS 4
- DaisyUI
- Nuxt Image
- Nuxt Fonts
- Nuxt Icon
- motion-v

## Routes

- `/` - Home page with profile hero
- `/projects` - Featured project showcase

## Project Structure

- `app/`: `app.vue`, `error.vue`, `assets/css/main.css`, `components/app/nav-bar.vue`, `components/app/theme-toggle.vue`, `layouts/default.vue`, `pages/index.vue`, `pages/projects.vue`
- `public/`: `images/`, `robots.txt`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

## Notes

- `nuxt prepare` runs automatically after install through `postinstall`.
- The app manifest is enabled in `nuxt.config.ts`.
- Background assets are preloaded and themed through the default layout.
