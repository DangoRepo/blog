<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'var(--vp-c-neutral)',
  },
})
</script>

<template>
  <span class="icon-text" :style="{ color }"> {{ icon }}</span>
</template>

<style scoped>
.icon-text {
  font-weight: bold;
}
</style>
