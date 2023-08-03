<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="scss" :technology="technologies.scss">
    <SvgScss />
  </Technology>
</template>
