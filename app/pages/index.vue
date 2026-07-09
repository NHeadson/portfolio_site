<script lang="ts" setup>

</script>

<template>
  <div class="hero container mx-auto mt-20">
    <div class="hero-content">
      <figure class="max-w-md px-2">
        <img src="/images/Headshot.jpg" alt="Profile Picture" class="rounded-full shadow-lg">
      </figure>
      <div class="hero-copy max-w-3xl text-right p-6 px-10">
        <h1 class="text-6xl opacity-75 font-bold text-left p-6">
          Nick Headson
        </h1>
        <hr class="mx-auto">
        <p class="text-start text-xl opacity-75 p-6">
          Hello! <br><br>I am a highly motivated and detail-oriented software developer with a love for creative designs in efficient and scalable
          applications. From my time in school, I gained experience in full-stack development, with a strong background in JavaScript, TypeScript, and
          modern web technologies. <br><br>I am someone who is extremely eager to contribute to innovative projects and continuously learn new skills in the
          consistently-evolving development industry.
        </p>
        <hr class="mx-auto">
        <div class="pt-6">
          <button class="btn btn-accent p-6">
            View My Work
            <Icon name="tabler:arrow-right" size="24" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-copy {
  border: 1px solid rgb(255 255 255 / 0.22);
  border-radius: 1.5rem;
  background: rgb(255 255 255 / 0.1);
  backdrop-filter: blur(8px) saturate(115%);
  box-shadow: 0 12px 30px rgb(0 0 0 / 0.12);
}

:root[data-theme="dracula"] .hero-copy {
  border-color: rgb(255 255 255 / 0.14);
  background: rgb(15 15 23 / 0.26);
  backdrop-filter: blur(8px) saturate(115%);
  box-shadow: 0 12px 30px rgb(0 0 0 / 0.18);
}

.hero-copy h1 {
  text-shadow: 0 1px 8px rgb(0 0 0 / 0.14);
}

.hero-copy p {
  color: inherit;
}

.btn {
  transition:
    transform 220ms ease,
    filter 220ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1);
}
</style>
