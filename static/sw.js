importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0500e116a510bd1ec594.js",
    "revision": "ff5bfa4fc40b9647be4048d1b258c73e"
  },
  {
    "url": "/_nuxt/23315b6032c078c3633d.js",
    "revision": "f8c92220cd55c0d9b7778d51964d91e6"
  },
  {
    "url": "/_nuxt/3629a61d67635b4a35e2.js",
    "revision": "00a31d055ce27c97aa28c62df94f6b32"
  },
  {
    "url": "/_nuxt/48b048fa98980ea52b72.js",
    "revision": "4a3f279cd96146fd0ad4542e1e8cab20"
  },
  {
    "url": "/_nuxt/56d34fc05de3817e255d.js",
    "revision": "457d30bdb44ecd3580a25e63a803358b"
  },
  {
    "url": "/_nuxt/57c4f4c6914cdc2b8969.js",
    "revision": "8009b0a10d96ba115574079b82b03132"
  },
  {
    "url": "/_nuxt/5a9db79c3df4bcb79f4a.js",
    "revision": "4c37291a0f832a92454a0bebe8d36306"
  },
  {
    "url": "/_nuxt/8e80b89f1fbe58998759.js",
    "revision": "8991375d207162340dd7e6837b9f45a9"
  },
  {
    "url": "/_nuxt/97f0e19f65ba4a20e537.js",
    "revision": "ea4090fb38728a11b7dc50cd9740f0f1"
  },
  {
    "url": "/_nuxt/a7ee4c573c7c91df41e4.js",
    "revision": "f2158ff5fd73856dbbad23e7b9207194"
  },
  {
    "url": "/_nuxt/c72d49666b99a97fc939.js",
    "revision": "10293695f65e52fa860a43ccd6c3d2cd"
  },
  {
    "url": "/_nuxt/c996ddd44460caad752c.js",
    "revision": "07967e8c93131d909bfaf00e16c2dd5d"
  },
  {
    "url": "/_nuxt/cbbc9fdd3ce30dbdb35e.js",
    "revision": "a36d428be5cf3da0fb488335dc255ba5"
  },
  {
    "url": "/_nuxt/e5b4216ccdccc8db8aa6.js",
    "revision": "41369ab0ab8b2a63403b303505570e41"
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
