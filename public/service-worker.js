
const resources = [
  './app.webmanifest',
  './favicon.ico',
  './logo192.png',
  './logo512.png',
];

async function montarCache() {
  const cache = await caches.open('sinalario');

  return cache.addAll(resources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(montarCache());
  event.waitUntil(caches.open('movies'));
});

addEventListener('backgroundfetchsuccess', event => {
  console.log('[Service Worker]: Background Fetch Success');

  event.waitUntil(
    (async function () {
      try {
        const records = await event.registration.matchAll();

        const promises = records.map(async record => {

          console.log(record)
          staleWhileRevalidate(record);
        });

        await Promise.all(promises);
      } catch (err) {
        console.error(err)
      }
    })()
  );
});

async function staleWhileRevalidate(event) {
  const cache = await caches.open('movies');

  const cacheResponse = await caches.match(event.request);

  if (!cacheResponse) {
    const networkResponse = await fetch(event.request).catch(() => undefined);

    if (networkResponse && networkResponse.status < 400) {
      console.log(`Atualizando o cache ${event.request.url}`, {
        networkResponse,
      });

      const response = await event.responseReady;

      await cache.put(event.request, response);
    }

    console.log(`Retornando network ${event.request.url}`, { networkResponse });

    return networkResponse;
  }

  console.log(`Retornando cache ${event.request.url}`, { cacheResponse });

  return cacheResponse;
}

