<script setup>
import { computed, defineProps } from "vue";
import { withBase } from "vitepress";
import adapterDict from "./adapters/index";

const props = defineProps({
  set: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const cursorUrl = computed(() => {
  const adapter = adapterDict[props.set] || {};
  const filename = adapter[props.name] || "";
  if (!filename) return "";

  return withBase(`/cursors/${props.set}/${filename}`);
});
</script>

<template>
  <div class="cursor-area" :style="{ '--image': `url(${cursorUrl})` }">
    <div class="cursor-image">&nbsp;</div>
  </div>
</template>

<style scoped>
.cursor-area {
  user-select: none;
  display: inline-block;
  position: relative;
  line-height: 0;
  background-color: var(--vp-c-neutral);
  background-image: linear-gradient(to bottom, #9997, #eee7);
  padding: 0.1rem;
  margin: 0.1rem;
  vertical-align: middle;
  border-radius: 0.3rem;
  cursor:
    var(--image) 16 16,
    default;
}
.cursor-area:hover {
  outline: 0.1rem dashed var(--vp-c-neutral);
}
.cursor-image {
  display: inline-block;
  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 2rem;
  height: 2rem;
}
</style>
