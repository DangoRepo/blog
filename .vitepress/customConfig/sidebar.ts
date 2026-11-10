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

  '/fresh-moves-wiki/': [
    {
      text: 'Fresh Moves Wiki',
      items: [
        {
          text: 'Wiki 首页',
          link: '/fresh-moves-wiki/Home.md',
          collapsed: false,
          items: [
            {
              text: 'About Fresh Moves',
              link: '/fresh-moves-wiki/Home.md#about-fresh-moves',
            },
            {
              text: 'Fixes',
              link: '/fresh-moves-wiki/Home.md#fixes',
            },
            {
              text: 'How to animate the eyes',
              link: '/fresh-moves-wiki/Home.md#how-to-animate-the-eyes',
            },
          ],
        },
        // 迁移新的 Wiki 章节后，在此按原页面的分组结构追加条目，例如：
        // { text: 'Fix Black Eyes', link: '/fresh-moves-wiki/Fix-Black-Eyes.md' },
      ],
    },
  ],
}

export default sidebar
