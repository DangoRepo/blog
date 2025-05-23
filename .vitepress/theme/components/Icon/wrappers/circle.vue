<script setup>
import { defineProps } from "vue";

defineProps({
  color: {
    type: String,
    default: "transparent",
  },
});
</script>

<template>
  <div class="icon-wrapper" :style="{ backgroundColor: color }">
    <slot></slot>
  </div>
</template>

<style scoped>
.icon-wrapper {
  padding: 0.3rem;
  border-radius: 50%;
}
</style>
