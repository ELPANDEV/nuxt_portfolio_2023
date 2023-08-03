<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="css" :technology="technologies.css">
    <SvgCss />
  </Technology>
</template>
