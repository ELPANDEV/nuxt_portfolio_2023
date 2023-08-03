<script setup lang="ts">
  import { technologies } from "~/lib/features/technology/data"
</script>

<template>
  <Technology class="mysql" :technology="technologies.mysql">
    <SvgMysql />
  </Technology>
</template>
