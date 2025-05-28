import { defineConfig } from 'vitepress';
import {
  sidebarConfig,
  navConfig,
  markdownConfig,
  themeConfig
} from './customConfig';

const URL_BASE = '/blog/';
const withBase = (url: string) => `${URL_BASE}${url}`.replace(/\/+/g, '/');

export default defineConfig({
  head: [
    [
      "link",
      {
        rel: "icon",
        type: 'image/x-icon',
        href: withBase("/logos/favicon.svg"),
      },
    ],
  ],
  title: "团子的个人博客",
  description: "团子的个人博客",
  lang: "zh-CN",
  base: "/blog/",
  srcDir: "./docs",
  cleanUrls: true,
  ignoreDeadLinks: true,

  markdown: markdownConfig,

  themeConfig: {
    ...themeConfig,
    nav: navConfig,
    sidebar: sidebarConfig,
  },
});
