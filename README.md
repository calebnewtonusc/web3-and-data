# The Journey

A single, continuous progress tracker for one build: **become a deep smart contract engineer, then land and crush Tesla data engineering.** Everything lives on one scrollable Apple-styled page. Progress is stored in the browser via `localStorage`, so it persists across visits on the same device.

The journey runs in two phases, flowing as one track:

**Phase 1 — Protocol Forge:** the plan to become a deep smart contract engineer (June through early August 2026). Ten weeks, 50 workdays, every day broken into Learn / Do / Artifact, Friday quality gates, and a final evidence scorecard. Week 10 is a production-patterns capstone: upgradeable proxies, ERC-4337 account abstraction, bridges, DAO governance, MEV, weird ERC-20s, named tooling (Slither/Aderyn/Echidna/Medusa), and a Safe-owned testnet deploy.

**Phase 2 — Tesla Data Engineer:** the FleetPulse portfolio + 12-week interview learning plan targeting a Tesla Data Engineer internship (Fall 2026). A 12-week interview track (each week with an exit criterion), seven FleetPulse portfolio levels, an SQL/DataLemur track, a Python/fundamentals/system-design track, and a final application package scorecard.

Both phases share one overall progress ring, one module count, and one gates-and-exit-criteria count. Phase pills at the top jump you to either section.

## Features

- **Notes per module** — a saved textarea on every card for defense notes, mistake logs, and weekly reports.
- **Search, hide-completed filter, expand/collapse all,** and a **"Next unfinished"** jump button.
- **Streak tracking** — counts consecutive days you make progress.
- **Export / Import** progress as JSON, so you can back up or move between devices (localStorage is per-device).
- **Installable PWA** — works offline and installs to your phone/desktop via the service worker and web manifest.
- **Accessible** — skip link, `role=progressbar`, visible focus rings, dynamic tab title showing percent complete.

Built to the Apple `DESIGN.md` system: Action Blue (#0066cc) as the single accent, SF Pro / Inter typography with negative letter-spacing, alternating light and dark edge-to-edge tiles, pill chrome, hairline borders, no decorative shadows.

## Run locally

No build step. Either open `index.html` directly, or run the static server:

```bash
npm start
# serves on http://localhost:8080
```

## Deploy to Railway

The repo is a zero-dependency Node static server, so Railway needs no build configuration beyond what is already here.

1. Push this folder to a GitHub repo.
2. In Railway: New Project, then Deploy from GitHub Repo, and pick the repo.
3. Railway auto-detects Node (Nixpacks), installs nothing extra, and runs `node server.js`.
4. The server binds `0.0.0.0:$PORT` (Railway injects `PORT`). Health check is at `/healthz`.
5. Under Settings, Networking, click Generate Domain to get a public URL.

`railway.json` pins the start command, health check path, and restart policy. No environment variables are required.

### CLI alternative

```bash
railway init
railway up
railway domain
```

## Files

| File                   | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `index.html`           | The full tracker UI (Apple design system)       |
| `data.js`              | Phase 1 — Protocol Forge plan (50 workdays)     |
| `data-tesla.js`        | Phase 2 — Tesla Data Engineer plan (FleetPulse) |
| `server.js`            | Zero-dependency static file server for Railway  |
| `sw.js`                | Service worker for offline / installable PWA    |
| `manifest.webmanifest` | PWA manifest                                    |
| `icon.svg`             | App icon / favicon                              |
| `package.json`         | `npm start` runs the server; pins Node >= 18    |
| `railway.json`         | Railway build and deploy configuration          |

The two plans are merged into one journey at runtime in `index.html`: Protocol Forge is adapted from `data.js`, the Tesla groups are tagged and key-prefixed, and they render as one continuous set of sections with both scorecards at the end. To extend the journey, add groups to either data file.

All glory to God! ✝️❤️
