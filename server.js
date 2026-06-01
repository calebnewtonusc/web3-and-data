// Zero-dependency static file server for The Journey tracker.
// Railway sets PORT; we bind 0.0.0.0 so the container is reachable.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

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

// Cache policy: HTML and the service worker must revalidate so deploys land;
// long-lived static assets can be cached by the browser.
function cacheControl(ext, base) {
  if (base === "sw.js" || ext === ".html") return "no-cache";
  if (ext === ".webmanifest") return "no-cache";
  if (
    ext === ".svg" ||
    ext === ".png" ||
    ext === ".jpg" ||
    ext === ".webp" ||
    ext === ".woff2"
  )
    return "public, max-age=86400";
  return "public, max-age=300";
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
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(ROOT, path.normalize(urlPath));
  // Prevent path traversal outside the served directory.
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

server.listen(PORT, "0.0.0.0", () => {
  console.log(`The Journey tracker listening on :${PORT}`);
});
