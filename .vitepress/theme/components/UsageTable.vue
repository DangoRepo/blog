<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  list: string[][]
  labels?: {
    first?: string
    second?: string
    third?: string
    fourth?: string
    fifth?: string
  }
  colors?: {
    firstBg?: string
    secondBg?: string
    thirdBg?: string
    fourthBg?: string
    fifthBg?: string
  }
}>()

const renderList = computed(() => props.list)

const hasColumn = (index: number) => props.list.some(item => item[index] !== undefined && item[index] !== null)
</script>

<template>
  <div class="usage-table-container">
    <div class="wrapper">
      <!-- 第一列 -->
      <div v-if="hasColumn(0)" class="section-first">
        <div class="title">
          {{ labels?.first || 'First' }}
        </div>
        <div v-for="(item, index) in renderList" :key="index" class="first" :style="{ backgroundColor: props.colors?.firstBg }" v-html="item[0]" />
      </div>

      <!-- 第二列 -->
      <div v-if="hasColumn(1)" class="section-second">
        <div class="title">
          {{ labels?.second || 'Second' }}
        </div>
        <div v-for="(item, index) in renderList" :key="index" class="second" :style="{ backgroundColor: props.colors?.secondBg }">
          {{ item[1] }}
        </div>
      </div>

      <!-- 第三列 -->
      <div v-if="hasColumn(2)" class="section-third">
        <div class="title">
          {{ labels?.third || 'Third' }}
        </div>
        <div v-for="(item, index) in renderList" :key="index" class="third" :style="{ backgroundColor: props.colors?.thirdBg }">
          {{ item[2] }}
        </div>
      </div>

      <!-- 第四列 -->
      <div v-if="hasColumn(3)" class="section-fourth">
        <div class="title">
          {{ labels?.fourth || 'Fourth' }}
        </div>
        <div v-for="(item, index) in renderList" :key="index" class="fourth" :style="{ backgroundColor: props.colors?.fourthBg }">
          {{ item[3] }}
        </div>
      </div>

      <!-- 第五列 -->
      <div v-if="hasColumn(4)" class="section-fifth">
        <div class="title">
          {{ labels?.fifth || 'Fifth' }}
        </div>
        <div v-for="(item, index) in renderList" :key="index" class="fifth" :style="{ backgroundColor: props.colors?.fifthBg }">
          {{ item[4] }}
        </div>
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

.wrapper > div {
  flex: 1;
}

.section-first .first:not(:last-child),
.section-second .second:not(:last-child),
.section-third .third:not(:last-child),
.section-fourth .fourth:not(:last-child),
.section-fifth .fifth:not(:last-child)
{
  /* margin-bottom: 0.5rem; */
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--glb-customtable-c-border);
}

.section-first .title {background-color: var(--glb-customtable-title-c-bg-lv0)}
.section-second .title {background-color: var(--glb-customtable-title-c-bg-lv1)}
.section-third .title {background-color: var(--glb-customtable-title-c-bg-lv2)}
.section-fourth .title {background-color: var(--glb-customtable-title-c-bg-lv3)}
.section-fifth .title {background-color: var(--glb-customtable-title-c-bg-lv4)}

.section-first,
.section-second,
.section-third,
.section-fourth,
.section-fifth
{
  display: flex;
  flex-direction: column;
  flex: 1; /* 平均分配宽度 */
  min-height: 0; /* 允许内容溢出时正常拉伸 */
  overflow: auto;
}

.first,
.second,
.third,
.fourth,
.fifth
{
  flex: 1; /* 让内容撑开容器并保持高度一致 */
  display: flex;
  flex-direction: column;
  word-break: break-all;
  max-height: 200px; /* 固定显示区域高度 */
  overflow: auto; /* 内容溢出时显示滚动条 */
}

.wrapper .first {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv0);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}

.wrapper .second {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv1);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}

.wrapper .third {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv2);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}

.wrapper .fourth {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv3);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}

.wrapper .fifth {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv4);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: sans-serif;
  white-space: pre-wrap;
}
</style>
