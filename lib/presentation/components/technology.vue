<script setup lang="ts">
  const { technology } = defineProps<{ technology: ITechnology }>();
</script>

<template>
  <li class="v-technology">
    <img :src="technology.image" :alt="technology.name">
    {{ technology.name }}
  </li>
</template>
