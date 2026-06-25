---
title: tsc
tags:
  - nodejs
  - javascript
  - typescript
  - compiler
description: tsc のコマンドラインオプションについて
---

```bash
# main.tsをmain.jsにコンパイルする
tsc main.ts
# main.jsを実行する
node main.js
```

## Hello World

```typescript
// main.ts
const message: string = "Hello, World!";
console.log(message);
```

```bash
tsc main.ts
node main.js
# Hello, World!
```

## See also

- [nvm](/cmds/nvm)
