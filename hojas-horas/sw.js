// The app moved to https://hoja-horas-rectec.web.app/: clear the old offline copy and step aside.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({type: 'window'})) c.navigate('https://hoja-horas-rectec.web.app/');
})()));
