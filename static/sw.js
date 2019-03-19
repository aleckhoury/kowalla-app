importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05649205444d7855e50d.js",
    "revision": "8464e91629574f9b45e8724c4a3b460b"
  },
  {
    "url": "/_nuxt/05ef69de352fabcdbdbd.js",
    "revision": "1523e8b12c7cd0498706e409323f159f"
  },
  {
    "url": "/_nuxt/06c5e5df7d0992d4e344.js",
    "revision": "a635d984f965f79a8f9f98f30561737e"
  },
  {
    "url": "/_nuxt/15648973172e89adff66.js",
    "revision": "2acd2c3f41c78cbc2be752e383585ccd"
  },
  {
    "url": "/_nuxt/1ac5fb91e5578b9dd279.js",
    "revision": "df4a38c316e2cfcc8b36b3a548f099ab"
  },
  {
    "url": "/_nuxt/335fa6aa266e518f70d6.js",
    "revision": "c03a3b1ba8cd07f64b43713cd8347abf"
  },
  {
    "url": "/_nuxt/3ff35f30fd0b862c29d3.js",
    "revision": "d0c39979a61cdd88d653360309af721f"
  },
  {
    "url": "/_nuxt/75278cad99bdb8086969.js",
    "revision": "3aaa43a2f1fde76875af29c2a6056dcd"
  },
  {
    "url": "/_nuxt/99549141e5a48cdb09a0.js",
    "revision": "c71650bb1783cdcd5e97617acfb4aa0a"
  },
  {
    "url": "/_nuxt/bfb078141395f4cd4b0d.js",
    "revision": "00fcce79e82ec149518ad95cbb9a7859"
  },
  {
    "url": "/_nuxt/d4454b56d043d855fdf1.js",
    "revision": "fc519d9cbacf0596db4a4e7061ac208e"
  },
  {
    "url": "/_nuxt/e5e1d355c7f90a6b9138.js",
    "revision": "05a4e4dc754d26b40580f48e426feff8"
  },
  {
    "url": "/_nuxt/e6a19ecbeaf9eac2db1f.js",
    "revision": "97acf6e2b35d417f628c88c2ab48cfa1"
  },
  {
    "url": "/_nuxt/ef6446934e117b805c09.js",
    "revision": "f3e71fc9ec5cd26df3a2fcd27170a402"
  },
  {
    "url": "/_nuxt/f1ca3f945c6a69830936.js",
    "revision": "fd3a338fea4ec07b43642f00e3b7fc89"
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
