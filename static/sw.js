importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1d8aed127b0a5f98d2ec.js",
    "revision": "1c277825f796b2f016411414b583b1b7"
  },
  {
    "url": "/_nuxt/20b007dd127a7d73e734.js",
    "revision": "a860f2dc4b44515540c1a3cc39efcc04"
  },
  {
    "url": "/_nuxt/28698151db38c62e0ca5.js",
    "revision": "736cdd3765456c318cef45060a532caf"
  },
  {
    "url": "/_nuxt/3adceb2d88eee2915bdd.js",
    "revision": "bcf26c9cf31eba21b054a9cb3c5f1cac"
  },
  {
    "url": "/_nuxt/42f2c64e51c7ff0d0dcf.js",
    "revision": "2f0af2e3cc8d0b6b57c0d6dc650eab10"
  },
  {
    "url": "/_nuxt/4d5388383f37c477ca99.js",
    "revision": "c46bb329015175435bd2dbd7b178e14c"
  },
  {
    "url": "/_nuxt/66b4d2955cc2fc815da6.js",
    "revision": "0494110cb5c4908a14cd9f3bc86727a3"
  },
  {
    "url": "/_nuxt/7ef1f58b454c381f3cf2.js",
    "revision": "66ff605d9b03e43feb1d489a1b535692"
  },
  {
    "url": "/_nuxt/a033677054d10a0bd9bf.js",
    "revision": "73a223cc90188c74fea2269751ff5e4b"
  },
  {
    "url": "/_nuxt/a49775f156d95525d01e.js",
    "revision": "f87c09ea23ba1f05f00b23d83518a882"
  },
  {
    "url": "/_nuxt/a7bdc6289c4a9c12753d.js",
    "revision": "1f8dc3763a59a33539839a29dfb581d5"
  },
  {
    "url": "/_nuxt/b915ab4b9c445afb5f1e.js",
    "revision": "52023322dc2532cfe922b2aa861c2c16"
  },
  {
    "url": "/_nuxt/c50cfca93fbb3c24747a.js",
    "revision": "11271374a5c2635f8da3f9247fb43957"
  },
  {
    "url": "/_nuxt/d1dd9a402c0796e3dd1f.js",
    "revision": "55ef05e1ff7f48813e234dd2bd3572eb"
  },
  {
    "url": "/_nuxt/e538ae02286b9d8b39a9.js",
    "revision": "86e9de37eab2958343df4c5da117a313"
  },
  {
    "url": "/_nuxt/f2e9e631c5ff64e1f8a8.js",
    "revision": "f89fec557969fb65545e64f560c5f060"
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
