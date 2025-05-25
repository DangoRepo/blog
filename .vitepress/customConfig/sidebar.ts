import { DefaultTheme } from "vitepress";

const sidebar : DefaultTheme.Sidebar = {
  "/i18n-standard/": [
    {
      text: "转译标准",
      items: [
        {
          text: "中文 → 世界语",
          link: "/i18n-standard/zh-eo.md",
        },
        {
          text: "英语 → 世界语",
          link: "/i18n-standard/en-eo.md",
        },
      ],
    },
    {
      text: "参考网站",
      link: "/i18n-standard/reference.md",
    },
  ],
}

export default sidebar;
