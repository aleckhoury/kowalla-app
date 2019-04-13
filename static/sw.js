importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08ccc0898d6602401241.js",
    "revision": "3f026700acb412cd69ea91f182a4a996"
  },
  {
    "url": "/_nuxt/552a67ad122fe293a5cc.js",
    "revision": "f0d1134e7f1adceb740f878fb58d0e68"
  },
  {
    "url": "/_nuxt/5c516779d51a3cdc8265.js",
    "revision": "de707285356a6f96810c3ed5b105f0f7"
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
    "url": "/_nuxt/9901a97c4fc76415ecea.js",
    "revision": "a681949e2bfc6ad485916373cc80ded3"
  },
  {
    "url": "/_nuxt/a024c03ba132a6849a5b.js",
    "revision": "c6e1d1bdc75e24c14c4b4ef7321dbd68"
  },
  {
    "url": "/_nuxt/a16973def3cf705bcd6f.js",
    "revision": "8df5498b451a0ce0e1c2a48b7d66ccb3"
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
    "url": "/_nuxt/c259ed6467a1a86c35ac.js",
    "revision": "4f0463287ec5664d2b76f49cf31db2b2"
  },
  {
    "url": "/_nuxt/e0cef6b117bfa1473416.js",
    "revision": "6619fd84eb27ad9f01f24d61b4c55ebe"
  },
  {
    "url": "/_nuxt/e3356e7c111575091c8a.js",
    "revision": "9e46e5f05bb2715987bd44739d5a880c"
  },
  {
    "url": "/_nuxt/ee85020154d4b00a7d9e.js",
    "revision": "56723c7caa73ed65935a917952143597"
  },
  {
    "url": "/_nuxt/fcb08a348ff0bf1eef17.js",
    "revision": "6095b71cc0bf33c80517cad330daca69"
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
