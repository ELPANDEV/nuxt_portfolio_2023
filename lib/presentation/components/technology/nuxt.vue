<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="nuxt" :technology="technologies.nuxt">
    <SvgNuxt />
  </Technology>
</template>
