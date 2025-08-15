const CACHE_NAME = 'learn-js-single-v1';
const urlsToCache = ['/index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If found in cache, return it, else fetch from network
      return response || fetch(event.request);
    })
  );
});
