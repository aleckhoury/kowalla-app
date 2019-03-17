importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/010205bee1654d227585.js",
    "revision": "dec346b96c3aac3f4d6f771626d6e518"
  },
  {
    "url": "/_nuxt/0453cdce1818d6654e37.js",
    "revision": "d086c6b7cfd561188adaedc6649548a5"
  },
  {
    "url": "/_nuxt/0d9e7a88ce94e0d5923e.js",
    "revision": "73629d057af7081716206f119c3f97cf"
  },
  {
    "url": "/_nuxt/126055a2a57bb3ae3aa8.js",
    "revision": "4ace078524c87c8414c27779ce7d8050"
  },
  {
    "url": "/_nuxt/15a0a1292b7c4b0bafcc.js",
    "revision": "ad2c00b02d9ed12a5aa50700cb81a7b8"
  },
  {
    "url": "/_nuxt/1c0360a85256a0eb5c74.js",
    "revision": "a90e32a501c29c32a0e50e46b38c73bf"
  },
  {
    "url": "/_nuxt/1f2a15e30b1b01d481f6.js",
    "revision": "7bbb331292a1732927a86ec0715511b5"
  },
  {
    "url": "/_nuxt/29597e56942b5ed5c703.js",
    "revision": "00350882b79ce09aa8ebbc7dff39fae5"
  },
  {
    "url": "/_nuxt/4aa7be44a22ec00e7789.js",
    "revision": "cf29d75ff7f921be10669e5dd652e526"
  },
  {
    "url": "/_nuxt/566a0dccc971ad415a77.js",
    "revision": "b05e94d64b3cb6a4d04b9cc6f8b9330b"
  },
  {
    "url": "/_nuxt/629fbc8f20497418e770.js",
    "revision": "1d01dd6dff942b9f3f02045334c13233"
  },
  {
    "url": "/_nuxt/6e5571638e326891425b.js",
    "revision": "773f686e9f5b0a0beed44c519d242745"
  },
  {
    "url": "/_nuxt/7228d099e8dcb347488f.js",
    "revision": "9cfef9acf417e558c86c966554d8a8c5"
  },
  {
    "url": "/_nuxt/745e9cf89f0d316e585a.js",
    "revision": "0780d82e74f8fb38431aac559f515449"
  },
  {
    "url": "/_nuxt/814f7e869ee8077ecaca.js",
    "revision": "0494ddf6ee479596e37c8c9efa359d3e"
  },
  {
    "url": "/_nuxt/a516e93634dfff205afd.js",
    "revision": "1507dd5e2194b30971abe2723b531b00"
  },
  {
    "url": "/_nuxt/a7a2b1b2318b33dfa6c5.js",
    "revision": "54c342d72a86dd4656e235ce404ed44b"
  },
  {
    "url": "/_nuxt/dc6542fda4cca0a36849.js",
    "revision": "fe61d64d34fafdb4fc13bb0a7e7ff735"
  },
  {
    "url": "/_nuxt/e03d19735a4239f28928.js",
    "revision": "eabe501b6cd31679fd62b38df3b24c54"
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
