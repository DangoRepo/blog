---
layout: doc
title: Markdown 入门基础
---
# Markdown 入门基础

## Markdown 是什么 {#what-is-markdown}

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已经成为世界上最受欢迎的标记语言之一。其优势在于：

1. 能够专注于文字内容，而不是浪费大量时间用于排版；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，学习成本低，能够在轻松码字的同时做出美观的基础排版。

使用 Markdown 与使用 Word 类编辑器不同。在 Word 之类的应用程序中，可以通过单击按钮以设置单词和短语的格式，并且，更改是即时且可视化的。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，文本的格式是由特定的 Markdown 语法控制的，以指示哪些单词和短语看起来应该有所不同。

例如，要表示一个标题,只需要在文本前添加一个井号即可（例如，`# Heading One`）。或者要加粗一个词语，只需要在短语前后各加两个星号即可（例如，`**this text is bold**`）。对于 Markdown 的初学者，尤其是已经习惯了所见即所得的文本编辑器的学习者而言，接受并习惯这种所见非所得的语言需要一段时间的适应。下图展示了 Markdown 文件在 **Visual Studio Code** 中显示的效果。

![Markdown 在 VSCode 中的显示效果][img:markdown-in-vscode]

你可以使用任何你熟知的文本编辑器为纯文本文件添加 Markdown 格式的元素。或者，你可以可以安装针对你的操作系统的 Markdown 应用程序；或者还可以使用一些基于 Web 的应用程序用于 Markdown 编写。

取决于你所使用的应用程序，你可能无法实时预览格式化的文档，但是没关系，Markdown 的语法可读性强且不显眼，因此即使不经过渲染，Markdown 中的文本也易于阅读。

> Markdown 语法的首要设计目标是尽可能易读。基于这个目标，Markdown 格式的文档能以纯文本的方式发布，而无需担心如 HTML 等语言充满了标签和格式化指令。

## Markdown 的优点在哪里 {#pros-of-markdown}

你可能会问，我既然有 Word 这种一键就能设置文本格式的文本编辑软件，我有什么必要学习这个不是所见即所得的 Markdown 呢？使用 Markdown 而不是 Word 类编辑器的原因主要有：

- Markdown 无处不在。StackOverflow、CSDN、GitBook、有道云笔记等都支持使用 Markdown 来书写内容。主流的代码托管平台如 GitHub、GitLab、Gitee 等也都支持 Markdown 语法。在这些平台上，你几乎看不到诸如 .doc 文件或其他 Word 类编辑器书写的文件的身影。更甚者，如果你要在代码托管平台上为你的开源项目书写一个 README，那你几乎不得不使用 Markdown 格式来书写。

- Markdown 是纯文本可移植的。你几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不想使用当前正在使用的这个 Markdown 应用程序，你完全可以使用其他 Markdown 应用程序来打开这个文件。而这就和 Microsoft Word 等文字处理应用程序形成了鲜明的对比：.doc 文件在离开了 Microsoft Word 之后则完全无法阅读。

- Markdown 是独立于平台的。无论你使用的是什么设备、运行的是什么操作系统，只要它有处理纯文本文档的能力，那你就可以使用 Markdown 语法来书写。

## Markdown 有什么用 {#where-to-use}

Markdown 是做笔记、为网站创建内容以及生成可打印文档的快速、简便的方法。

学习 Markdown 语法并不需要很长时间，一旦你知道如何使用它，你就可以在几乎所有地方使用 Markdown 进行书写了。大多数人使用 Markdown 来为网站创建内容，但是 Markdown 也可以很好地格式化从电子邮件到购物清单的所有内容。

下面是一些你可以使用 Markdown 的场景。

### 网站

Markdown 是为 Web 而设计的，因此，市面上有很多专门用于创建网站内容的应用程序就不足为奇了。

如果你熟悉 Vue、CSS 和版本管理工具，你可以尝试使用 [VitePress][p:vitepress]，它在支持 Markdown 原生语法的同时，引入了许多新的扩展语法，并且能借助 [GitHub Pages][p:github-pages] 将 Markdown 文件构建为 HTML 网站。

