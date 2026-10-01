// Needed only so Chrome offers "Install app". Everything still loads live from the internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('fetch', () => {});
