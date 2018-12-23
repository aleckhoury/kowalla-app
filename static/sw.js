importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2499f837f89f4371811e.js",
    "revision": "1b16a164e2bd611ddd7df3b96ff425bc"
  },
  {
    "url": "/_nuxt/441962d98c5fbfdfaf01.js",
    "revision": "d7dca68829a05b444e75587d143ab9e0"
  },
  {
    "url": "/_nuxt/51a6babc7aefbef39391.js",
    "revision": "11f59114a11f2ce3a55543afb6945fef"
  },
  {
    "url": "/_nuxt/7f82263b2944acae9c6f.js",
    "revision": "b66588a6eaec2b0a76ea46476e55135a"
  },
  {
    "url": "/_nuxt/ae82a140ddd15268bfed.js",
    "revision": "43137b0456f2e0dc16f1b1903eac2df4"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  }
], {
  "cacheId": "kowalla-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
