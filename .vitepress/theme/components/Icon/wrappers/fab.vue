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
  <div class="icon-wrapper" :style="{ '--color': color }">
    <slot />
  </div>
</template>

<style scoped>
.icon-wrapper {
  padding: 0.3rem;
  border-radius: 50%;
  background-color: var(--color);
  background-image: linear-gradient(
    to bottom,
    #ffffff4d,
    #fff0 50%,
    #0000001f 51%,
    #0000000a
  );
}
</style>
