<script lang="ts" setup>
import { computed } from 'vue'

interface ColumnOptions {
  title?: string
  bgColor?: string
  titleBgColor?: string
  columnBgColor?: string
}

const props = withDefaults(defineProps<{
  list: string[][]
  columns?: ColumnOptions[]
}>(), {
  columns: () => ([]),
})

const maxColumn = computed(() => {
  const rowColNums = props.list.map(v => v.length)
  const maxCols = Math.max(...rowColNums)
  return maxCols
})

function titleBgColor(colIndex: number): string {
  const defaultColors = [
    'var(--glb-customtable-title-c-bg-lv0)',
    'var(--glb-customtable-title-c-bg-lv1)',
    'var(--glb-customtable-title-c-bg-lv2)',
    'var(--glb-customtable-title-c-bg-lv3)',
    'var(--glb-customtable-title-c-bg-lv4)',
  ]
  const colorIndex = (colIndex - 1) % (defaultColors.length)
  return props.columns[colIndex - 1]?.titleBgColor ?? defaultColors[colorIndex]
}
function columnBgColor(colIndex: number): string {
  const defaultColors = [
    'var(--glb-customtable-content-bg-lv0)',
    'var(--glb-customtable-content-bg-lv1)',
    'var(--glb-customtable-content-bg-lv2)',
    'var(--glb-customtable-content-bg-lv3)',
    'var(--glb-customtable-content-bg-lv4)',
  ]
  const colorIndex = (colIndex - 1) % (defaultColors.length)
  return props.columns[colIndex - 1]?.columnBgColor ?? defaultColors[colorIndex]
}
</script>

<template>
  <div class="usage-table-container">
    <div class="wrapper">
      <div v-for="colIndex in maxColumn" :key="colIndex" class="section">
        <div
          class="title"
          :style="{ backgroundColor: titleBgColor(colIndex) }"
        >
          {{ columns[colIndex - 1]?.title || '&nbsp;' }}
        </div>
        <div
          v-for="(item, index) in list"
          :key="index"
          class="content"
          :style="{ backgroundColor: columnBgColor(colIndex) }"
          v-html="item[colIndex - 1]"
        />
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

.section
{
  display: flex;
  flex-direction: column;
  flex: 1; /* 平均分配宽度 */
  min-height: 0; /* 允许内容溢出时正常拉伸 */
  overflow: auto;
}

.content
{
  flex: 1; /* 让内容撑开容器并保持高度一致 */
  display: flex;
  flex-direction: column;
  word-break: break-all;
  max-height: 200px; /* 固定显示区域高度 */
  overflow: auto; /* 内容溢出时显示滚动条 */
  padding-bottom: 0.5rem;
}

.content:not(:last-child) {
  border-bottom: 3px solid var(--glb-customtable-c-border);
}

.wrapper .content {
  flex: 2;
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}
</style>
