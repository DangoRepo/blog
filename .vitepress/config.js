import { align } from "@mdit/plugin-align";
import { figure } from "@mdit/plugin-figure";

export default {
  title: "团子的个人博客",
  description: "团子的个人博客",
  lang: "zh-CN",
  base: "/blog/",
  srcDir: "./docs",
  cleanUrls: true,

  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    config(md) {
      md.use(align);
      md.use(figure);
    },
  },

  themeConfig: {
    appearance: true,
    aside: true,
    siteTitle: "团子的个人博客",
    logo: "",
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "样式",
    lightModeSwitchTitle: "切换为亮色模式",
    darkModeSwitchTitle: "切换为暗黑模式",
    externalLinkIcon: true,

    docFooter: {
      prev: "上一章节",
      next: "下一章节",
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/DangoRepo/blog" },
    ],

    nav: [
      {
        text: "文档",
        link: "/documentation/",
        activeMatch: "/documentation/",
      },
    ],
    sidebar: {
      "/documentation/": [
        {
          text: "文档",
          collapsed: false,
          items: [
            {
              text: "基础介绍",
              link: "/documentation/404.md",
            },
            {
              text: "API 示例",
              link: "/documentation/404.md",
            },
          ],
        },
      ],
    },
  },
};
