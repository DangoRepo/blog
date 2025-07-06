---
layout: doc
title: Markdown 段落与换行
---
# Markdown 段落与换行

## Markdown 段落语法 {#paragraphs}

要创建段落，请使用空白行将一行或多行文本进行分隔。

<DemoBlock :list="[
  'I\'m using Markdown to format my documents.\n\nIt\'s really convenient.',
]" />

----

:::warning 注意
虽然你可能习惯了在传统文字编辑器上使用 Space 或 Tab 缩进来区分段落，但很不幸，上述两种方法在 Markdown 上均无效。请 **尤其注意** 不要在段落开头使用 Space 或 Tab 来表示段落，这会导致一些意料之外的排版问题。比如使用 Markdown 输入以下内容（`&nbsp;` 为空格）：

<DemoBlock :list="[
  '    如果你使用空格在 Markdown 中来区分段落，则会产生这种问题。',
]" />


可以从示例对应的 HTML 代码中看到，由于段落开头的四个空格，这段文本被当作了 **代码块**（`<pre><code></code></pre>`）处理。关于代码块，你现在不需要了解，这在后面的章节中会讲到。
:::

## Markdown 换行语法 {#line-breaks}

Markdown 有以下几种语法格式来实现换行：
1. 在一行的末尾添加两个或两个以上的换行（在 HTML 中处理为 `<br>`）。
2. 在一行的末尾添加两个或两个以上的空格，随后键入一次换行。
3. 在一行的末尾添加一个反斜杠 `\`，随后键入一次换行。

:::tip
因为直接使用空格效果不足够明显，在本篇以及后续的教程中，我会使用 `·` 来代替一个空格。
:::

<DemoBlock :list="[
  'First line\n\nSecond line',
  'First line  \nSecond line',
  'First line\\\nSecond line'
]" />

但需要注意的是，在诸如 VSCode 等编辑器中，由于编辑器的设置，行尾的空格可能会被自动删除，导致方法 2 中的换行无法生效，所以如果你不想更改这个设置，我还是建议你使用其他的换行方式。

### 换行语法的注意点

1. 换行语法不能在行间代码块中使用：

<DemoBlock :list="[
  '`code<br>span`',
  '`code  <br>span`'
]" />

2. 换行语法不能在 HTML 标签中使用。不过准确来说这应该属于 HTML 语法的规则：

|      Markdown 语法    |         预览效果       |
|:--------------------- |:------------------------|
| `<a href="code\`<br>`span">` | 无效语法 |
| `<a href="code&nbsp;&nbsp;`<br>`span">` | 无效语法 |

3. 无论使用哪种换行，换行语法后都应该至少接一个新的行，否则换行语法会被当作普通文本处理：

<DemoBlock :list="[
  'foo\\',
  'foo  ',
  '###foo\\',
  '###foo  '
]" />

:::details 补充
4. GitHub 在支持以上全部语法的前提下，为了照顾部分不熟悉或不适应 Markdown "双换行"的换行方式的用户，自行拓展了另外一种换行方式，GitHub 的文档称之为“软换行”。它与前面所说的方法 1 相似，但区别是 GitHub 的这个扩展语法仅需在行尾使用一次换行即可，就像平时在 Word 或者记事本中换行一样。
:::

