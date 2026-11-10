# Fresh-Moves Wiki 采集

从 GitHub Wiki 完整抓取的项目文档（16/16 页），现作为「**教程 → Fresh Moves Wiki**」的一个跳转入口挂在站点导航下，页面内自带 sidebar 目录。

> 本文件放在仓库的 `internal/` 下，位于 VitePress 的 `srcDir`（`docs/`）之外，因此**不参与站点构建**：不生成页面、不进导航与 sidebar、不入本地搜索索引，仅在仓库内查阅。
> 导航只保留一个入口；`sidebar.ts` 中 `/fresh-moves-wiki/` 分区与原始 Wiki 的页面列表一一对应——**顺序与显示名照搬 GitHub「Pages」列表，不做人工归类**。

## 来源

| 项目 | 内容 |
| --- | --- |
| 仓库 | [IthanMendoza/Fresh-Moves](https://github.com/IthanMendoza/Fresh-Moves) |
| Wiki 首页 | <https://github.com/IthanMendoza/Fresh-Moves/wiki/Home> |
| 页面标题 | Home · IthanMendoza/Fresh-Moves Wiki |
| 页面最后修改 | 2024-05-01 ~ 2024-05-04（逐页记录在 front matter） |
| 抓取时间 | 2026-11-11 |
| 采集范围 | **全部 16 个页面**（Home + 15 个子页面） |

该项目是一个 Minecraft 资源包（resource pack），为玩家实体提供基于 [Fresh Animations](https://www.curseforge.com/minecraft/texture-packs/fresh-animations) 的增强动画，其 Wiki 主要讲解如何在皮肤上「加像素」来做出动态眼睛。

## 目录结构

```
internal/
└─ fresh-moves-wiki.md   本文件：仓库内文档，不参与站点构建

docs/                    VitePress srcDir
├─ fresh-moves-wiki/     16 个页面，一页一文件（文件名统一 kebab-case）
│  ├─ home.md
│  ├─ fix-black-eyes.md
│  ├─ fix-moving-1st-person-hand.md
│  ├─ 1x1-simple-eyes.md … 3x1-enderman-eyes.md
│  ├─ eyebrow-villager.md / eyebrows.md / eyebrows-in-the-2nd-layer.md / eyelashes-2x2-eyes.md
│  └─ wip-2x1-fox-eyes-they-are-missplaced-in-v3-0-1.md
└─ public/
   └─ assets/            媒体文件独立目录，按章节分类（17 个子目录 / 37 个文件 / 约 11 MB）
      ├─ how-to-animate-the-eyes/            Home 页内小节
      ├─ fix-black-eyes/  fix-moving-1st-person-hand/
      ├─ 1x1-simple-eyes/ … 3x1-enderman-eyes/
      ├─ eyebrow-villager/  eyebrows/  eyebrows-in-the-2nd-layer/  eyelashes-2x2-eyes/
      └─ wip-2x1-fox-eyes-they-are-missplaced-in-v3-0-1/
```

## 命名约定

- **页面文件名：kebab-case**（全小写，单词间与原来的空格、括号统一转成连字符）。例如 `Eyebrow-(Villager).md` → `eyebrow-villager.md`、`WIP-2x1-Fox-Eyes-(They-are-missplaced-in-v3.0.1).md` → `wip-2x1-fox-eyes-they-are-missplaced-in-v3-0-1.md`。
- 文件名与 `docs/public/assets/` 下对应章节目录名保持一致（如 `fix-black-eyes.md` ↔ `assets/fix-black-eyes/`），正文里的资源路径因此不会随改名而失效。
- front matter 的 `title` / `source` 仍保留原始 Wiki 页面名，便于回溯 GitHub 原文。

## 媒体文件约定

1. 所有媒体统一收在 `docs/public/assets/` 下（VitePress 的 public 目录，构建时原样复制到产物根目录、不参与哈希），不与正文 md 同级散放。
2. 按**原始文档中媒体所属的章节**建子目录，目录名取章节锚点的 kebab-case 形式；若整个页面没有内部小节，则取**页面名**的 slug（如 `fix-black-eyes/`、`eyebrows-in-the-2nd-layer/`）。
3. 正文用站点根路径引用：`/assets/<section-slug>/<filename>`；Vite 会自动拼接部署 base（当前为 `/blog/`）。
4. 文件命名：**语义化 kebab-case**。图片取正文中紧邻图注的关键词（如 `Bottom Exterior 1x1 Eyelids` → `bottom-exterior-1x1-eyelids.png`）；无图注时取所在段落的描述（如 `eyelashes-for-bottom-2x2-eyes.png`）；视频取页面动作描述（如 `fix-black-eyes-process.mp4`）。附件原名与现名的对照见下节清单。

## 媒体文件清单（附件原名 → 语义化现名）

改名只调整文件名，内容与所属目录不变；下表保留与 GitHub 附件的对应关系（图片 UUID、视频原始文件名），便于回溯。

| 所在目录 | 原文件名 | 现文件名 |
| --- | --- | --- |
| `assets/1x1-simple-eyes/` | `68597ecd-f8c4-4050-91dc-a4d136d70374.png` | `bottom-exterior-1x1-eyelids.png` |
| `assets/1x1-simple-eyes/` | `8c2d27af-05fc-461b-87a9-525e0ed8acab.png` | `top-exterior-1x1-eyelids.png` |
| `assets/1x1-simple-eyes/` | `f9ef0373-827f-4bd5-9828-7031fc7cb131.png` | `bottom-interior-1x1-eyelids.png` |
| `assets/1x1-simple-eyes/` | `d0ad3535-9f83-4b6b-bcf9-86eb09267731.png` | `top-interior-1x1-eyelids.png` |
| `assets/1x2-simple-eyes/` | `3f0f6336-2de0-42bc-b7d0-6e822d14fac1.png` | `bottom-1x2-simple-eyes.png` |
| `assets/1x2-simple-eyes/` | `6b4ae691-edc3-4f67-9777-0087cecf6d68.png` | `top-1x2-simple-eyes.png` |
| `assets/1x3-simple-eyes/` | `fb001c71-d8ae-4050-a937-35b6211008d0.png` | `bottom-1x3-simple-eyelids.png` |
| `assets/1x3-simple-eyes/` | `c1d157c9-7571-4cff-bcba-d28cbec2b81a.png` | `top-1x3-simple-eyelids.png` |
| `assets/2x1-derp-eyes/` | `ef6aa461-83ca-4eb6-b093-d03c29661289.png` | `bottom-2x1-derp-eyes.png` |
| `assets/2x1-derp-eyes/` | `446ba750-bdfb-4c8e-a9e7-65a324159b0d.png` | `lower-mid-2x1-derp-eyes.png` |
| `assets/2x1-derp-eyes/` | `e3a052cc-52b2-45bd-98bf-7cc050ebab59.png` | `upper-mid-2x1-derp-eyes.png` |
| `assets/2x1-derp-eyes/` | `b7d3f637-401c-444d-8996-dcbb5aeac9f4.png` | `top-2x1-derp-eyes.png` |
| `assets/2x1-eyes/` | `fbdfc803-0bd7-43c5-a4fe-8dc9dd516da5.png` | `bottom-2x1-eyes.png` |
| `assets/2x1-eyes/` | `34cfcea0-923c-4823-b4cf-444c45f0cb61.png` | `lower-mid-2x1-eyes.png` |
| `assets/2x1-eyes/` | `8871d746-b3a4-41e9-b511-a5dcad9fdf05.png` | `upper-mid-2x1-eyes.png` |
| `assets/2x1-eyes/` | `7efaea7d-2580-4068-9a40-450af15d0744.png` | `top-2x1-eyes.png` |
| `assets/2x2-eyes/` | `2b610bb7-d9f0-4df7-a3aa-e893842a1bb4.png` | `bottom-2x2-eyes.png` |
| `assets/2x2-eyes/` | `ccc13b35-64b7-4b39-bc60-0d9bb703931c.png` | `lower-mid-2x2-eyes.png` |
| `assets/2x2-eyes/` | `56ce5f4d-db3b-47dd-bb01-a77dea432515.png` | `upper-mid-2x2-eyes.png` |
| `assets/2x2-eyes/` | `460204f4-3bf2-4a20-8a59-32ef4c3fc8db.png` | `top-2x2-eyes.png` |
| `assets/2x3-eyes/` | `50a622bc-0542-4ba7-bba3-3fd6245d5bcf.png` | `2x3-eyes.png` |
| `assets/3x1-enderman-eyes/` | `37ccfab0-4613-4092-88c1-ba49a8e13ebc.png` | `bottom-3x1-enderman-eyes.png` |
| `assets/3x1-enderman-eyes/` | `056293d2-8fd6-434c-b7c1-a4955e22dcf2.png` | `top-3x1-enderman-eyes.png` |
| `assets/eyebrow-villager/` | `fb19b04c-4aea-4715-aa4d-e3ccddb1c9b9.png` | `villager-eyebrow-with-upper-mid-2x1-eyes.png` |
| `assets/eyebrows/` | `9037f6a6-cfd9-4b81-b9bb-10612af6f7d1.png` | `bottom-eyebrows-with-bottom-2x1-eyes.png` |
| `assets/eyebrows/` | `c33af994-7353-4fb1-8d7b-89ff6c965638.png` | `lower-mid-eyebrows-with-bottom-2x2-eyes.png` |
| `assets/eyebrows/` | `5aedb7e5-5039-4d9b-ad48-6c40de326426.png` | `upper-mid-eyebrows-with-upper-mid-2x3-eyes.png` |
| `assets/eyebrows/` | `7a666554-dd28-436d-ab44-9d968fd373ef.png` | `top-eyebrows-with-top-2x1-derp-eyes.png` |
| `assets/eyebrows-in-the-2nd-layer/` | `b49a2abf-2cfc-45d9-8559-cbc4fabf5731.png` | `bottom-2nd-layer-eyebrows-with-bottom-2x1-eyes.png` |
| `assets/eyebrows-in-the-2nd-layer/` | `8f5b7a5e-2683-4b6c-bacc-9c4e13bd771a.png` | `lower-mid-2nd-layer-eyebrows-with-bottom-2x2-eyes.png` |
| `assets/eyebrows-in-the-2nd-layer/` | `0e8f89c8-c700-4990-a013-43a4bf6631e4.png` | `upper-mid-2nd-layer-eyebrows-with-3x2-eyes.png` |
| `assets/eyebrows-in-the-2nd-layer/` | `d0a40e1e-2338-4c78-8eb9-8c42f32418a3.png` | `top-2nd-layer-eyebrows-with-top-2x1-eyes.png` |
| `assets/eyelashes-2x2-eyes/` | `19886d2d-6d4f-4074-bac0-a9f1f89b238d.png` | `eyelashes-for-bottom-2x2-eyes.png` |
| `assets/wip-2x1-fox-eyes-they-are-missplaced-in-v3-0-1/` | `6ec897b0-d2f0-49a4-aea0-ab9ead269bc6.png` | `grey-part-prevents-eyebrow-duplication.png` |
| `assets/fix-black-eyes/` | `da7b0d30-3b6e-4685-a171-df984af19ab5.mp4` | `fix-black-eyes-process.mp4` |
| `assets/fix-moving-1st-person-hand/` | `aa6d00be-9e16-4c4f-bd90-7280bb3b4beb.mp4` | `fix-1st-person-hand-process.mp4` |
| `assets/how-to-animate-the-eyes/` | `2024-04-13_21-48-41.mp4` | `modify-skin-2x1-eyes-process.mp4` |

## 页面清单

顺序与 Wiki「Pages」列表一致（字母序，Home 置顶）：

| # | 页面（Wiki 显示名） | 内容 |
| --- | --- | --- |
| 1 | Home | 概览、修复入口、加眼睛五步流程 |
| 2 | 1x1 Simple Eyes | 无瞳孔、眨眼 |
| 3 | 1x2 Simple Eyes | 无瞳孔、眨眼 |
| 4 | 1x3 Simple Eyes | 无瞳孔、眨眼 |
| 5 | 2x1 Derp Eyes | 2x1 的瞳孔位置变体 |
| 6 | 2x1 Eyes | 带瞳孔 |
| 7 | 2x2 Eyes | 带瞳孔 |
| 8 | 2x3 Eyes | 带瞳孔 |
| 9 | 3x1 Enderman Eyes | 末影人眼睛 |
| 10 | Eyebrow (Villager) | 村民眉毛，需与眼睛组合 |
| 11 | Eyebrows | 眉毛，需与眼睛组合 |
| 12 | Eyebrows in the 2nd Layer | 画在第二层（帽子层）的眉毛 |
| 13 | Eyelashes (2x2 Eyes) | 睫毛，配合 Bottom 2x2 Eyes |
| 14 | Fix Black Eyes | EMF/ETF 更新 + 允许皮肤透明 |
| 15 | Fix Moving 1st Person Hand | 关闭第一人称手部动画 |
| 16 | WIP 2x1 Fox Eyes (They are missplaced in v3.0.1) | 未完成，v3.0.1 中眉毛位置有误 |

## 转换说明

- 源页面由 GitHub Wiki（Gollum）在服务端渲染为 HTML；本仓库的做法是从 `#wiki-body .markdown-body` 抽取正文，再还原为等价的 GFM Markdown（标题层级、有序/无序列表、粗体、链接、图片、内嵌视频）。
- **GitHub 附件是签名 URL**（`private-user-images.githubusercontent.com`，带 JWT 且有时效），因此一律下载为本地文件而不是外链；视频在正文里写成 `<video controls muted src="/assets/…">`，并附原始上传地址 `https://github.com/IthanMendoza/Fresh-Moves/assets/127630637/<uuid>` 以便溯源。
- **图片 alt 置空**：源页面图片的 alt 都是 GitHub 上传时自动生成的 `image`，站点又启用了 `@mdit/plugin-figure`，保留该 alt 会让每张图多出一行「image」图注，故转为 `![](...)`。
- **MDC 冒号陷阱**：站点启用 `markdown-it-mdc`，正文里的 `:v`（Eyebrow (Villager) 页）会被解析成内联组件 `<v>` 并导致 Vue 编译失败，因此该处转义为 `\:v`；后续转换需留意「空格 + 冒号 + 字母」的组合。
- 正文语言、拼写（如 `recomend`、`missplaced`）按原文保留，未作翻译或润色。
- 原文用 h1/h2 组织章节而 VitePress 右侧目录只抽取 h2/h3，故各页 front matter 统一加 `outline: false`，页内导航由 sidebar 承担。
