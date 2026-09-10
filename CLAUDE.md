# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

This is an unmodified `create-next-app` scaffold for a portfolio site — no custom routes, components, or business logic have been added yet beyond the generated `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`. No test framework is configured.

## Commands

- `npm run dev` — start the dev server (this is also what (re)generates `AGENTS.md`, see above)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`, `core-web-vitals` + `typescript` rule sets)

## Structure

- App Router, all routes under `app/`.
- `@/*` path alias resolves to the repo root (`tsconfig.json`).
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — v4 is configured through CSS in `app/globals.css`).
- `app/layout.tsx` loads fonts via `next/font/google` (Geist, Geist Mono) and types the layout's props with the framework-generated `LayoutProps<"/">` helper rather than a hand-written props interface — follow that pattern for any new layouts.
