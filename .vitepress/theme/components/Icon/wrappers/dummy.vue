<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String,
    default: 'transparent',
  },
})
</script>

<template>
  <div class="icon-wrapper" :style="{ backgroundColor: color }">
    <slot />
  </div>
</template>
