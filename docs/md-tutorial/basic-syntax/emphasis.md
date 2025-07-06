---
layout: doc
title: Markdown 强调语法
---
# Markdown 强调语法

----

通过将文本设置为粗体或斜体来强调其重要性。

## 粗体（Bold） {#bold}

要加粗文本，请在单词或短语的前后各添加两个星号 `*` 或下划线 `_`。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号 `*`。

<DemoBlock :list="[
  'I just love **bold text**.',
  'I just love __bold text__.',
  'Love**is**bold'
]" />

## 斜体（Italic） {#italic}

要用斜体显示文本，请在单词或短语前后添加一个星号 `*` 或下划线 `_`。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

<DemoBlock :list="[
  'Italicized text is the *cat\'s meow*.',
  'Italicized text is the _cat\'s meow_.',
  'Love*is*bold'
]" />

## 强调语法的注意点

1. 虽然强调语法有两种表示方法，但在使用强调语法的时候，请勿将两种语法混合使用。例如，在使用粗体时，使用 `**` 开启强调，使用 `__` 结束强调（例如 `***Bold Italic___`）。这在 Markdown 中被视为无效语法。

2. 不论你使用哪一种语法，请确保强调语法的内容和语法所用的符号本身之间不存在空格。例如，`A ** bold **text` 是无效语法。

3. Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为了兼容性考虑，请统一使用两个星号 `*` 进行加粗。

::usage-table{:list='[["ch**eck**mark", "ch__eck__mark"], ["Love is **bold**.", "Love is __bold."]]' :columns='[{"title": "建议使用"},{"title": "不建议使用"}]'}
::

4. 如果一定要使用下划线形式的强调语法对一个词内的部分文字进行强调，请务必在语法前后使用一个空格将其隔开，否则会被视为无效语法，例如：

<DemoBlock :list="[
  'node_package_manager',
  'node _package_ manager'
]" />

5. 通常情况下，不论你使用的是加粗、斜体、还是加粗&斜体，你左右两侧分隔符的符号数量应当永远是相等的。当分隔符的左右两侧的符号数量不对等时，Markdown 会优先识别较少的相等的部分，并将多余的部分按照普通字符进行处理。比如对于这个文本 `***Bold_Italic*****`，Markdown 会将 Italic 左侧的三个星号作为加粗与斜体的左分隔符，并在右侧的五个星号中仅取前三个星号作为右分隔符，其最终效果会是：***Bold_Italic*****。可以看到 Markdown 将右侧的第 4、5 个星号当作了普通的字符进行处理。

6. 加粗与斜体可以连续使用，甚至可以套用，不过其具体的实现效果依旧按照 4 中的规则而定。下面举一个比较长的例子用以说明，为了方便理解，在这个例子里我不会混合使用两种表示方法。

<DemoBlock :list="[
  '**This is *Markdown***, *and the text in **THIS section** is bolded.*'
]" />

7. 强调语法可以跨行使用，但此时除了不能在一行的末尾添加两个或两个以上的换行来进行换行之外，其余的换行语法均可以使用。例如：

<DemoBlock :list="[
  '**foo\nbar**',
  '**foo\<br>bar**'
]" />

----

关于换行语法的使用，详见[换行语法][p:line-breaks]。

[p:line-breaks]: ./para-and-line-breaks.md#line-breaks
