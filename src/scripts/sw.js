import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/icon.png',
  './icons/icon_x48.png',
  './icons/icon_x72.png',
  './icons/icon_x96.png',
  './icons/icon_x128.png',
  './icons/icon_x192.png',
  './icons/icon_x384.png',
  './icons/icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});