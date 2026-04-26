# MyHub

Personal website scaffold built with Next.js App Router.

## Stack

- Next.js
- TypeScript
- App Router
- Route handlers for future API and AI features

## Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

## Render Static Site

This project is configured for Render static hosting.

- Build command: `npm install && npm run build`
- Publish directory: `out`

Because this is a static export, Next.js server features such as route handlers are not included in the deployed site.

## Structure

- `app/`: routes, layouts, route handlers
- `components/`: shared UI and layout
- `features/`: home-page feature composition
- `lib/`: adapters, env access, AI/db placeholders
- `docs/`: architecture notes
