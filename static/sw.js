importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2be29ac6d2ba75240491.js",
    "revision": "25261d7aae6d23f923f8f4cf2cf6d8a7"
  },
  {
    "url": "/_nuxt/3ee55a3560dc0e9c88b6.js",
    "revision": "a79491d021de669abceed8f3a7fb9875"
  },
  {
    "url": "/_nuxt/49b90c011735222b66e6.js",
    "revision": "d2839effdf19a116003899d8a612ce3a"
  },
  {
    "url": "/_nuxt/8bd8a2683de29d08c65c.js",
    "revision": "09c71c371f6a380610c813946c84b1fa"
  },
  {
    "url": "/_nuxt/bf04566d7df9e81df345.js",
    "revision": "90101c4f3d7d35080fba5aae2b807cc0"
  },
  {
    "url": "/_nuxt/cecc4727277b1c794f43.js",
    "revision": "f16b49e3ce9dd72156d8b592e88994e7"
  },
  {
    "url": "/_nuxt/d0e2852b6ff541cc7a0a.js",
    "revision": "b4871a1dd0d17c78176a7f3a42c50aec"
  },
  {
    "url": "/_nuxt/e4df05d978973982b551.js",
    "revision": "53ffb8b23679c12540ea5e867e27e041"
  },
  {
    "url": "/_nuxt/e75d1e1be8e9815a8fcf.js",
    "revision": "ef304e4170282b807cfc0bcae3b49738"
  },
  {
    "url": "/_nuxt/f1e82e40cbd4e263d5a8.js",
    "revision": "f595d3a79c78aab03c3fb3501467d914"
  },
  {
    "url": "/_nuxt/fdcab9bff9dc179c000b.js",
    "revision": "78d0d152e9d188f7aae048f0eaee134e"
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
