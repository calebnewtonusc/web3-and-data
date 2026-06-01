// The Journey — static frontend + a small persistence API.
// Railway sets PORT; we bind 0.0.0.0 so the container is reachable.
const http = require("http");
const fs = require("fs");
const path = require("path");
const storage = require("./storage");

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;
const MAX_BODY = 2 * 1024 * 1024; // 2 MB
const ID_RE = /^[A-Za-z0-9_-]{1,64}$/;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "no-referrer-when-downgrade",
};

function cacheControl(ext, base) {
  if (base === "sw.js" || ext === ".html" || ext === ".webmanifest")
    return "no-cache";
  if ([".svg", ".png", ".jpg", ".webp", ".woff2"].includes(ext))
    return "public, max-age=86400";
  return "public, max-age=300";
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...SECURITY_HEADERS,
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error("payload too large"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function handleApi(req, res, urlPath) {
  if (urlPath === "/api/health") {
    return sendJson(res, 200, { ok: true, storage: storage.getMode() });
  }

  const m = urlPath.match(/^\/api\/state\/([^/]+)$/);
  if (m) {
    const id = decodeURIComponent(m[1]);
    if (!ID_RE.test(id)) return sendJson(res, 400, { error: "invalid id" });

    if (req.method === "GET") {
      try {
        const data = await storage.get(id);
        return sendJson(res, 200, { data: data || null });
      } catch (err) {
        console.error("[GET /api/state]", err.message);
        return sendJson(res, 500, { error: "storage error" });
      }
    }
    if (req.method === "PUT") {
      try {
        const raw = await readBody(req);
        let data;
        try {
          data = JSON.parse(raw);
        } catch {
          return sendJson(res, 400, { error: "invalid json" });
        }
        if (typeof data !== "object" || data === null || Array.isArray(data)) {
          return sendJson(res, 400, { error: "expected object" });
        }
        await storage.put(id, data);
        return sendJson(res, 200, { ok: true });
      } catch (err) {
        console.error("[PUT /api/state]", err.message);
        return sendJson(res, err.message === "payload too large" ? 413 : 500, {
          error: err.message,
        });
      }
    }
    return sendJson(res, 405, { error: "method not allowed" });
  }

  return sendJson(res, 404, { error: "not found" });
}

function sendIndex(res) {
  fs.readFile(path.join(ROOT, "index.html"), (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain", ...SECURITY_HEADERS });
      return res.end("Not found");
    }
    res.writeHead(200, {
      "Content-Type": TYPES[".html"],
      "Cache-Control": "no-cache",
      ...SECURITY_HEADERS,
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain", ...SECURITY_HEADERS });
    return res.end("ok");
  }

  let urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (urlPath.startsWith("/api/")) {
    handleApi(req, res, urlPath).catch((err) => {
      console.error("[api]", err.message);
      sendJson(res, 500, { error: "server error" });
    });
    return;
  }

  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain", ...SECURITY_HEADERS });
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) return sendIndex(res); // SPA-style fallback
    const ext = path.extname(filePath).toLowerCase();
    const base = path.basename(filePath);
    res.writeHead(200, {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Cache-Control": cacheControl(ext, base),
      ...SECURITY_HEADERS,
    });
    res.end(data);
  });
});

storage
  .init()
  .then((mode) => {
    server.listen(PORT, "0.0.0.0", () => {
      console.log(`The Journey listening on :${PORT} (storage: ${mode})`);
    });
  })
  .catch((err) => {
    console.error("storage init failed:", err.message);
    // Fall back to serving statically even if the DB is unreachable.
    server.listen(PORT, "0.0.0.0", () => {
      console.log(
        `The Journey listening on :${PORT} (storage init failed, file fallback)`,
      );
    });
  });
