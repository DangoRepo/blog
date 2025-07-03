import type { MarkdownOptions } from 'vitepress'
import { align } from '@mdit/plugin-align'
import { figure } from '@mdit/plugin-figure'
import pluginMdc from 'markdown-it-mdc'

const markdown: MarkdownOptions = {
  image: {
    lazyLoading: true,
  },
  container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息',
  },
  config(md) {
    md.use(align)
    md.use(figure)
    md.use(pluginMdc)
  },
}

export default markdown
