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
    "url": "/_nuxt/0ecd30867e0c76673a32.js",
    "revision": "f5ebf7f34963124c70465df9f694762e"
  },
  {
    "url": "/_nuxt/0f7e66f782a7ac477fda.js",
    "revision": "c81a440beacf4a46d0660a91c05d8f35"
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
    "url": "/_nuxt/356f271891a8b95f3ffc.js",
    "revision": "b9fe428eee0d2eafe9a7388e31371756"
  },
  {
    "url": "/_nuxt/4621c8a8a1303250b790.js",
    "revision": "f1c664550a05253e4d22fe80f689d969"
  },
  {
    "url": "/_nuxt/4ab1eaac7414000613fc.js",
    "revision": "ef3a2becbe346f6c21f8f66b13c94b34"
  },
  {
    "url": "/_nuxt/7b52e3d8f8dfcee96675.js",
    "revision": "9bbd1804e3d09c96b8a4633169f4a90e"
  },
  {
    "url": "/_nuxt/a6ff42c374af0255e481.js",
    "revision": "640f4fd85812a9c4a8bc7084d61a4d04"
  },
  {
    "url": "/_nuxt/b67c18475cd77a811630.js",
    "revision": "0b0854892aa0d19978956f1e40af41d2"
  },
  {
    "url": "/_nuxt/ce4f102db867c4df07d6.js",
    "revision": "dff105d3540406c2d13a284b8c199a4e"
  },
  {
    "url": "/_nuxt/de6c2e7dbff32ca57342.js",
    "revision": "f2bf8d47e55417c556d1629b73627cdb"
  },
  {
    "url": "/_nuxt/edd90d2f0860a2c2bb92.js",
    "revision": "d7084132cce96ea4dc0470105b63f9ab"
  },
  {
    "url": "/_nuxt/f52073c18025a0a4ac0c.js",
    "revision": "2ad5481a54c8d9c35aafdef22123a069"
  },
  {
    "url": "/_nuxt/f60142e21d16243f6dee.js",
    "revision": "a13d2207196164cd8f2da36bebd5c5b6"
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
