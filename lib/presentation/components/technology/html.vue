<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="html" :technology="technologies.html">
    <SvgHtml />
  </Technology>
</template>
