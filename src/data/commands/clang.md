---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: clang
draft: false
tags:
  - compiler
  - llvm
description: clang のコマンドラインオプションについて
---

```bash
# C言語のソースコードをLLVM IRにコンパイルする
clang -emit-llvm -S test.c -o test.ll
# c23でコンパイルする
clang -std=c23 main.c
# サポートしているターゲットの一覧を表示する
clang --print-targets
# デフォルトのtarget-tripleを表示する
clang --print-target-triple
```

## See also

- [Clang Compiler User's Manual](https://clang.llvm.org/docs/UsersManual.html)
- [Clang command line argument reference](https://clang.llvm.org/docs/ClangCommandLineReference.html)
- [Clang Language Extensions](https://clang.llvm.org/docs/LanguageExtensions.html)
- [opt](/posts/opt)
