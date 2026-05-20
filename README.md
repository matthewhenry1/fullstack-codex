# NovaLedger Frontend

NovaLedger is a React + Vite landing page for a fintech website template. It is built as a static client app and prepared for Cloudflare Pages deployment.

## Development

Install dependencies:

```bash
npm install
```

Start Vite locally:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Cloudflare Pages

The app deploys to Cloudflare Pages as a Vite static build.

Cloudflare project settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

Wrangler commands:

```bash
npm run build
npm run cf:dev
npm run cf:deploy
```

`wrangler.toml` is configured for Pages with `pages_build_output_dir = "./dist"`. Keep server-side bindings out of this file until Pages Functions are added.

## Future Functions

If the contact form, chat, or integrations need server-side behavior, add Cloudflare Pages Functions under `functions/`. Keep secrets in Cloudflare environment variables and local `.dev.vars`, not in frontend JavaScript.

## Manual QA

Before handoff, verify:

- The page loads without console errors.
- Mobile navigation opens, closes, and updates `aria-expanded`.
- Pricing buttons update displayed prices.
- Policy toggles update visual state and ARIA labels.
- Metrics animate once when scrolled into view.
- Agent chat minimizes, expands, submits prompts, and autoscrolls.
- The contact form displays the entered email and resets.
