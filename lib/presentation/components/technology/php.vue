<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="php" :technology="technologies.php">
    <SvgPhp />
  </Technology>
</template>
