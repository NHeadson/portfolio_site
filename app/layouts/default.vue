<script lang="ts" setup>
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
  z-index: -1;
  scale: 1.1;
}

:root[data-theme="dracula"] .bg-wrapper::before {
  background-image: url("/images/bg.jpg");
}
</style>
