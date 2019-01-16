importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1596180a337e0d04cd20.js",
    "revision": "dbf4114c3f6f7bd036ce2fa6e65d2e2e"
  },
  {
    "url": "/_nuxt/24ab0f6cb59a17a194a0.js",
    "revision": "e92f4a528dc7578b9ae3f2f21059f3ba"
  },
  {
    "url": "/_nuxt/2f67f10b0c5e25f7a1d6.js",
    "revision": "241c4d43c86e71a61470f20f4dea90a0"
  },
  {
    "url": "/_nuxt/4f3c1c4bfaa863722fb1.js",
    "revision": "fefea4fd92ac2e062891f420877ffae2"
  },
  {
    "url": "/_nuxt/605750fa215ca09d09b3.js",
    "revision": "bc74bcdeb477114e87fec09bfd13867f"
  },
  {
    "url": "/_nuxt/e6614a0b533b7df7a6be.js",
    "revision": "8a4282e7790c55c6adbcaae94f24be4e"
  },
  {
    "url": "/_nuxt/ef65619a2fbd0a0f44bf.js",
    "revision": "f757c813886e1b473d02729f256c6c5a"
  },
  {
    "url": "/_nuxt/f24190d70b81d13272e1.js",
    "revision": "a29f115d5137bc99ab93f4945d80d047"
  },
  {
    "url": "/_nuxt/fd85f702297bb811c58e.js",
    "revision": "41d3308d66ef2deb96e506e43eebed67"
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
