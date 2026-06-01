# Journey Tracker

A two-track progress tracker, switchable from one Apple-styled page. Progress is stored per track in the browser via `localStorage`, so each journey persists independently across visits on the same device.

**Track 1 — Protocol Forge:** the 45-workday plan to become a deep smart contract engineer (Mon June 1 through Fri July 31, 2026). Nine weeks, 45 workdays, every day broken into Learn / Do / Artifact with checkboxes, Friday quality gates, and a final evidence scorecard.

**Track 2 — Tesla Data Engineer:** the FleetPulse portfolio + 12-week interview learning plan targeting a Tesla Data Engineer internship (Fall 2026). A 12-week interview track (each week with an exit criterion), seven FleetPulse portfolio levels, an SQL/DataLemur track, and a Python/fundamentals/system-design track, plus the final application package scorecard.

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

| File            | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `index.html`    | Multi-track tracker UI (Apple design system)      |
| `data.js`       | Protocol Forge plan — all 45 workdays             |
| `data-tesla.js` | Tesla Data Engineer plan — FleetPulse + interview |
| `server.js`     | Zero-dependency static file server for Railway    |
| `package.json`  | `npm start` runs the server; pins Node >= 18      |
| `railway.json`  | Railway build and deploy configuration            |

## Adding a third track

Each track is a plain data object in the unified shape (`id`, `title`, `subtitle`, `range`, `mission`, `groups[]`, `scorecard`). Drop in a new `data-*.js` file exposing a global, add it to the `TRACKS` array in `index.html`, and the switcher, stats, and rendering pick it up automatically. Protocol Forge is converted to that shape at runtime by `adaptProtocolForge`, so its source `data.js` stays untouched.

All glory to God! ✝️❤️
