<template>
  <div class="section-divider">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>

<style>
.section-divider {
  margin: 20px 0 0 15px;
}
</style>
