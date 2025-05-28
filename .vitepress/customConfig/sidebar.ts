import { DefaultTheme } from "vitepress";

const sidebar : DefaultTheme.Sidebar = {
  "/md-tutorial/":[
    {
      text: "入门基础",
      link: "/md-tutorial/md-intro.md",
    },
    {
      text: "其他资源",
      link: "/md-tutorial/other-resources.md",
    },
  ],

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
        {
          text: "日语 → 世界语",
          link: "/i18n-standard/ja-eo.md",
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
