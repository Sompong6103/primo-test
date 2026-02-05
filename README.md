# Primo Test (TypeScript + Jest)

Minimal, accessible TypeScript repo with unit tests.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (bundled with Node.js)

## Setup

1. Open a terminal at the repo root.
2. Install dependencies:
	 - `npm install`

## Build (generate dist/)

Compile TypeScript to JavaScript:

- `npm run build`

This creates `dist/` and the compiled entry file at `dist/src/merge.js`.

## Run the compiled output

After building, run:

- `npm run start`

> If you see “Cannot find module dist/merge.js”, run the build step first.

## Run unit tests

Execute Jest tests:

- `npm test`

## Scripts

- `npm run build` — compile TypeScript to `dist/`
- `npm run start` — run compiled output
- `npm test` — run unit tests

## Project structure

```
src/
	merge.ts
test/
	merge.test.ts
```
