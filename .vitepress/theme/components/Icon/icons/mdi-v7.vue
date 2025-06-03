<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import MdiPaths from '@quasar/extras/mdi-v7/index.js'
import { computed, defineProps } from 'vue'
import { extractQuasarSvg, transformIconName } from '../util'

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'var(--vp-c-neutral)',
  },
})

const iconSvg = computed(() => {
  const iconName = transformIconName(props.icon, 'mdi')
  const iconDef = MdiPaths[iconName] || ''
  return extractQuasarSvg(iconDef)
})
const iconPath = computed(() => iconSvg.value.svgPath)
const iconViewbox = computed(() => iconSvg.value.viewBox || '0 0 24 24')
</script>

<template>
  <SvgIcon :path="iconPath" :viewBox="iconViewbox" :style="{ color }" />
</template>
