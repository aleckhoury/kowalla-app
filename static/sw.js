importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/138ef96328720cc4f18c.js",
    "revision": "3a4f9a9b460748d9be1515eece4390ec"
  },
  {
    "url": "/_nuxt/1f5f8a0372a4b901475d.js",
    "revision": "cb9c46b295d416c93ee27f4a52e22dcb"
  },
  {
    "url": "/_nuxt/2049ca2d2681156af333.js",
    "revision": "2e7021d5ae137bc6cfc32bfde5051297"
  },
  {
    "url": "/_nuxt/2560fcdac7a7de7ebf82.js",
    "revision": "3baf3bfd0e44c76fbbb7c2e6b4553e17"
  },
  {
    "url": "/_nuxt/3060071b1fe1dcd6ef0d.js",
    "revision": "0d6354fbe5f180c05a088ba42351530c"
  },
  {
    "url": "/_nuxt/421989f9e5347f6ff4e6.js",
    "revision": "9bad55f263c9a7c0d24abf92e0ba6f39"
  },
  {
    "url": "/_nuxt/4bc4a2d9a9c94d595aa0.js",
    "revision": "8d2fece6bc669e2388c187b970496188"
  },
  {
    "url": "/_nuxt/605bdb4271a0d58387f0.js",
    "revision": "28e201f6b2115034e2e39ed88086a908"
  },
  {
    "url": "/_nuxt/6ab0d88ec3f6cc743334.js",
    "revision": "a1efb0fab99472fb2b3dc6d9ee6d447c"
  },
  {
    "url": "/_nuxt/7f6d456acfde8dd63d1b.js",
    "revision": "0e092e1ddb3e17d4d6294aa12157d65a"
  },
  {
    "url": "/_nuxt/c996cb3ee4adda9f8c1c.js",
    "revision": "c9e53e88987142d4ffb1698e1fe8290f"
  },
  {
    "url": "/_nuxt/ca6ab1d8a14e5d829984.js",
    "revision": "b9f3fe62b1c1edbffb676ef9f822535e"
  },
  {
    "url": "/_nuxt/cc2694f81d68d8722021.js",
    "revision": "f8acf5bfcc7357f839d36be52e0e5be0"
  },
  {
    "url": "/_nuxt/dea946df9b3abe2e9a93.js",
    "revision": "b22cff7c20a409d9411ad7da37f2e8c0"
  },
  {
    "url": "/_nuxt/ea019e95fcd6d1bcb927.js",
    "revision": "8ca75272a14b22c363ef71d942bfb770"
  },
  {
    "url": "/_nuxt/ef361723c42eb86a9b32.js",
    "revision": "3664a60a9d9e6c37f6e1806df110c25d"
  },
  {
    "url": "/_nuxt/f2a8114ee35e43553f6b.js",
    "revision": "68851616f309a9e086139a87c124131e"
  },
  {
    "url": "/_nuxt/fa9c6dc0bb4c27e880ff.js",
    "revision": "c9c01d5b9d1b8c793d827cec4ffc8735"
  },
  {
    "url": "/_nuxt/faa104dfbbbdc0f42b95.js",
    "revision": "e404fdddd25a76aa8f9d80e6f8e9ccad"
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
