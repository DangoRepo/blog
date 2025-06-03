<script setup>
import { computed, defineProps } from 'vue'
import DummyIcon from './icons/dummy.vue'
import MdiV7Icon from './icons/mdi-v7.vue'
import MuiIcon from './icons/mui.vue'
import TextIcon from './icons/text.vue'
import CircleWrapper from './wrappers/circle.vue'
import DummyWrapper from './wrappers/dummy.vue'
import FabWrapper from './wrappers/fab.vue'
import RoundWrapper from './wrappers/round.vue'
import SquareWrapper from './wrappers/square.vue'

const props = defineProps({
  provider: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  box: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: 'var(--vp-c-neutral)',
  },
  bgColor: {
    type: String,
    default: 'transparent',
  },
})

const component = computed(() => {
  switch (props.provider) {
    case 'mui':
      return MuiIcon
    case 'mdi-v7':
      return MdiV7Icon
    case 'text':
      return TextIcon
    default:
      return DummyIcon
  }
})

const wrapper = computed(() => {
  switch (props.box) {
    case 'square':
      return SquareWrapper
    case 'round':
      return RoundWrapper
    case 'circle':
      return CircleWrapper
    case 'fab':
      return FabWrapper
    default:
      return DummyWrapper
  }
})
</script>

<template>
  <component :is="wrapper" class="icon-box" :color="bgColor">
    <component :is="component" :icon="icon" :color="textColor" />
  </component>
</template>

<style scoped>
.icon-box {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.2rem;
}
</style>
