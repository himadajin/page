---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: npm
draft: false
tags:
  - build-system
  - nodejs
  - javascript
  - typescript
description: npm のコマンドラインオプションについて
---

```bash
# 依存関係を完全に再構築する
rm -rf node_modules package-lock.json
npm install
```

```bash
# 対話形式でViteプロジェクトを作成する
npm create vite@latest
# 開発サーバーを起動する
# (package.jsonで定義した"dev"を実行する)
npm run dev
```
