# Ulaan Market

Ulaan Market is a Kalshi- and Polymarket-inspired frontend interview project built with Next.js. The app focuses on a dark, data-dense prediction-market UI with local mock data, bilingual content, and reusable React components.

This repo is intentionally frontend-only:
- no backend
- no auth
- no live API
- no trading logic

The goal is to practice React composition, Next.js App Router patterns, typed mock data, Tailwind styling, and interview-ready frontend architecture.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- `next/font/google` with `Manrope` and `IBM Plex Mono`

## Current Features

- dashboard-style homepage
- bilingual English / Mongolian UI
- local language persistence with `localStorage`
- featured market hero section
- right-side news and hot-topics rail
- searchable and filterable all-markets grid
- mock market cards with sportsbook-inspired layout
- responsive dark theme layout

## Project Structure

```text
app/
  layout.tsx                App providers, fonts, and global shell
  page.tsx                  Homepage entry
  globals.css               Design tokens and global styling

components/
  containers/
    header/                 Top navigation and category row
    layout/                 Shared main content container
  home/                     Homepage sections
  providers/                Language provider
  ui/                       shadcn/ui components

lib/
  mock-market-data.ts       Typed bilingual mock data
  utils.ts                  Shared utilities
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run format
```

## Notes

- English is the default language.
- Mongolian content is stored locally in `lib/mock-market-data.ts`.
- The design direction is inspired by prediction-market products, but the branding and content are original to this project.

## Next Steps

- build `/markets` and `/markets/[slug]`
- add detail-page composition from the existing mock data
- refine loading, empty, and mobile states
- add tests around filtering and language behavior

## Reference

The initial planning document is in `docs/project-spec.md`.
