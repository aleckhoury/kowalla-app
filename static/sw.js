importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f7be5a1acef4f8c2ef6.js",
    "revision": "213a5226364fe1d11ac6e72aa0a35cb3"
  },
  {
    "url": "/_nuxt/4b2db3a1c2e55f73027d.js",
    "revision": "abd5a88ab754352fad732f89a6747c64"
  },
  {
    "url": "/_nuxt/5c516779d51a3cdc8265.js",
    "revision": "de707285356a6f96810c3ed5b105f0f7"
  },
  {
    "url": "/_nuxt/5d2da4efd417d319d130.js",
    "revision": "924d6bcd3511fb928a7fddebf69f0e3a"
  },
  {
    "url": "/_nuxt/624ee90762f40fc62e75.js",
    "revision": "bdd30f8d399d503606c9f7b74ed66006"
  },
  {
    "url": "/_nuxt/71b5dd221ff3d34d73d8.js",
    "revision": "e35781e20f5b8f405e4d6c2558d95886"
  },
  {
    "url": "/_nuxt/780ce4ec5b24c4ca008b.js",
    "revision": "9b57b5383ed85c46070bd71e95e117b7"
  },
  {
    "url": "/_nuxt/7bc8742b6e46c80cbf89.js",
    "revision": "b907b752a86543658e717b50933539aa"
  },
  {
    "url": "/_nuxt/7dc586c4932343e2fe42.js",
    "revision": "18a735972eb69ea7a2be378f328513be"
  },
  {
    "url": "/_nuxt/806b9e37ea25f8983cb4.js",
    "revision": "c3a6a3eb9fc81afb00ae0ce991e7439b"
  },
  {
    "url": "/_nuxt/85cc5d370326dcb7a324.js",
    "revision": "2bb561501df6ec5cfc31a2ae232dd22f"
  },
  {
    "url": "/_nuxt/9901a97c4fc76415ecea.js",
    "revision": "a681949e2bfc6ad485916373cc80ded3"
  },
  {
    "url": "/_nuxt/a024c03ba132a6849a5b.js",
    "revision": "c6e1d1bdc75e24c14c4b4ef7321dbd68"
  },
  {
    "url": "/_nuxt/aa00ba1619023e24903e.js",
    "revision": "bfa0f47b25188e9bc868f5b203900845"
  },
  {
    "url": "/_nuxt/b1b0099ba9c6f987dc84.js",
    "revision": "a8947b37591beaf0cdae6e2a5e2e871f"
  },
  {
    "url": "/_nuxt/ba81edd8b1002dff2165.js",
    "revision": "57783e6f1b2aec8f5e1aa5a668d409d4"
  },
  {
    "url": "/_nuxt/dff9972b8dfd76c4c4d9.js",
    "revision": "6fc3ac8b15cfce64c110576ab4c20242"
  },
  {
    "url": "/_nuxt/e0cef6b117bfa1473416.js",
    "revision": "6619fd84eb27ad9f01f24d61b4c55ebe"
  },
  {
    "url": "/_nuxt/e3356e7c111575091c8a.js",
    "revision": "9e46e5f05bb2715987bd44739d5a880c"
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
