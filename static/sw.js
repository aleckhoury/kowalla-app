importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0fd33f102317fbd152d7.js",
    "revision": "ece27a5cc4dbbe0b06be7cb68f94f2a9"
  },
  {
    "url": "/_nuxt/28a810ee4d6527302d3f.js",
    "revision": "1f5817f01fd9831bb845f0b7fe23d671"
  },
  {
    "url": "/_nuxt/3d7583a437d3552a47d4.js",
    "revision": "57011fb0fa76921b3cce3935102fa2b8"
  },
  {
    "url": "/_nuxt/43e48a93ba048bec02ab.js",
    "revision": "9f338ad37120ff6f86559ae7e76830d1"
  },
  {
    "url": "/_nuxt/465a3fd55ecd346982e8.js",
    "revision": "088057f98ccd6f09b31d0602e99bb383"
  },
  {
    "url": "/_nuxt/51da659ba3c0b9132693.js",
    "revision": "00a6efceb3bd74ef5534dfb8d9865cae"
  },
  {
    "url": "/_nuxt/60288cf0ca1d6c751aad.js",
    "revision": "3ad414b769ef42381be6b6796fbf2695"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/7352020efdc79a2b3cbc.js",
    "revision": "5ec066fb89e05d1fb55f7e6d0775f42b"
  },
  {
    "url": "/_nuxt/77421774ca2ec8a66890.js",
    "revision": "73e5a37bfbb1c01638acf68eeefb66c2"
  },
  {
    "url": "/_nuxt/8acbe5bf0feca85a3fc2.js",
    "revision": "772b3766f40093044c2246155a2189c6"
  },
  {
    "url": "/_nuxt/8b433d1b263d65972525.js",
    "revision": "68b0a91fe4e2ba07245e194af42b4d6d"
  },
  {
    "url": "/_nuxt/99f219f04ef90859d1e1.js",
    "revision": "619a47b90755af8c15f8f5a39f173da1"
  },
  {
    "url": "/_nuxt/9f96fb596fe41573242f.js",
    "revision": "84988d431ce5011b30fa49139a27235b"
  },
  {
    "url": "/_nuxt/b3165f3fb2a778365ffb.js",
    "revision": "a71e9df3871dbe8ccce8ec6de983e210"
  },
  {
    "url": "/_nuxt/b6f82331a2b0691142d2.js",
    "revision": "63a032dcae6a46dce363be1106d24449"
  },
  {
    "url": "/_nuxt/dc1dcc8c5d2859a846ea.js",
    "revision": "8f59c908618f92f876c0d122ac4ddea9"
  },
  {
    "url": "/_nuxt/e32c674ed4aa9fcccb74.js",
    "revision": "8be41581702c6545747179459b1000c9"
  },
  {
    "url": "/_nuxt/ffe8abd1e302c21ef34c.js",
    "revision": "feeb588db9aedbb57a27f32189302cf5"
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
