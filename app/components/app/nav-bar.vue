<template>
  <div class="navbar nav-shell bg-primary/70 text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="brand-link btn btn-ghost text-xl">
        Nick Headson
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <NuxtLink to="/projects" class="cta-link btn btn-accent">
        View My Work
        <Icon name="tabler:arrow-right" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.nav-shell {
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgb(255 255 255 / 0.12);
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.12);
  transition:
    background-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}

.nav-shell:hover {
  box-shadow: 0 14px 36px rgb(0 0 0 / 0.16);
}

.brand-link,
.cta-link {
  transition:
    transform 220ms ease,
    filter 220ms ease;
}

.brand-link:hover {
  background-color: var(--color-secondary);
  color: var(--color-secondary-content);
  border-color: var(--color-secondary);
}

.brand-link:hover,
.cta-link:hover {
  transform: translateY(-1px);
  filter: brightness(1);
}

.cta-link {
  gap: 0.35rem;
}
</style>
