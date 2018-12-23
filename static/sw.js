importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02ac3a7b092ddccd5a93.js",
    "revision": "a826b4e3e3bfcc8e728110cef54cf7f5"
  },
  {
    "url": "/_nuxt/22f78a6abdb2f2ab89b4.js",
    "revision": "8c7b4c76858d49b383b110f527abc737"
  },
  {
    "url": "/_nuxt/9c6a03f52567f3c4d111.js",
    "revision": "eeef933f08596869c7ad7a374ab6ce27"
  },
  {
    "url": "/_nuxt/ae728003b6ea8054a7f7.js",
    "revision": "72fcbf3cdccc2310ee44fe08d4470b15"
  },
  {
    "url": "/_nuxt/c0fa8304da19e2b45140.js",
    "revision": "6529ea74b5352c1e19dfb9857bf86cb7"
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
