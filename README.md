# page

Personal reference site built with Astro and deployed as static assets on Cloudflare Workers.

## Local development

Use the Node.js version in `.nvmrc`, then install dependencies and start Astro:

```bash
npm ci
npm run dev
```

Available scripts are defined in `package.json`.

## Cloudflare Workers

Production deployments normally run through Cloudflare Workers Builds using the `main` branch:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

For a local Workers preview:

```bash
npm run cf:preview
```

For a manual deployment, authenticate once and deploy:

```bash
npm exec wrangler login
npm run cf:deploy
```

`wrangler.jsonc` serves `dist/` as static assets and uses `dist/404.html` as the custom not-found page.
