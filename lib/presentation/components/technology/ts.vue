<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="ts" :technology="technologies.ts">
    <SvgTs />
  </Technology>
</template>
