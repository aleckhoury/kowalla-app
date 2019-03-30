importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04332a0b1865ca19a1cb.js",
    "revision": "6db54f9ea75ca5a1e2c5d9ca7c92be02"
  },
  {
    "url": "/_nuxt/0ab0a2f14045501526a0.js",
    "revision": "61ae918bd443b69a5ae06ad8539701de"
  },
  {
    "url": "/_nuxt/12bcc317664123166103.js",
    "revision": "532755b7a6038f53126d38f2908c74dc"
  },
  {
    "url": "/_nuxt/1e3214efee2695055ac9.js",
    "revision": "9a5e00ee716cb7b4c3f37c53a6b40834"
  },
  {
    "url": "/_nuxt/23865f98753a0f762e29.js",
    "revision": "09fd1ab5290557957c87d6ee1aa4373a"
  },
  {
    "url": "/_nuxt/27fc0a02069ecf63cdfa.js",
    "revision": "e78127f0189e10facd38a330c9b45f1a"
  },
  {
    "url": "/_nuxt/4621c8a8a1303250b790.js",
    "revision": "f1c664550a05253e4d22fe80f689d969"
  },
  {
    "url": "/_nuxt/46455cbc01c8777786b8.js",
    "revision": "5fb028f7584c9a6952ea4dc5a6d9480e"
  },
  {
    "url": "/_nuxt/752b07b46b53f61c1de6.js",
    "revision": "f9adad1621d8a29dd840829783f10791"
  },
  {
    "url": "/_nuxt/7a7c0f10066bee676f08.js",
    "revision": "1ea0c064ba741c0e2c60d79611c1f876"
  },
  {
    "url": "/_nuxt/7b52e3d8f8dfcee96675.js",
    "revision": "9bbd1804e3d09c96b8a4633169f4a90e"
  },
  {
    "url": "/_nuxt/83bd0be4dc5bf8970c35.js",
    "revision": "4dbf5f9aaa2d961406287a0efff1f90c"
  },
  {
    "url": "/_nuxt/b67c18475cd77a811630.js",
    "revision": "0b0854892aa0d19978956f1e40af41d2"
  },
  {
    "url": "/_nuxt/b8a7df804aa4c73f8cca.js",
    "revision": "b138e8d59d30ce315ce991ac50786742"
  },
  {
    "url": "/_nuxt/bcf462192c8702de39ae.js",
    "revision": "0a3f90dd1134f1ea48ffb01f96c555c8"
  },
  {
    "url": "/_nuxt/ce4f102db867c4df07d6.js",
    "revision": "dff105d3540406c2d13a284b8c199a4e"
  },
  {
    "url": "/_nuxt/edd90d2f0860a2c2bb92.js",
    "revision": "d7084132cce96ea4dc0470105b63f9ab"
  },
  {
    "url": "/_nuxt/f60142e21d16243f6dee.js",
    "revision": "a13d2207196164cd8f2da36bebd5c5b6"
  },
  {
    "url": "/_nuxt/febecdbeaa1ed3cd78e8.js",
    "revision": "dc0a4c97087a85f1c45b249f3dcedcfe"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
