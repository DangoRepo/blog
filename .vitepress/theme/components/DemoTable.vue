<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const prop = defineProps<{
  list: string[]
}>()

interface DemoOption {
  code: string
  html: string
}

const md = new MarkdownIt()

const renderList = computed<DemoOption[]>(() => {
  return prop.list
    .map((code) => {
      return {
        code,
        html: md.render(code),
      }
    })
})
</script>

<template>
  <table tabindex="0">
    <thead>
      <tr>
        <th class="text-center">
          Markdown 语法
        </th><th class="text-center">
          HTML
        </th><th class="text-center">
          预览效果
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in renderList" :key="index">
        <td class="text-center">
          <code>{{ item.code }}</code>
        </td>
        <td class="text-center">
          <code>{{ item.html }}</code>
        </td>
        <td class="text-center">
          <div v-html="item.html" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.text-center {
    text-align: center;
}
</style>
