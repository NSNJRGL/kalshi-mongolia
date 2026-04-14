# Spec: Prediction Market Interview Project

## Assumptions

1. This project is a learning exercise for senior frontend interviews, not a commercial product.
2. The goal is to build a product inspired by Kalshi's information density, trading UX, and polish, not to copy its branding or exact content.
3. The app will start as a frontend-heavy project with mocked market data before any real backend integration.
4. The current stack stays in place: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.
5. The first milestone is a strong landing page plus a market browsing experience, not authentication or payments.

## Objective

Build a polished prediction-market-style web app that demonstrates senior-level frontend judgment in:

- Next.js App Router architecture
- React component composition and state modeling
- Responsive layout and accessibility
- Performance-aware UI rendering
- Design system thinking

The user is you as a hiring candidate. Success means you can walk through the codebase and explain why each architectural choice was made.

## Product Direction

Use a distinct brand and content. Do not clone Kalshi literally.

Suggested product concept:

- Name: `Market Pulse Mongolia`
- Theme: prediction markets around economics, sports, elections, energy, and culture
- Positioning: a fast, data-dense market dashboard with a strong mobile and desktop experience

## Tech Stack

- Next.js `16.1.7`
- React `19`
- TypeScript `5.9`
- Tailwind CSS `4`
- shadcn/ui primitives
- Hugeicons for icons

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Format: `npm run format`

## Project Structure

- `app/` → routes, layouts, page-level composition
- `components/` → shared UI and page sections
- `components/ui/` → shadcn primitives
- `lib/` → helpers, constants, mock data formatters
- `hooks/` → custom hooks once state becomes non-trivial
- `public/` → static assets
- `docs/` → product spec, roadmap, interview notes

Planned additions:

- `app/markets/page.tsx` → market directory page
- `app/markets/[slug]/page.tsx` → market details page
- `components/landing/` → landing sections
- `components/markets/` → table, cards, filters, sparkline placeholders
- `lib/data/` → mock market datasets

## Code Style

Prefer small composed sections over giant pages. Keep server and client responsibilities explicit.

```tsx
type MarketCardProps = {
  market: Market;
};

export function MarketCard({ market }: MarketCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground">{market.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{market.question}</h3>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-semibold">{market.yesPrice}%</span>
        <span className="text-sm text-muted-foreground">{market.volumeLabel}</span>
      </div>
    </article>
  );
}
```

Conventions:

- Use TypeScript types close to their domain usage.
- Default to server components until client interactivity is needed.
- Use semantic tokens from `app/globals.css`, not ad hoc colors.
- Keep sections visually intentional; avoid generic SaaS hero patterns.
- Prefer realistic mock data over filler text.

## Testing Strategy

Current repo does not include a test runner yet. Add tests after the first UI milestone.

- Phase 1: lint + typecheck + manual responsive checks
- Phase 2: add unit/component tests for formatting helpers and interactive components
- Phase 3: add Playwright for core flows once routing is in place

Minimum verification for every milestone:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Manual check at `320px`, `768px`, `1024px`, `1440px`

## Boundaries

- Always:
  - Keep the UI accessible and keyboard reachable.
  - Preserve a distinct product identity instead of copying Kalshi assets or copy.
  - Build mobile-first and verify desktop density intentionally.
  - Explain architectural choices in code and docs well enough for interviews.

- Ask first:
  - Adding major dependencies like charts, animation libraries, or state managers
  - Introducing backend services, auth, or databases
  - Replacing the existing design-token setup

- Never:
  - Commit secrets
  - Depend on live financial APIs for the first version
  - Copy proprietary brand assets, logos, or text from Kalshi

## Success Criteria

1. The landing page feels premium, distinct, and responsive.
2. The app demonstrates App Router conventions clearly.
3. A market list and market detail page show realistic mocked data.
4. Filtering, sorting, and local UI state are implemented cleanly in React.
5. The codebase is simple enough to explain in an interview in under 10 minutes.
6. Build, lint, and typecheck pass cleanly.

