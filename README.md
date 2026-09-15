# CatFang Landing Page

CatFang's landing page, built with [Next.js](https://nextjs.org) (App Router) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

> **Status:** early scaffold — routes, components, and content beyond the generated defaults are still to be built.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, all routes under `app/`
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — configured via CSS in `app/globals.css` (no `tailwind.config.*`)
- [Sass](https://sass-lang.com) — design tokens in `app/styles/`
- [ESLint](https://eslint.org) (flat config, `eslint-config-next`: `core-web-vitals` + `typescript` rule sets)
- [Prettier](https://prettier.io)
- [Playwright](https://playwright.dev) — end-to-end tests

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a font family for Vercel.

## Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the dev server                     |
| `npm run build`        | Production build                         |
| `npm run start`        | Serve the production build               |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |
| `npm run test:e2e`     | Run Playwright end-to-end tests          |
| `npm run test:e2e:ui`  | Run Playwright tests in UI mode          |

## Testing

End-to-end tests live in `tests/` and run against Chromium, Firefox, and WebKit via Playwright. `npm run test:e2e` builds/starts (in CI) or reuses the dev server automatically — see `playwright.config.ts` for details.

## Project Structure

```
app/                  # App Router routes
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page
  globals.css         # Tailwind v4 entry point
  styles/             # Sass design tokens
public/               # Static assets
tests/                # Playwright end-to-end tests
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
