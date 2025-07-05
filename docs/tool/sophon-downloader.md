---
layout: doc
title: Sophon Downloader
---
# Sophon Downloader

----

::: tip 查看该项目
[SophonDownloader](https://github.com/DangoRepo/SophonDownloader)
:::

**Sophon Downloader** 是一个用于下载米哈游游戏资源的纯命令行工具。

目前工具支持所有使用 Sophon 形式进行下载的米哈游游戏（如原神、崩坏：星穹铁道、绝区零），并且支持预下载资源的获取。

## 下载与安装

### 使用已构建好的版本

- [最新的自动构建版本可在此处获取](https://github.com/DangoRepo/SophonDownloader/actions/runs/15238891076/artifacts/3193178790)

### 从源代码构建

构建需用到 .NET 9.0 或更高版本，如你已安装 .NET 但不确定安装的具体是什么版本，可在命令行中输入 `dotnet --version` 以查看版本。

1. **克隆仓库**

    - 使用 SSH 拉取：

    ```bash
    git clone git@github.com:DangoRepo/SophonDownloader.git
    ```

    - 使用 HTTPS 拉取：

    ```bash
    git clone https://github.com/DangoRepo/SophonDownloader.git
    ```

2. **构建应用**

克隆仓库后，在 `Sophon.Downloader` 目录内打开命令行，并运行以下命令：

```bash
dotnet build Sophon.Downloader.sln -c Release
```

构建后的应用位于 `Sophon.Downloader/Core/bin/Release/netx.x` 目录内。

## 用法

### 下载全部资源

```bash
Sophon.Downloader full <gameId> <package> <version> <outputDir> [options]
```

### 仅下载更新资源

```bash
Sophon.Downloader update <gameId> <package> <updateFrom> <updateTo> <outputDir> [options]
```

### 必填字段

```
<gameId>        游戏 ID，hoyo id（hk4e、hkrpg、nap、bh3）
                或 REL id（gopR6Cufr3，...）
<package>       下载什么，“game” 对应游戏本体，
                “zh-cn”、“en-us”、“ja-jp” 或 “ko-kr” 对应四国语音
<version>       想要下载的对应游戏版本
<updateFrom>    更新前游戏版本
<updateTo>      更新后游戏版本
<outputDir>     输出文件夹，如输入的目录不存在则会自动创建对应目录
```

### 附加字段

```
--region=<value>            使用的区域，OSREL（海外）或 CNREL（中国），默认为 OSREL
--branch=<value>            覆写游戏数据的 branch name，预下载须指定为 predownload
--launcherId=<value>        覆写获取包体数据时使用的 launcherId 值
--platApp=<value>           覆写获取包体数据时使用的 platApp 值
--threads=<value>           线程数，默认与 CPU 线程数相等
--handles=<value>           HTTP 句柄数，默认为 128
--silent                    抑制确认消息和输出
-h, --help                  显示指令帮助
```

## 游戏 ID 对照表

| 游戏名称 | ID | 国服 gameId | 国际服 gameId |
| :-: | :-: | :-: | :-: |
| 崩坏3 | bh3 | **osvnlOc0S8** | **5TIVvvcwtM** |
| 原神 | hk4e | **1Z8W5NHUQb** | **gopR6Cufr3** |
| 崩坏：星穹铁道 | hkrpg | **64kMb5iAWu** | **4ziysqXOQ8** |
| 绝区零 | nap | **x6znKlJ0xK** | **U5hbdsT9W7** |
