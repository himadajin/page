---
title: gh
tags:
  - vcs
description: gh のコマンドラインオプションについて
---

```bash
# GitHub にログインする
gh auth login
# 現在のリポジトリのPRの状態を表示する
gh pr status
```

`gh pr`

```bash
# 現在のブランチをpushする
git push -u origin HEAD
# 現在のブランチからPRを下書きで作成する
gh pr create --draft --fill
# 現在のブランチのPRの内容を表示する
gh pr view
# PR番号を指定して内容を表示する
gh pr view 123
# 現在のブランチのPRの差分を表示する
gh pr diff
# 現在のブランチのPRのCIの状態を表示する
gh pr checks
# 現在のブランチのPRのCIの状態を監視する
gh pr checks --watch
```

`conflict`

```bash
# 現在のブランチに origin/main を取り込む
git fetch origin
git merge origin/main
# conflict を修正した後にコミットする
git add .
git commit
git push
```

`merge`

```bash
# 現在のブランチのPRをレビュー可能な状態にする
gh pr ready
# 現在のブランチのPRをsquash mergeしてリモートブランチを削除する
gh pr merge --squash --delete-branch
# squash merge のコミットメッセージを指定する
gh pr merge --squash --delete-branch --subject "docs: add gh command memo" --body ""
```

## See also

- [git](/cmds/git)
