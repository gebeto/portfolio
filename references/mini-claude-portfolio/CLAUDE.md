# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun dev` (runs on http://localhost:3000)
- **Build:** `bun run build`
- **Lint:** `bun run lint` (ESLint 9 flat config with next/core-web-vitals and next/typescript)
- **Start production:** `bun start`

## Architecture

- **Framework:** Next.js 16 with App Router (React 19)
- **Language:** TypeScript (strict mode)
- **Package manager:** bun (see `bun.lock`)
- **Styling:** CSS Modules (`.module.css` files) with CSS custom properties for theming; supports light/dark mode via `prefers-color-scheme`
- **Fonts:** Geist and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`
- **Path alias:** `@/*` maps to `./src/*`
- **All app code lives under `src/`** — the `src/app/` directory contains the App Router pages and layouts
