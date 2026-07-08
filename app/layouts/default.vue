<script lang="ts" setup>
const colorMode = useColorMode();
const darkTheme = "dracula";

useHead(() => {
  const isDarkTheme = colorMode.value === darkTheme;

  return {
    link: [
      {
        key: "theme-background-primary",
        rel: "preload",
        as: "image",
        href: isDarkTheme ? "/images/bg.jpg" : "/images/bg-light.jpg",
      },
      {
        key: "theme-background-secondary",
        rel: "prefetch",
        href: isDarkTheme ? "/images/bg-light.jpg" : "/images/bg.jpg",
      },
    ],
  };
});
</script>

<template>
  <div class="bg-wrapper max-h-screen overflow-hidden">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.bg-wrapper {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
}

.bg-wrapper::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("/images/bg-light.jpg");
  background-size: cover;
  background-position: top;
  filter: blur(8px);
  opacity: 1;
  transform: scale(1.06);
  transition:
    opacity 350ms ease,
    transform 700ms ease;
  z-index: -1;
}

.bg-wrapper::after {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("/images/bg.jpg");
  background-size: cover;
  background-position: top;
  filter: blur(8px);
  opacity: 0;
  transform: scale(1.03);
  transition:
    opacity 350ms ease,
    transform 700ms ease;
  z-index: -2;
}

:root[data-theme="dracula"] .bg-wrapper::before {
  opacity: 0;
  transform: scale(1.03);
}

:root[data-theme="dracula"] .bg-wrapper::after {
  opacity: 1;
  transform: scale(1.1);
}

:root:not([data-theme="dracula"]) .bg-wrapper::before {
  opacity: 1;
  transform: scale(1.1);
}

:root:not([data-theme="dracula"]) .bg-wrapper::after {
  opacity: 0;
  transform: scale(1.03);
}
</style>
