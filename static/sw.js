importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02dbb7953bf4515ee333.js",
    "revision": "b62c4134ddf69e82eebe845f78620edd"
  },
  {
    "url": "/_nuxt/122a69e4254b3ca498f0.js",
    "revision": "1ae14be99e95d0c8b62e771ae8333ace"
  },
  {
    "url": "/_nuxt/1bf2bbd24ae657a76c46.js",
    "revision": "e96220e247d867616d32d6c2ffe87cdf"
  },
  {
    "url": "/_nuxt/56fdbc08ede68eaec6fa.js",
    "revision": "5de426ed0c82f29c51ef195bdb586511"
  },
  {
    "url": "/_nuxt/97e1aa5e4e88853e60f3.js",
    "revision": "8fc6043f8bbef84940d89a0d4ccbfd96"
  },
  {
    "url": "/_nuxt/c7b0f6ddbe2fd95f1f82.js",
    "revision": "5ebef59004409c5f812484fe469abd76"
  },
  {
    "url": "/_nuxt/db14cd9c7ccf3482b58d.js",
    "revision": "bf85b89f4cae65e90178c42c8ad6357b"
  },
  {
    "url": "/_nuxt/e2a6fc1c00cfa05e1b56.js",
    "revision": "8b2d3264fec733de544f84c857c5e990"
  },
  {
    "url": "/_nuxt/f92d75121157d5466f7c.js",
    "revision": "87c8971f5d4c19a1b68bdb4996b6e8f8"
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
