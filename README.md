# Protocol Forge Tracker

A progress tracker for the **45-workday plan to become a deep smart contract engineer** (Mon June 1, 2026 through Fri July 31, 2026). Nine weeks, 45 workdays, every day broken into Learn / Do / Artifact with checkboxes, Friday quality gates, and the final evidence scorecard.

Built to the Apple `DESIGN.md` system: Action Blue (#0066cc) as the single accent, SF Pro / Inter typography with negative letter-spacing, alternating light and dark edge-to-edge tiles, pill chrome, hairline borders, no decorative shadows.

Progress is stored in the browser via `localStorage`, so it persists across visits on the same device.

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

| File           | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `index.html`   | The full tracker UI (Apple design system)      |
| `data.js`      | All 45 workdays of the plan, encoded as data   |
| `server.js`    | Zero-dependency static file server for Railway |
| `package.json` | `npm start` runs the server; pins Node >= 18   |
| `railway.json` | Railway build and deploy configuration         |

All glory to God! ✝️❤️
