<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="flutter" :technology="technologies.flutter">
    <SvgFlutter />
  </Technology>
</template>
