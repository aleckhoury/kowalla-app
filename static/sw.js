importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/132e6c6ab1bbe076934d.js",
    "revision": "b339222d0ccc6fe7cbf6bd9676c1acdd"
  },
  {
    "url": "/_nuxt/286f5ee7fddb85ca1e7a.js",
    "revision": "c8c797801ebe92a9befeb14fbfd5344f"
  },
  {
    "url": "/_nuxt/3b41e4bf152efb1694f1.js",
    "revision": "eb9243d0be6d672a8039782f49016968"
  },
  {
    "url": "/_nuxt/4369b7eb0caaa1af2335.js",
    "revision": "7425a6f2bea4b4ce4742a95eafa3577a"
  },
  {
    "url": "/_nuxt/4b247203b9b481794c45.js",
    "revision": "dff236989926ac7d3aef20182916b1bf"
  },
  {
    "url": "/_nuxt/5c556ab914fe65b4b924.js",
    "revision": "d143ea922c4525d13a18e6268257226d"
  },
  {
    "url": "/_nuxt/5eb9b77b9249623dd242.js",
    "revision": "66520c98535027f31e39551c48839a3f"
  },
  {
    "url": "/_nuxt/798c16280bc1713dc2d5.js",
    "revision": "4a75d4a0d8948de0d458ca945365a0a8"
  },
  {
    "url": "/_nuxt/7e656c5a81b52d485e38.js",
    "revision": "1b284c1c8699ec25bb7f8c6daf247317"
  },
  {
    "url": "/_nuxt/979877d5c035ecc68e53.js",
    "revision": "e44dbb36b631cd63df229c6f988a0021"
  },
  {
    "url": "/_nuxt/9798ba7bf9d34f21309e.js",
    "revision": "d12495920d4138c6f9e17d1e8f81a05d"
  },
  {
    "url": "/_nuxt/bfe85cb99318f80ac5f9.js",
    "revision": "7d3f3c8f987d7d3eb149f7f4970b67a4"
  },
  {
    "url": "/_nuxt/d183be4a941a5eb7ab49.js",
    "revision": "6d446a5bcd538c461a8e3d1188123787"
  },
  {
    "url": "/_nuxt/f8f11b8e190fb50ef0e8.js",
    "revision": "fbef84c823a3a9bf3b5f9fc3b4dcc71c"
  },
  {
    "url": "/_nuxt/f9ceb182372a016f2034.js",
    "revision": "a3e79ac40c85aadf5b51fe407607633a"
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
