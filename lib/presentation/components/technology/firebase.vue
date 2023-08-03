<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="firebase" :technology="technologies.firebase">
    <SvgFirebase />
  </Technology>
</template>
