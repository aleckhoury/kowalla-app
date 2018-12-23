importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14c6526603efaf42479c.js",
    "revision": "eb64f5fb21096d986eccea80e64f3f49"
  },
  {
    "url": "/_nuxt/3f751c1e23bfc89f0e99.js",
    "revision": "37edbc8f85817e897475dcf806c4b99a"
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
    "url": "/_nuxt/577908ae0cf6afaa55bf.js",
    "revision": "f11c616ffef4fbcacc30d1d2f867317f"
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
