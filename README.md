# playwright-learning

A Playwright + TypeScript learning project covering locators, assertions, chaining, filtering, hooks, test annotations, click actions, form controls (checkboxes, radio buttons, dropdowns, multi-select and async dropdowns) and JavaScript alert handling.

## Prerequisites

- Node.js (LTS)
- npm

## Setup

```bash
npm install
npx playwright install
cp .env.example .env   # then fill in the values
```

Environment variables (loaded via `dotenv` in `playwright.config.ts`):

| Variable       | Purpose                    |
| -------------- | -------------------------- |
| `BASE_URL`     | Application under test     |
| `STD_USER`     | Standard user login        |
| `STD_PASSWORD` | Standard user password     |

`.env` is git-ignored; never commit real credentials.

## Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm test`             | Run all tests                       |
| `npm run test:headed`  | Run with a visible browser          |
| `npm run test:ui`      | Open Playwright UI mode             |
| `npm run test:chrome`  | Chromium only                       |
| `npm run test:firefox` | Firefox only                        |
| `npm run test:webkit`  | WebKit only                         |
| `npm run test:smoke`   | Tests tagged `@smoke`               |
| `npm run test:debug`   | Run with the Playwright inspector   |
| `npm run report`       | Open the last HTML report           |
| `npm run codegen`      | Record a test with codegen          |
| `npm run lint`         | Lint with ESLint                    |
| `npm run typecheck`    | Type-check with `tsc --noEmit`      |

## Project structure

```
app/                     Local practice page (index.html)
src/data/                Test data (e.g. users.json)
tests/Beginner/          Locators, assertions, hooks, annotations, checkbox, radio,
                         dropdown (single, multi-select, async), authentication
tests/Intermediate/      Click actions, elements, filtering, JS alerts
playwright.config.ts     Playwright configuration
tsconfig.json            TypeScript config with path aliases
.github/workflows/       CI workflow
```

Path aliases (see `tsconfig.json`): `@pages/*`, `@fixtures/*`, `@data/*`, `@utils/*` map to the matching folders under `src/`. Only `src/data` exists so far.

## CI

Tests run in GitHub Actions via `.github/workflows/playwright.yml`.
