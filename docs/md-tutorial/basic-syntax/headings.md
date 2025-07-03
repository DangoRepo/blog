---
layout: doc
title: Markdown 标题语法
aside: false
---
# Markdown 标题语法

----

要创建标题，请在单词或短语前面添加井号（#）。# 的数量代表了标题的级别。

比如，添加三个 `#` 表示创建一个三级标题（HTML 中记作 `<h3>`），例如：`### Heading level 3`。

<DemoTable :list="[
  `# Heading level 1`,
  `## Heading level 2`,
  `### Heading level 3`,
  `#### Heading level 4`,
  `##### Heading level 5`,
  `###### Heading level 6`,
]" />

----

::: warning 注意
需要注意的是，不同的 Markdown 应用程序的标题语法可能有所不同。为了兼容考虑，`#` 和标题之间需要用一个空格进行分隔。

|:white_check_mark: 正确用法|    :x: 反面用法   |
|:------------------------:|:-----------------:|
|`# Here's a Heading`      |`#Here's a Heading`|
:::
