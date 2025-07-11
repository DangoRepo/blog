import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { nextTick, onMounted, watch } from 'vue'
import Cursor from './components/Cursor/index.vue'
import DemoBlock from './components/DemoBlock.vue'
import Icon from './components/Icon/index.vue'
import KeyTag from './components/KeyTag/index.vue'
import UsageTable from './components/UsageTable.vue'
import './vars.css'
import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Icon', Icon)
    ctx.app.component('Cursor', Cursor)
    ctx.app.component('KeyTag', KeyTag)
    ctx.app.component('UsageTable', UsageTable)
    ctx.app.component('DemoBlock', DemoBlock)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img:not(.no-zoomable)', {
        background: 'var(--vp-c-bg)',
      })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () =>
        nextTick(() => {
          initZoom()
        }),
    )
  },
}
