// Service worker for The Journey tracker.
// Cache-first for the small static asset set, with a network fallback that
// refreshes the cache so deploys propagate on the next load.
const CACHE = "journey-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./data-tesla.js",
  "./icon.svg",
  "./manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Never cache the persistence API — always go to the network.
  if (new URL(req.url).pathname.startsWith("/api/")) return;
  if (req.method !== "GET") return;
  // Network-first for navigations so new HTML wins; fall back to cache offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html")),
    );
    return;
  }
  // Cache-first for everything else (CDN fonts/Tailwind/lucide included).
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (
            res &&
            res.status === 200 &&
            req.url.startsWith(self.location.origin)
          ) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
