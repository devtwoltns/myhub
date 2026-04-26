# MyHub architecture

## Why this structure

This project starts as a personal website, but the folder layout assumes future growth into:

- richer content
- AI-backed tools
- database-backed features
- forms or account flows

The goal is to avoid early coupling between pages, UI, and integrations.

## Current rules

- `app/` contains routes, layouts, metadata, and route handlers.
- `components/` contains reusable UI and shared layout pieces.
- `features/` contains feature-level composition and domain-specific presentation.
- `lib/` contains integrations, environment access, adapters, and shared utilities.
- `docs/` holds architecture decisions and future planning notes.

## Growth path

### Content

If writing becomes important, add a dedicated content pipeline. For example:

- `content/blog/*.mdx`
- `lib/content/` for loaders, metadata parsing, and feed generation

### AI

When AI features are added:

- keep provider calls server-side
- place prompt builders and schemas in `lib/ai/`
- if the site stays on Render Static Site, deploy AI features separately or move the app to a Node web service first
- validate outputs before rendering

OpenAI currently recommends the Responses API for new projects, which fits this route-handler approach well.

### Database

When persistence is needed:

- add Postgres
- add migrations
- keep data access behind `lib/db/`
- avoid importing ORM clients directly into page components
