<script setup lang="ts">
  const { project } = defineProps<{ project: IProject }>()
</script>

<template>
  <article class="v-project">
    <picture>
      <img :src="project.image" :alt="project.name" loading="lazy">
    </picture>
    <header>
      <h1>{{ project.name }}</h1>
    </header>
  </article>
</template>
