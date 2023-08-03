<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="laravel" :technology="technologies.laravel">
    <SvgLaravel />
  </Technology>
</template>
