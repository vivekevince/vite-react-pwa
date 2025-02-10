const CACHE_NAME = "vite-pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/vite-react-pwa/logo192.png",
  "/vite-react-pwa/logo512.png",
];

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
