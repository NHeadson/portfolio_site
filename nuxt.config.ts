import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  experimental: {
    appManifest: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "motion-v/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  icon: {
    provider: "iconify",
  },
  fonts: {
    families: [
      {
        name: "Noto Serif",
        provider: "google",
      },
    ],
  },
  css: ["../app/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    build: {
      sourcemap: false,
      modulePreload: {
        polyfill: false,
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    dataValue: "theme",
  },
});
