---
layout: doc
title: Markdown 段落语法
aside: false
---
# Markdown 段落语法

----

要创建段落，请使用空白行将一行或多行文本进行分隔。

|Markdown 语法|HTML|预览效果|
|:--:|:--:|:--:|
|`I'm using Markdown to format my documents.`<br><br>`It's really convenient.`|`<p>I'm using Markdown to format my documents.</p>`<br>`<p>It's really convenient.</p>`|<p>I'm using Markdown to format my documents.</p><p>It's really convenient.</p>|

----

:::warning 注意
虽然你可能习惯了在传统文字编辑器上使用 Space 或 Tab 缩进来区分段落，但很不幸，上述两种方法在 Markdown 上均无效。请 **尤其注意** 不要在段落开头使用 Space 或 Tab 来表示段落，这会导致一些意料之外的排版问题。比如使用 Markdown 输入以下内容（`&nbsp;` 为空格）：

```markdown
&nbsp;&nbsp;&nbsp;&nbsp;如果你使用空格在 Markdown 中来区分段落，则会产生这种问题。
```

其实际效果为：

    如果你使用空格在 Markdown 中来区分段落，则会产生这种问题。

可以看到，由于段落开头的四个空格，这段文本被当作了 **代码块** 处理。关于代码块，你现在不需要了解，这在后面的章节中会讲到。
:::
