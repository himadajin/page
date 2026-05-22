---
author: himadajin
pubDatetime: 2026-05-01T00:00:00Z
title: uv
draft: false
tags:
  - build-system
  - python
description: uv のコマンドラインオプションについて
---

```bash
# 利用可能なPythonを列挙する
uv python list
# インストール済みのPythonを列挙する
uv python list --only-installed
# Pythonをインストールする
uv python install 3.14
# 既存プロジェクトのPythonのバージョンを切り替える
uv python pin 3.14
```

```bash
# カレントディレクトリにプロジェクトを作成する
uv init
# 新規プロジェクトを作成する
uv init {project-name}
# Pythonのバージョンを指定してプロジェクトを作成する
uv init {project-name} --python 3.12
```
