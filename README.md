# page

## Development Environment

- Node.js: `24.13`
- pnpm: `10.11`
- Astro: `6.0.3`
- Wrangler: `4.75.0`

## Setup

```bash
corepack enable
corepack pnpm install
```

## Commands

```bash
corepack pnpm run dev
corepack pnpm run build
corepack pnpm run preview
corepack pnpm run cf:preview
corepack pnpm run cf:deploy
corepack pnpm run lint
corepack pnpm run format:check
corepack pnpm run format
corepack pnpm run sync
```

## Cloudflare Workers

This project is configured for Cloudflare Workers static assets deployment.

1. Authenticate once:

```bash
corepack pnpm exec wrangler login
```

2. Preview the Cloudflare deployment locally:

```bash
corepack pnpm run cf:preview
```

3. Deploy to Cloudflare Workers:

```bash
corepack pnpm run cf:deploy
```

`wrangler.jsonc` uses `assets.directory: "./dist"` and `not_found_handling: "404-page"` so Astro's `src/pages/404.astro` is served as the custom 404 page on Workers.
