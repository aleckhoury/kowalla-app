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
    "url": "/_nuxt/30467d4455eb78a2f5d6.js",
    "revision": "a08b5c06bd838c7e5851b3f2516bdd90"
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
    "url": "/_nuxt/798078d5103714d882f1.js",
    "revision": "b93e8d93c1de2d991b5c0f1b1eab0442"
  },
  {
    "url": "/_nuxt/7f6d456acfde8dd63d1b.js",
    "revision": "0e092e1ddb3e17d4d6294aa12157d65a"
  },
  {
    "url": "/_nuxt/9d2e6b6ca7db55f70c63.js",
    "revision": "d95ce7c917eea7f33471866bb22fefc3"
  },
  {
    "url": "/_nuxt/bed2d6e7bded19779ff4.js",
    "revision": "d01a4c5c9d10d8bf72b38f634d504ba7"
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
    "url": "/_nuxt/f2a8114ee35e43553f6b.js",
    "revision": "68851616f309a9e086139a87c124131e"
  },
  {
    "url": "/_nuxt/f46dc63d37307e255bcd.js",
    "revision": "23c0f146bbd6fde36417b7b6d404ae02"
  },
  {
    "url": "/_nuxt/f5ebdcde9b79f5c37b41.js",
    "revision": "31eeeea86203e447eba44e659095fc9c"
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
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
