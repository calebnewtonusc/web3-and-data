// Persistence layer for The Journey backend.
// Uses Postgres when DATABASE_URL is set (Railway), else a local JSON file
// so `npm start` works with zero setup during development.
const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "data-store", "state.json");
let pool = null;
let mode = "file";

async function init() {
  if (process.env.DATABASE_URL) {
    const { Pool } = require("pg");
    const url = process.env.DATABASE_URL;
    // Internal Railway networking does not use TLS; the public proxy does.
    const ssl = url.includes("railway.internal")
      ? false
      : { rejectUnauthorized: false };
    pool = new Pool({ connectionString: url, ssl });
    await pool.query(
      `CREATE TABLE IF NOT EXISTS journey_state (
         id text PRIMARY KEY,
         data jsonb NOT NULL,
         updated_at timestamptz NOT NULL DEFAULT now()
       )`,
    );
    mode = "postgres";
  } else {
    fs.mkdirSync(path.dirname(FILE), { recursive: true });
    mode = "file";
  }
  return mode;
}

function getMode() {
  return mode;
}

async function get(id) {
  if (pool) {
    const r = await pool.query("SELECT data FROM journey_state WHERE id = $1", [
      id,
    ]);
    return r.rows[0] ? r.rows[0].data : null;
  }
  try {
    const all = JSON.parse(fs.readFileSync(FILE, "utf8"));
    return all[id] || null;
  } catch {
    return null;
  }
}

async function put(id, data) {
  if (pool) {
    await pool.query(
      `INSERT INTO journey_state (id, data, updated_at)
       VALUES ($1, $2, now())
       ON CONFLICT (id) DO UPDATE SET data = $2, updated_at = now()`,
      [id, data],
    );
    return;
  }
  let all = {};
  try {
    all = JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {}
  all[id] = data;
  fs.writeFileSync(FILE, JSON.stringify(all));
}

module.exports = { init, get, put, getMode };
