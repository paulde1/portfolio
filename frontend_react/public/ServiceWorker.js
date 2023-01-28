let CACHE_NAME = 'Portfolio-cache-' + Date.now;
const urlsToCache = [
'/',
'/index.html',
"/style.css",
];
self.addEventListener('install', function(event) {
// Perform install steps
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache) {
console.log('Opened cache');
return cache.addAll(urlsToCache);
})
);
self.skipWaiting()
});

self.addEventListener("activate", e => {
    e.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(thisCacheName) {
            if (thisCacheName !== CACHE_NAME) {
              return caches.delete(thisCacheName);
            }
          })
        );
      })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
    .then(function(response) {
    if (response) {
    return response;
    }
    return fetch(event.request);
    })
 );
});