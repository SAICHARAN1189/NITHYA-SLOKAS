/**
 * sw.js — Service Worker for నిత్య శ్లోకాలు
 * Caches all app files + sloka images for offline use
 */

const CACHE_NAME = 'nitya-slokas-v8';

// Core app files to cache immediately
const CORE_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './slokas.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Noto+Sans+Telugu:wght@300;400;500;700&family=Noto+Serif+Telugu:wght@400;600&family=Inter:wght@300;400;500;600&display=swap'
];

// All sloka page images (pages 01–30)
const IMAGE_FILES = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return `./slokas/pages/page_${n}.jpg`;
});

const ALL_FILES = [...CORE_FILES, ...IMAGE_FILES];

// ── Install: cache everything ──────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching core files...');
      // Cache core files first (fail fast)
      return cache.addAll(CORE_FILES).then(() => {
        console.log('[SW] Core cached. Now caching images...');
        // Cache images one by one (don't fail if one is missing)
        return Promise.allSettled(
          IMAGE_FILES.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Could not cache:', url, err))
          )
        );
      });
    }).then(() => {
      console.log('[SW] All files cached! App works offline now.');
      return self.skipWaiting();
    })
  );
});

// ── Activate: clean old caches ─────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: serve from cache, fallback to network ───
self.addEventListener('fetch', event => {
  // Skip non-GET and cross-origin non-font requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached; // Serve from cache (offline-first)
      }
      // Not in cache — try network
      return fetch(event.request).then(response => {
        // Cache successful responses dynamically
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If both cache and network fail for HTML, show offline page
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// ── Message: force cache refresh ──────────────────
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
