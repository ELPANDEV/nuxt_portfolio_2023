<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="dart" :technology="technologies.dart">
    <SvgDart />
  </Technology>
</template>
