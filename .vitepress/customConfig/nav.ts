import { DefaultTheme } from "vitepress";

const nav : DefaultTheme.NavItem[] = [
  {
    text: "文档",
    items: [
      {
        text: "翻译标准",
        link: "/i18n-standard/",
      },
    ],
  },
  {
    text: "工具",
    items: [
      {
        text: "Sophon Downloader",
        link: "/tool/sophon-downloader.md",
      },
    ],
  },
  {
    text: "其他",
    items: [
      {
        text: "常用 Emoji 图标",
        link: "/misc/md-emoji-list.md",
      },
      {
        text: "翻译标准",
        link: "/i18n-standard/",
      },
    ],
  },
]

export default nav
