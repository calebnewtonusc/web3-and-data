# The Journey

A single, continuous progress tracker for one build: **become a deep smart contract engineer, then land and crush Tesla data engineering.** Everything lives on one scrollable Apple-styled page. Progress is stored in the browser via `localStorage`, so it persists across visits on the same device.

The journey runs in two phases, flowing as one track:

**Phase 1 — Protocol Forge:** the plan to become a deep smart contract engineer (June through mid-August 2026). Eleven weeks, 55 workdays, every day broken into Learn / Do / Artifact, Friday quality gates, and a final evidence scorecard. Week 10 is a production-patterns capstone (upgradeable proxies, ERC-4337 account abstraction, bridges, DAO governance, MEV, weird ERC-20s, named tooling: Slither/Aderyn/Echidna/Medusa, Safe-owned testnet deploy). Week 11 makes it hireable: a full-stack dApp (Next.js + wagmi/viem + RainbowKit), a live wallet-connected product, dApp infra (RPC, The Graph, IPFS), a Web3 portfolio site, and the monetize channels (audit contests, bug bounties, freelance, job boards).

**Phase 2 — Tesla Data Engineer:** the FleetPulse portfolio + 12-week interview learning plan targeting a Tesla Data Engineer internship (Fall 2026). A 12-week interview track (each week with an exit criterion), seven FleetPulse portfolio levels, an SQL/DataLemur track, a Python/fundamentals/system-design track, and a final application package scorecard.

Both phases share one overall progress ring, one module count, and one gates-and-exit-criteria count. Phase pills at the top jump you to either section.

## Features

- **Notes per module** — a saved textarea on every card for defense notes, mistake logs, and weekly reports.
- **Search, hide-completed filter, expand/collapse all,** and a **"Next unfinished"** jump button.
- **Streak tracking** — counts consecutive days you make progress.
- **Export / Import** progress as JSON, so you can back up or move between devices (localStorage is per-device).
- **Installable PWA** — works offline and installs to your phone/desktop via the service worker and web manifest.
- **Accessible** — skip link, `role=progressbar`, visible focus rings, dynamic tab title showing percent complete.
- **Cross-device sync** — a real backend persists your progress server-side so it follows you across devices, with localStorage as an offline cache.

Built to the Apple `DESIGN.md` system: Action Blue (#0066cc) as the single accent, SF Pro / Inter typography with negative letter-spacing, alternating light and dark edge-to-edge tiles, pill chrome, hairline borders, no decorative shadows.

## Backend & sync

`server.js` serves the static frontend **and** a small persistence API:

| Endpoint         | Method | Purpose                                      |
| ---------------- | ------ | -------------------------------------------- |
| `/api/health`    | GET    | `{ ok, storage }` — reports the active store |
| `/api/state/:id` | GET    | Returns the saved progress object for an id  |
| `/api/state/:id` | PUT    | Saves the progress object for an id          |

Storage is **Postgres when `DATABASE_URL` is set** (production on Railway), and a local JSON file (`data-store/state.json`) otherwise, so `npm start` works with zero setup. Each browser gets a random client id stored in localStorage; the frontend pushes progress on every change (debounced) and pulls the newest copy on load using a last-write-wins `_updated` timestamp. If the network is down, everything still works against localStorage and syncs when it returns.

**Live:** https://the-journey-app-production.up.railway.app

## Run locally

No build step for the frontend. To run the full app (frontend + API in file-storage mode):

```bash
npm install
npm start
# serves on http://localhost:8080
```

## Deploy to Railway

Live deployment uses two services in the `the-journey` project: the Node app and a Postgres database. The app reads `DATABASE_URL` (set as a reference to the Postgres service) and creates its table on boot.

Provisioned via the CLI:

```bash
railway init --name the-journey
railway add --database postgres
railway add --service the-journey-app --variables 'DATABASE_URL=${{Postgres.DATABASE_URL}}'
railway up --service the-journey-app
railway domain --service the-journey-app
```

The server binds `0.0.0.0:$PORT` (Railway injects `PORT`); container health check is at `/healthz`, app/storage health at `/api/health`. `railway.json` pins the start command, health check path, and restart policy.

## Files

| File                   | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `index.html`           | The full tracker UI (Apple design system)       |
| `data.js`              | Phase 1 — Protocol Forge plan (50 workdays)     |
| `data-tesla.js`        | Phase 2 — Tesla Data Engineer plan (FleetPulse) |
| `server.js`            | Static file server + persistence API            |
| `storage.js`           | Postgres (prod) / JSON-file (dev) storage layer |
| `sw.js`                | Service worker for offline / installable PWA    |
| `manifest.webmanifest` | PWA manifest                                    |
| `icon.svg`             | App icon / favicon                              |
| `package.json`         | `npm start` runs the server; pins Node >= 18    |
| `railway.json`         | Railway build and deploy configuration          |

The two plans are merged into one journey at runtime in `index.html`: Protocol Forge is adapted from `data.js`, the Tesla groups are tagged and key-prefixed, and they render as one continuous set of sections with both scorecards at the end. To extend the journey, add groups to either data file.

All glory to God! ✝️❤️
