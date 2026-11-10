import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/md-tutorial/': [
    {
      text: '入门基础',
      link: '/md-tutorial/md-intro.md',
    },
    {
      text: '其他资源',
      link: '/md-tutorial/other-resources.md',
    },
    {
      text: '工具',
      link: '/md-tutorial/md-tools.md',
    },
    {
      text: 'Markdown 基本语法',
      link: '/md-tutorial/basic-syntax.md',
      collapsed: false,
      items: [
        {
          text: 'Markdown 标题语法',
          link: '/md-tutorial/basic-syntax/headings.md',
        },
        {
          text: 'Markdown 段落与换行',
          link: '/md-tutorial/basic-syntax/para-and-line-breaks.md',
        },
        {
          text: 'Markdown 强调语法',
          link: '/md-tutorial/basic-syntax/emphasis.md',
        },
        {
          text: 'Markdown 引用语法',
          link: '/md-tutorial/basic-syntax/block-quotes.md',
        },
      ],
    },
  ],

  '/i18n-standard/': [
    {
      text: '转译标准',
      items: [
        {
          text: '中文 → 世界语',
          link: '/i18n-standard/zh-eo.md',
        },
        {
          text: '英语 → 世界语',
          link: '/i18n-standard/en-eo.md',
        },
        {
          text: '日语 → 世界语',
          link: '/i18n-standard/ja-eo.md',
        },
      ],
    },
    {
      text: '参考网站',
      link: '/i18n-standard/reference.md',
    },
  ],

  // 与原始 Wiki 的页面列表保持一致：顺序、显示名均照搬，不做归类
  '/fresh-moves-wiki/': [
    {
      text: 'Fresh Moves Wiki',
      items: [
        {
          text: 'Home',
          link: '/fresh-moves-wiki/home.md',
        },
        {
          text: '1x1 Simple Eyes',
          link: '/fresh-moves-wiki/1x1-simple-eyes.md',
        },
        {
          text: '1x2 Simple Eyes',
          link: '/fresh-moves-wiki/1x2-simple-eyes.md',
        },
        {
          text: '1x3 Simple Eyes',
          link: '/fresh-moves-wiki/1x3-simple-eyes.md',
        },
        {
          text: '2x1 Derp Eyes',
          link: '/fresh-moves-wiki/2x1-derp-eyes.md',
        },
        {
          text: '2x1 Eyes',
          link: '/fresh-moves-wiki/2x1-eyes.md',
        },
        {
          text: '2x2 Eyes',
          link: '/fresh-moves-wiki/2x2-eyes.md',
        },
        {
          text: '2x3 Eyes',
          link: '/fresh-moves-wiki/2x3-eyes.md',
        },
        {
          text: '3x1 Enderman Eyes',
          link: '/fresh-moves-wiki/3x1-enderman-eyes.md',
        },
        {
          text: 'Eyebrow (Villager)',
          link: '/fresh-moves-wiki/eyebrow-villager.md',
        },
        {
          text: 'Eyebrows',
          link: '/fresh-moves-wiki/eyebrows.md',
        },
        {
          text: 'Eyebrows in the 2nd Layer',
          link: '/fresh-moves-wiki/eyebrows-in-the-2nd-layer.md',
        },
        {
          text: 'Eyelashes (2x2 Eyes)',
          link: '/fresh-moves-wiki/eyelashes-2x2-eyes.md',
        },
        {
          text: 'Fix Black Eyes',
          link: '/fresh-moves-wiki/fix-black-eyes.md',
        },
        {
          text: 'Fix Moving 1st Person Hand',
          link: '/fresh-moves-wiki/fix-moving-1st-person-hand.md',
        },
        {
          text: 'WIP 2x1 Fox Eyes (They are missplaced in v3.0.1)',
          link: '/fresh-moves-wiki/wip-2x1-fox-eyes-they-are-missplaced-in-v3-0-1.md',
        },
      ],
    },
  ],
}

export default sidebar
