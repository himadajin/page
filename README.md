# page

## Development Environment

- Node.js: `24.16`
- npm: `11`
- Astro: `7.0.3`
- Wrangler: `4.105.0`

## Setup

```bash
npm ci
```

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run cf:preview
npm run cf:deploy
npm run lint
npm run format:check
npm run format
npm run sync
```

## Cloudflare Workers

This project is configured for Cloudflare Workers static assets deployment.

Deployments are normally handled by Cloudflare Workers Builds via Git integration.
The Cloudflare project is configured with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Production branch: `main`

Use the following commands only for local preview or manual deployment.

1. Authenticate once:

```bash
npm exec wrangler login
```

2. Preview the Cloudflare deployment locally:

```bash
npm run cf:preview
```

3. Deploy to Cloudflare Workers:

```bash
npm run cf:deploy
```

`wrangler.jsonc` uses `assets.directory: "./dist"` and `not_found_handling: "404-page"` so Astro's `src/pages/404.astro` is served as the custom 404 page on Workers.
