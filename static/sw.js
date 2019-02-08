importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1d8a98a44e7e9424a6bf.js",
    "revision": "90c67a768a10fb341c9cfbb8dd66cb45"
  },
  {
    "url": "/_nuxt/2476494262eaba96a71f.js",
    "revision": "47844ac9d4364d280982d50df84e1942"
  },
  {
    "url": "/_nuxt/3b07aee2ffa5c45349d7.js",
    "revision": "adf3a8ed8bb04a6bda1ea774e95db306"
  },
  {
    "url": "/_nuxt/456c9a2c2db4b4b28603.js",
    "revision": "11c4691f2768a8d772f4cd4d4e005d4b"
  },
  {
    "url": "/_nuxt/4adb41b19231acb05a92.js",
    "revision": "5b6aaf69b52bf6c5e1b07d40f354dd64"
  },
  {
    "url": "/_nuxt/5770390d85f1df0f3e0b.js",
    "revision": "f91891653de71c22f4519c8e60763399"
  },
  {
    "url": "/_nuxt/58deab84fa026bb9bb3a.js",
    "revision": "8f7c9e1f7cab3c0d75bce37875dd5317"
  },
  {
    "url": "/_nuxt/5c7096148854ba3a2bce.js",
    "revision": "935281fed0da9fe3718b071363008962"
  },
  {
    "url": "/_nuxt/7cc5f9c629a7b40dbec3.js",
    "revision": "324bb59d3f722be1e1d79f3af993416c"
  },
  {
    "url": "/_nuxt/840dc6d45e671c2fe709.js",
    "revision": "d823033f0b317fe57a2fdb985db3b0ad"
  },
  {
    "url": "/_nuxt/86a0b91f950df83a2b9c.js",
    "revision": "76ff7174e3ddcf24d6eea8e751916b37"
  },
  {
    "url": "/_nuxt/8d7820cb230276d915ef.js",
    "revision": "2ded690e936ff3ff6a75e3910dc56ce5"
  },
  {
    "url": "/_nuxt/9b36a3f82cb6a769f07d.js",
    "revision": "0c297136fce5504ea0804a63c3423359"
  },
  {
    "url": "/_nuxt/d6319e3808d2a1dfb46b.js",
    "revision": "cc7028f2e307ad66db7fdb7dc2bbe5ff"
  },
  {
    "url": "/_nuxt/e26cd1df0527ad6ed492.js",
    "revision": "36a3d622efecdc78f74af3719bcd2a5f"
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