## Implementation Plan

### Phase 1: Foundation and Design Language

Goal: replace the starter screen with a branded homepage and reusable layout primitives.

Build:

- site shell with header and footer
- design tokens tuned away from the default purple palette
- hero section with product positioning
- featured markets teaser
- trust or stats strip

Interview topics:

- App Router layout composition
- token-driven styling
- server vs client component decisions

### Phase 2: Market Browsing Experience

Goal: build the core screen recruiters can interact with.

Build:

- `markets` page with tabs or categories
- reusable market cards and a dense table view
- filter and sort controls
- mock data module with types

Interview topics:

- React state design
- composition vs prop bloat
- rendering performance with list-heavy UIs

### Phase 3: Market Detail Experience

Goal: show deeper product thinking and route-level composition.

Build:

- dynamic route for market details
- outcome summary card
- recent movement panel
- order-book-inspired visual blocks
- related markets section

Interview topics:

- nested route composition
- static mock data loading patterns
- page-level information hierarchy

### Phase 4: Polish and Frontend Depth

Goal: show senior-level finish.

Build:

- loading states and skeletons
- empty states and error-safe fallbacks
- subtle motion
- theme refinement
- accessibility sweep

Interview topics:

- UX edge cases
- accessibility details
- progressive enhancement

### Phase 5: Testing and Interview Packaging

Goal: make the project presentation-ready.

Build:

- test setup
- a short architecture walkthrough doc
- seeded demo scenarios
- deployment

Interview topics:

- testing strategy tradeoffs
- production readiness
- what you would build next with a backend

## Task Backlog

- [ ] Task: Define the visual direction and replace starter tokens
  - Acceptance: `app/globals.css` and layout support a distinct brand
  - Verify: `npm run lint && npm run typecheck`
  - Files: `app/globals.css`, `app/layout.tsx`

- [ ] Task: Build the homepage shell and landing sections
  - Acceptance: homepage includes nav, hero, featured markets, and footer
  - Verify: `npm run build` and manual viewport checks
  - Files: `app/page.tsx`, `components/landing/*`

- [ ] Task: Create market domain types and mock data
  - Acceptance: market components render from typed mock data only
  - Verify: `npm run typecheck`
  - Files: `lib/data/*`, `lib/*`

- [ ] Task: Build the market listing page
  - Acceptance: users can scan, filter, and sort mocked markets
  - Verify: `npm run build` and manual interaction check
  - Files: `app/markets/page.tsx`, `components/markets/*`

- [ ] Task: Build the market details route
  - Acceptance: a details page exists for each mocked market slug
  - Verify: `npm run build`
  - Files: `app/markets/[slug]/page.tsx`, `components/markets/*`

- [ ] Task: Add loading, empty, and error states
  - Acceptance: primary views have graceful fallback UI
  - Verify: manual checks and `npm run build`
  - Files: route files and shared components

- [ ] Task: Add test infrastructure
  - Acceptance: at least one component test and one end-to-end happy path exist
  - Verify: test command passes once added
  - Files: test config and test files

## Step-by-Step Build Order

1. Replace the starter homepage with a branded landing page.
2. Establish your design tokens before building many components.
3. Create typed mock market data so the UI has realistic constraints.
4. Build reusable market cards, table rows, and status badges.
5. Add the market listing route with filters and sorting.
6. Add the market detail route with deeper data presentation.
7. Add polish: loading states, keyboard checks, responsive tuning, motion.
8. Add tests and a short architecture write-up for interview storytelling.

## Open Questions

1. Do you want the brand to feel more financial-terminal, editorial, or consumer-friendly?
2. Do you want dark mode to remain a core feature, or should the first pass optimize only for light mode?
3. Do you want this repo to stay frontend-only, or should the later phases include a small mock API route layer?
