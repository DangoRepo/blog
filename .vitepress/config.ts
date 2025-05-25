import { defineConfig } from 'vitepress';
import {
  sidebarConfig,
  navConfig,
  markdownConfig,
  themeConfig
} from './customConfig';

export default defineConfig({
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.svg",
      },
    ],
  ],
  title: "团子的个人博客",
  description: "团子的个人博客",
  lang: "zh-CN",
  base: "/blog/",
  srcDir: "./docs",
  cleanUrls: true,

  markdown: markdownConfig,

  themeConfig: {
    ...themeConfig,
    nav: navConfig,
    sidebar: sidebarConfig,
  },
});
