<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const props = defineProps<{
  list: string[]
}>()

interface DemoItem {
  code: string
  html: string
}

const md = new MarkdownIt()

const renderList = computed<DemoItem[]>(() => {
  return props.list.map((code) => {
    const sanitizedCode = code.replace(/<br\s*\/?>/gi, '\n') // 删除 <br>
    return {
      code: sanitizedCode.replace(/\n/g, '<br>'),
      html: md.render(sanitizedCode),
    }
  })
})
</script>

<template>
  <div class="demo-block-container">
    <div class="wrapper">
      <!-- 单个标题区域 -->
      <div class="section-code">
        <div class="title">Markdown 语法</div>
        <!-- 多个内容项共享该标题 -->
        <div v-for="(item, index) in renderList" :key="index" class="code" v-html="item.code" />
      </div>

      <div class="section-html">
        <div class="title">HTML</div>
        <div v-for="(item, index) in renderList" :key="index" class="html">{{ item.html }}</div>
      </div>

      <div class="section-preview">
        <div class="title">预览效果</div>
        <div v-for="(item, index) in renderList" :key="index" class="preview" v-html="item.html" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-block-container {
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

.section-code .code:not(:last-child),
.section-html .html:not(:last-child),
.section-preview .preview:not(:last-child) {
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--glb-customtable-c-border);
}

.section-code .title {background-color: var(--glb-customtable-title-c-bg-lv0)}
.section-html .title {background-color: var(--glb-customtable-title-c-bg-lv1)}
.section-preview .title {background-color: var(--glb-customtable-title-c-bg-lv2);}

.section-code,
.section-html,
.section-preview {
  display: flex;
  flex-direction: column;
  flex: 1; /* 平均分配宽度 */
  min-height: 0; /* 允许内容溢出时正常拉伸 */
  overflow: auto;
}

.code,
.html,
.preview {
  flex: 1; /* 让内容撑开容器并保持高度一致 */
  display: flex;
  flex-direction: column;
  word-break: break-all;
  max-height: 200px; /* 固定显示区域高度 */
  overflow: auto; /* 内容溢出时显示滚动条 */
}

.wrapper .code {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv0);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: monospace;
  white-space: pre-wrap;
}

.wrapper .html {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv1);
  color: var(--vp-c-text-1);
  padding: 1rem;
  font-family: monospace;
  white-space: pre-wrap;
}

.wrapper .preview {
  flex: 2;
  background-color: var(--glb-customtable-content-bg-lv2);
  color: var(--vp-c-text-1);
  padding: 1rem;
}
</style>
