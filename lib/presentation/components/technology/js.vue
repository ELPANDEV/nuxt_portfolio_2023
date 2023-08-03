<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="js" :technology="technologies.js">
    <SvgJs />
  </Technology>
</template>
