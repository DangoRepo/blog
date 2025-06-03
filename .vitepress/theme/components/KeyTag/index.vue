<script setup>
import _ from 'lodash'
import { computed, defineProps } from 'vue'

const props = defineProps({
  keys: {
    type: Array,
    default() {
      return []
    },
  },
})

const keystrokes = computed(() => {
  const keys = props.keys || []
  const strokes = _.chain(keys)
    .filter(v => v && v.trim())
    .map(v => (v || '').split('+').filter(v => v && v.trim()))
    .value()
  return strokes
})
</script>

<template>
  <div class="keystroke-text">
    <template v-for="(keystroke, strokeIndex) in keystrokes" :key="strokeIndex">
      <template v-if="strokeIndex !== 0">
        ,
      </template>
      <template v-for="(key, keyIndex) in keystroke" :key="keyIndex">
        <template v-if="keyIndex !== 0">
          +
        </template>
        <kbd>{{ key }}</kbd>
      </template>
    </template>
  </div>
</template>

<style scoped>
.keystroke-text {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.8rem;
  font-size: 0.6rem;
}
.keystroke-text kbd {
  font-size: 0.8rem;
  padding: 0.25rem 0.3rem;
  margin: 0.1rem 0.2rem;
  font-weight: bold;
  border-radius: 0.3rem;
  color: var(--vp-c-neutral);
  background-color: var(--vp-c-neutral-inverse);
  background-image: linear-gradient(to bottom, #99999980, #eeeeee80, #99999980);
  border: 0.05rem solid var(--vp-c-neutral);
  box-shadow: 0.05rem 0.05rem 0.1rem var(--vp-c-neutral);
}
</style>
