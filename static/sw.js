importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/122a69e4254b3ca498f0.js",
    "revision": "1ae14be99e95d0c8b62e771ae8333ace"
  },
  {
    "url": "/_nuxt/1bf2bbd24ae657a76c46.js",
    "revision": "e96220e247d867616d32d6c2ffe87cdf"
  },
  {
    "url": "/_nuxt/584e6f74197616042cfe.js",
    "revision": "6d14d4856197db75d98635b077800b42"
  },
  {
    "url": "/_nuxt/97e1aa5e4e88853e60f3.js",
    "revision": "8fc6043f8bbef84940d89a0d4ccbfd96"
  },
  {
    "url": "/_nuxt/b894bb79c2c3edb4b8b8.js",
    "revision": "88636340d0abfa8ba9f8db427231c5aa"
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
    "url": "/_nuxt/edee174412f19f05c7a8.js",
    "revision": "770e5624b1671e23879ffba0c0de7018"
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
