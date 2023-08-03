<script setup lang="ts">
  const { technology } = defineProps<{ technology: ITechnology }>();
</script>

<template>
  <li class="v-technology">
    <slot />
    {{ technology.name }}
  </li>
</template>
