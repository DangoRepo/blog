---
layout: doc
title: Markdown 引用语法
---
# Markdown 引用语法

----

一个块引用标记由 0~3 个空格的初始缩进、一个 `>` 符号与紧随其后的一个空格构成。

[**Example 13**](./block-quotes.md#eg13) {#eg13}

<DemoBlock :list="[
  '> Quote',
]" />

块引用具有如下特点：

1. 连贯性：如果一连串单行的块引用 L 组成了一个序列 S，那么这时候的结果就是单个包含 S 的块引用。
2. 懒惰性：如果一连串单行的块引用 L 组成了一个序列 S，那么从某一行（首行除外）甚至多行的行首删除引用标记不会影响这个块引用的最终渲染结果。
3. 顺序性：同一行内不能同时使用两个引用标记。

## 用法

以下是块引用的标准用法：

[**Example 14**](./block-quotes.md#eg14) {#eg14}

<DemoBlock :list="[
  '> Quote Example',
]" />

----

`>` 符号后的空格可以省略，不影响最终渲染的结果：

[**Example 15**](./block-quotes.md#eg15) {#eg15}

<DemoBlock :list="[
  '>Quote Example',
]" />

----

块引用的内容可以为空白内容：

[**Example 16**](./block-quotes.md#eg16) {#eg16}

<DemoBlock :list="[
  '>',
  '>\n>\n',
]" />

----

若要分隔块引用，可以使用[段落语法][p:para-eg2]将两个块引用分隔开：

<DemoBlock :list="[
  '> foo\n\n> bar',
]" />

同理，如果要在一个块引用中分两个段落，则只需要在段落语法的基础上，每行起始添加一个段落的符号即可。

<DemoBlock :list="[
  '> Quote 1\n>\n> Quote 2',
]" />

----

### 懒惰性的具体用法

基于块引用的懒惰性，对于一连串单行的块引用序列，从第二行开始，`>` 符号都可以省略，但唯独不能删除第一行的 `>` 符号，否则无法构成块引用：

[**Example 17**](./block-quotes.md#eg17) {#eg17}

<DemoBlock :list="[
  '> Quote 1\nQuote 2\nQuote 3',
]" />

这种省略有一定局限性，详见 [注意事项][p:cautions]。

----

### 关于缩进

`>` 符号前最多可以支持 1~3 个空格的缩进，不影响最终渲染的结果：

[**Example 18**](./block-quotes.md#eg18) {#eg18}

<DemoBlock :list="[
  '> Quote 1\n  > Quote 2\n',
]" />

但如果使用了超过 4 个空格的缩进，则会变成代码块：

[**Example 19**](./block-quotes.md#eg19) {#eg19}

<DemoBlock :list="[
  '    > Quote 1\n    > Quote 2',
]" />

----

### 分隔不同的块引用

若要另起一个块引用，需要在块引用之间使用回车隔开一行：

[**Example 20**](./block-quotes.md#eg20) {#eg20}

<DemoBlock :list="[
  '> Quote 1\n\n> Quote 2',
]" />


## 注意事项 {#cautions}

1. 在 [**Example 17**][p:eg17] 中，我们提到了引用符号在某些情况下可以省略，但这种省略仅限于那些本来就应该视作是段落的延续的行，比如在下列示例中：

```markdown
> foo
> ---
```

在不改变原有意思的情况下，第二行的 `>` 就不能省略：

[**Example 21**](./block-quotes.md#eg21) {#eg21}

<DemoBlock :list="[
  '> foo\n---',
]" />

相似地，还有以下不能省略的情况：

[**Example 22**](./block-quotes.md#eg22) {#eg22}

<DemoBlock :list="[
  '> - foo\n- bar',
]" />

[**Example 23**](./block-quotes.md#eg23) {#eg23}

<DemoBlock :list="[
  '> ```\nfoo\n```',
]" />

在 Example 22、23 中，省略第二行及后续行的引用标记会导致引用在第一行结束。

[p:para-eg2]: ./para-and-line-breaks.md#eg2
[p:cautions]: block-quotes.md#cautions
[p:eg17]: block-quotes.md#eg17
