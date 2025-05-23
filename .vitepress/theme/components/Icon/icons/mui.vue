<script setup>
import { computed, defineProps } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import MuiPaths from "@quasar/extras/material-icons/index.js";
import { transformIconName, extractQuasarSvg } from "../util";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "var(--vp-c-neutral)",
  },
});

const iconSvg = computed(() => {
  const iconName = transformIconName(props.icon, "mat");
  const iconDef = MuiPaths[iconName] || "";
  return extractQuasarSvg(iconDef);
});
const iconPath = computed(() => iconSvg.value.svgPath);
const iconViewbox = computed(() => iconSvg.value.viewBox || "0 0 24 24");
</script>

<template>
  <SvgIcon :path="iconPath" :viewBox="iconViewbox" :style="{ color }"></SvgIcon>
</template>
