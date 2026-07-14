<script lang="ts" setup>

</script>

<template>
  <div class="text-center">
    <h1 class="my-10 text-5xl">
      Previous Projects
    </h1>
    <div class="join join-horizontal gap-15">
      <NuxtLink
        class="card bg-base-100 w-150 shadow-sm" to="https://dnd-char-creator.vercel.app" external
        target="_blank" rel="noopener noreferrer"
      >
        <figure>
          <NuxtImg src="/images/DnD-proj-home.png" alt="page preview" loading="lazy" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            D&D Character Creation Tool
          </h2>
          <p>
            This was a project intended to help myself and my friends to create our own characters for Dungeons and
            Dragons. I wanted this to be an informative tool to help ourselves make the most informed choices.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="card bg-base-100 w-150 shadow-sm" to="https://photo-print-shop-tau.vercel.app" external
        target="_blank" rel="noopener noreferrer"
      >
        <figure>
          <NuxtImg src="/images/print-shop-home.png" alt="page preview" loading="lazy" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Photography Print Shop
          </h2>
          <p>
            This was my final project for a course that I took called JavaScript 2. It was the first time I had been
            introduced to using a JS framework and really leaned into Vue and learning how to create beautiful websites
            in a new way. We spent the entire semester on these projects so deadlines were critical through the duration
            of the course for completion.
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.card {
  border-radius: var(--radius-selector);
}

.card:hover {
  transform: scale(1.025);
  cursor: pointer;
}

.join-item {
  border: none;
}
</style>
