<script setup lang="ts">
  const { name } = defineProps<{ name: string }>();
</script>

<template>
  <button class="v-pager-button">
    {{ name }}
  </button>
</template>
