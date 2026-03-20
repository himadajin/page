---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: opt
draft: false
tags:
  - compiler
  - llvm
description: opt のコマンドラインオプションについて
---

```bash
# 登録された最適化パスの一覧を表示する
opt --print-passes
# mem2regパスを適用する
opt -passes="mem2reg" -S input.ll -o output.ll
```

## See also

- [opt - LLVM optimizer](https://llvm.org/docs/CommandGuide/opt.html)
- [clang](/posts/clang)
