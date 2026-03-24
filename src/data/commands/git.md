---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: git
draft: false
tags:
  - vcs
description: git のコマンドラインオプションについて
---

```bash
# リモートリポジトリから最新の変更を取得する
git fetch
# 特定のタグにチェックアウトする
git checkout llvmorg-21.1.7
# origin/main の位置でローカルに main ブランチを作成して移動する
git checkout -B main origin/main
# 変更を一時的に退避する
git stash
# リモートのブランチを削除する
git push origin --delete {branch_name}
# 現在のブランチに origin/main を取り込む
git pull origin main
# 現在のブランチを origin/main にリセットする
git reset --hard origin/main
# 1つ前のコミットを取り消す
git reset --soft HEAD~1
```

`git switch`

```bash
# リモートのブランチをローカルに作成して移動する
# リモートに指定した名称のブランチが存在しない場合はエラーになる
git switch --track origin/{branch_name}
# 新しいブランチを作成して移動する
git switch -c {branch_name}
```

`git branch`

```bash
# ローカルのブランチを削除する
# ブランチにマージされていない変更がある場合はエラーになる
git branch -d {branch_name}
# ローカルのブランチを強制的に削除する
git branch -D {branch_name}
```

`git config`

```bash
# 全ての設定を表示する
git config --list
# 名前とメールアドレスの設定を確認する
git config user.name
git config user.email
# 名前とメールアドレスをグローバル(~/.gitconfig)に設定する
git config --global user.name "HARADA Taiki"
git config --global user.email "email@example.com"
```

## `.git` directory

- `.git/config`: リポジトリ単位の設定ファイル
- `.git/info/exclude`: ローカルのみで無視するファイルを設定するファイル
