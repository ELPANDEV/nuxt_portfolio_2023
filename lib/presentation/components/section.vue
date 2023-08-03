<script setup lang="ts">
  const { name, description } = defineProps<{ name: string, description: string }>();
</script>

<template>
  <section class="v-section">
    <header>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </header>
    <slot />
  </section>
</template>
