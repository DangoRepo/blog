<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  list: string[][]
  labels?: {
    left?: string
    right?: string
  }
  colors?:{
    inputBg?: string
    outputBg?: string
  }
}>()

const renderList = computed(() => props.list)
</script>

<template>
  <div class="usage-table-container">
    <div class="wrapper">
      <!-- 左侧区域 -->
      <div class="section-input">
        <!-- 自定义左侧标题 -->
        <div class="title">{{ labels?.left || 'Input' }}</div>
        <div v-for="(item, index) in renderList" :key="index" class="input" v-html="item[0]" :style="{ backgroundColor: props.colors?.inputBg }"/>
      </div>

      <!-- 右侧区域 -->
      <div class="section-output">
        <!-- 自定义右侧标题 -->
        <div class="title">{{ labels?.right || 'Output' }}</div>
        <div v-for="(item, index) in renderList" :key="index" class="output" :style="{ backgroundColor: props.colors?.outputBg }">{{ item[1] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.usage-table-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  flex-shrink: 0;
}

.wrapper {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.102);
  align-items: stretch; /* 确保子元素高度拉伸以填满容器 */
  height: auto;
}

.section-input .input:not(:last-child),
.section-output .output:not(:last-child){
  /* margin-bottom: 0.5rem; */
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--glb-customtable-c-border);
}

.section-input .title {background-color: var(--glb-customtable-title-c-bg-lv1)}
.section-output .title {background-color: var(--glb-customtable-title-c-bg-lv2)}

.section-input,
.section-output{
  display: flex;
  flex-direction: column;
  flex: 1; /* 平均分配宽度 */
  min-height: 0; /* 允许内容溢出时正常拉伸 */
  overflow: auto;
}

.input,
.output{
  flex: 1; /* 让内容撑开容器并保持高度一致 */
  display: flex;
  flex-direction: column;
  word-break: break-all;
  max-height: 200px; /* 固定显示区域高度 */
  overflow: auto; /* 内容溢出时显示滚动条 */
}

.wrapper .input {
  flex: 2;
  background-color: var(--usagetable-c-bg-correct);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: monospace;
  white-space: pre-wrap;
}

.wrapper .output {
  flex: 2;
  background-color: var(--usagetable-c-bg-wrong);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: monospace;
  white-space: pre-wrap;
}
</style>
