# AGENTS.md

このリポジトリは Astro 製の個人ページです。

## Command

- `npm ci`
- `npm run dev`
- `npm run lint`
- `npm run format:check`
- `npm run build`
```

Cloudflare Workers のローカルでの確認は次を使います。

```bash
npm run cf:preview
```

## 検証

コードや設定を変更した場合は、次の項目を実行してください。

```bash
npm run lint
npm run format:check
npm run build
```

依存関係や Dockerfile を変更した場合は、可能なら Docker build も確認してください。

```bash
docker build -t terrestrial-transit:local .
```
