const CACHE_NAME = 'vision-village-v2.1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 항상 최신 Firebase 데이터와 페이지를 우선 로드
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