### 文件资料

虽然 Markdown 不具备像 Microsoft Word 这种程序的精美排版或者其他的样式功能，但对于仅需要基本排版的文件来说已经足够了。

以下是一些适合进行 Markdown 文档创作的工具：

- 现代编辑器

  Visual Studio Code / Atom

- 传统编辑器

	Vim / Emacs / Sublime Text / Notepad++

- IDE 自带编辑器

  InteliJ IDEA / WebStorm

- 在线编辑器

  在此不过多列举。

### 邮件

如果你需要发送大量电子邮件，并且对大多数电子邮件提供商网站上可用的格式设置控件感到厌倦，那么你可以试试这种使用 Markdown 编写电子邮件的简便方法：[Markdown Here][p:markdown-here]。它是一个免费、开源的浏览器扩展程序，可将 Markdown 格式的文本转换为可用于发布的 HTML。

### 文档

Markdown 非常适合技术文档。像 GitHub 这样的公司越来越多地转向使用 Markdown 来创建其文档了，比如 GitHub 就写过一篇就如何将 Markdown 格式的文档迁移到 Jekyll 的[文章][p:document-github]。如果你想要编写一个技术文档，可以试试以下几种工具：

- [**Docusaurus**][p:docusaurus] 是一个静态网站生成器，专门用于创建文档网站。它支持翻译、搜索和版本控制。
- [**VuePress**][p:vuepress] 是一个基于 Vue 构建的静态站点生成器，并针对编写技术文档进行了优化。
- [**VitePress**][p:vitepress] 前面已经提到过它了，但它也是将 Markdown 文件生成文档网站的一个不错的选择。本网站也是使用 VitePress 搭建的。

## Markdown 方言 {#markdown-flavors}

使用 Markdown 的过程中，最令人困惑的地方是：实际上每个 Markdown 应用程序都实现了稍有不同的 Markdown 语法。Markdown 的这些变体通常被称为 flavors（方言）。掌握你的应用程序所实现的 Markdown 语法是你需要主义的。

为了让你了解各 Markdown 变体的概念，将它们比作语言的方言（language dialects）可能会有所帮助。虽然上海和北京使用的都是汉语，但是两个城市使用的方言之间有很大的不同。使用不同 Markdown 应用程序的人也是如此。比如同样是 Markdown，Dillinger 支持的 Markdown 格式就可能和 VitePress 有着很大的不同。

实际上，这意味着当一个应用程序说它支持“Markdown”时，你永远也不会确切地知道它的实际意思。它说的是仅支持 [**基本语法**][p:basic-syntax]？还是所有基本语法加 [**扩展语法**][p:adv-syntax]？或者是某些语法的组合呢？在你阅读其文档或开始使用该应用程序之前，你永远都不会知道。

如果你只是新手，我能给你的最好建议就是选择一个具有良好 Markdown 支持的应用程序，至少需要一个完全支持 Markdown 基本语法和泛用性强的扩展语法的应用程序。这对保持 Markdown 文件的可移植性大有帮助。你可能需要在其他应用程序中保存或使用你的 Markdown 文件，要实现这一点，你应当从使用一个具有良好 Markdown 支持的应用程序开始。你可以在 [**Markdown 工具列表**][p:md-tools] 中找到合适的应用程序。

[p:vitepress]: https://vitepress.dev
[p:github-pages]: https://pages.github.com
[p:markdown-here]: https://markdown-here.com
[p:document-github]: https://github.blog/engineeringhow-github-uses-github-to-document-github
[p:docusaurus]: https://www.docusaurus.cn/docs
[p:vuepress]: https://vuepress.vuejs.org
[p:basic-syntax]: /md-tutorial/basic-syntax.md
[p:adv-syntax]: /md-tutorial/adv-syntax.md
[p:md-tools]: /md-tutorial/md-tools.md
[img:markdown-in-vscode]: /imgs/md-tutorial/md-intro/markdown-in-vscode.png
