# Fresh-Moves Wiki 采集

从 GitHub Wiki 抓取的项目文档，现作为「**教程 → Fresh Moves Wiki**」的一个跳转入口挂在站点导航下，页面内自带 sidebar 目录，便于后续逐章迁移。

> 本文件放在仓库的 `internal/` 下，位于 VitePress 的 `srcDir`（`docs/`）之外，因此**不参与站点构建**：不生成页面、不进导航与 sidebar、不入本地搜索索引，仅在仓库内查阅。
> 导航只保留一个入口；章节之间的嵌套关系由 `sidebar.ts` 中 `/fresh-moves-wiki/` 分区维护，正文页面本身不承担导航职责。

## 来源

| 项目 | 内容 |
| --- | --- |
| 仓库 | [IthanMendoza/Fresh-Moves](https://github.com/IthanMendoza/Fresh-Moves) |
| Wiki 首页 | <https://github.com/IthanMendoza/Fresh-Moves/wiki/Home> |
| 页面标题 | Home · IthanMendoza/Fresh-Moves Wiki |
| Wiki 最后修改 | 2024-05-01 |
| 抓取时间 | 2026-11-11 |
| 采集范围 | 仅 **Home** 章节（Wiki 共有 16 个页面） |

该项目是一个 Minecraft 资源包（resource pack），为玩家实体提供基于 [Fresh Animations](https://www.curseforge.com/minecraft/texture-packs/fresh-animations) 的增强动画，其 Wiki 主要讲解如何在皮肤上「加像素」来做出动态眼睛。

## 目录结构

```
internal/
└─ fresh-moves-wiki.md   本文件：仓库内文档，不参与站点构建

docs/                    VitePress srcDir
├─ fresh-moves-wiki/
│  └─ Home.md            Wiki「Home」章节正文（导航入口）
└─ public/               静态资源，构建时原样复制
   └─ assets/            媒体文件独立目录，按原始章节分类
      └─ how-to-animate-the-eyes/
         └─ 2024-04-13_21-48-41.mp4
```

## 媒体文件约定

1. 所有媒体统一收在 `docs/public/assets/` 下（VitePress 的 public 目录，构建时原样复制到产物根目录、不参与哈希），不与正文 md 同级散放。
2. 按**原始文档中媒体所属的章节**建子目录，目录名取该章节锚点的 kebab-case 形式。例如 Home 页面的演示视频出现在「How to animate the eyes」一节，即存放于 `docs/public/assets/how-to-animate-the-eyes/`。
3. 正文用站点根路径引用：`/assets/<section-slug>/<filename>`；Vite 会自动拼接部署 base（当前为 `/blog/`）。
4. 后续抓取其它页面时沿用同一规则（`assets/<section-slug>/`）；若多页同名媒体冲突，再在章节目录内补页面前缀。

## Home 章节速览

1. **About Fresh Moves** — 资源包定位与本站用途：教你在 Expressive / Just Expressions 版本上添加动画眼睛。
2. **Fixes** — 黑眼睛（Black Eyes）、第一人称手部移动两个已知问题的修复指引。
3. **How to animate the eyes** — 五步流程：取皮肤 → 用支持透明通道的 .png 编辑器 → 按眼睛类型加像素 → 保存并重新上传皮肤 → 生效。

## Wiki 其余页面（本次未采集）

- Fix-Black-Eyes
- Fix-Moving-1st-Person-Hand
- 1x1-Simple-Eyes / 1x2-Simple-Eyes / 1x3-Simple-Eyes
- 2x1-Eyes / 2x1-Derp-Eyes / 2x2-Eyes / 2x3-Eyes
- 3x1-Enderman-Eyes
- Eyebrows / Eyebrow-(Villager) / Eyebrows-in-the-2nd-Layer
- Eyelashes-(2x2-Eyes)
- WIP-2x1-Fox-Eyes

新增页面时，需在 `.vitepress/customConfig/nav.ts` 及 `.vitepress/customConfig/sidebar.ts` 中补充对应条目。

## 转换说明

- 源页面由 GitHub Wiki（Gollum）在服务端渲染为 HTML，此处抽取正文并还原为等价的 GFM Markdown：保留原有一级标题、有序/无序列表、链接与粗体标记。
- 页面中上传的视频附件在 GitHub 以签名 URL 提供，已下载为本地文件并移入 `docs/public/assets/`，Markdown 内改用站点根路径引用，并标注原始地址以便溯源。
- 正文中 `recomend`（原文笔误）、`'Expressive'`、`'Just Expressions'` 等写法按原文保留，未作润色。
- 原文以 h1 小标题划分章节，而 VitePress 的文章目录（右侧 aside）只抽取 h2/h3，因此 `Home.md` 以 `outline: false` 关闭右侧目录，章节导航统一由 `sidebar.ts` 的 `/fresh-moves-wiki/` 分区承担；后续若迁移使用 h2 分节的页面，可去掉该项恢复右侧目录。
