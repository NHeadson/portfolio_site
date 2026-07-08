<script lang="ts" setup>
import { computed } from "vue";

const colorMode = useColorMode();
const lightTheme = "NeutralLight";
const darkTheme = "dracula";

const isDark = computed({
  get() {
    return colorMode.value === darkTheme;
  },
  set(value) {
    colorMode.preference = value ? darkTheme : lightTheme;
  },
});

const themeToggleLabel = computed(() => (
  isDark.value ? "Switch to light mode" : "Switch to dark mode"
));
</script>

<template>
  <label class="theme-toggle swap swap-rotate mx-4" :aria-label="themeToggleLabel">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon class="swap-on" name="tabler:sun" size="24" />

    <!-- moon icon -->
    <Icon class="swap-off" name="tabler:moon-filled" size="24" />

    <span class="theme-toggle__tooltip" aria-hidden="true">
      {{ themeToggleLabel }}
    </span>
  </label>
</template>

<style scoped>
.theme-toggle {
  position: relative;
}

.theme-toggle__tooltip {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%) translateY(-0.25rem);
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  border: 1px solid rgb(255 255 255 / 0.14);
  border-radius: 9999px;
  background: rgb(15 15 23 / 0.9);
  color: rgb(255 255 255 / 0.95);
  padding: 0.4rem 0.7rem;
  font-size: 0.75rem;
  line-height: 1;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.2);
  transition:
    opacity 120ms ease,
    transform 120ms ease;
  z-index: 20;
}

.theme-toggle:hover .theme-toggle__tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
