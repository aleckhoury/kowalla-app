importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04b760ecf5f665c4f930.js",
    "revision": "659150f31856ac5ef00483ec81a8b434"
  },
  {
    "url": "/_nuxt/05cb866e80c2e0e5a5ee.js",
    "revision": "ebd08b7503353cd9a8dddbf8ec407078"
  },
  {
    "url": "/_nuxt/1f9a85e9dd50770c941d.js",
    "revision": "1fefc7be0d43d050616874c7edbfca41"
  },
  {
    "url": "/_nuxt/2b1fe7cc3368960fb986.js",
    "revision": "742ccb18bf024fd2dcc095bee6c64859"
  },
  {
    "url": "/_nuxt/319219a1329c12ef9805.js",
    "revision": "cbb0417b8632c7f420660fc4491eed04"
  },
  {
    "url": "/_nuxt/54e486a70e0615fdeb78.js",
    "revision": "dd2a83dcf56c20faebe39a90a5122365"
  },
  {
    "url": "/_nuxt/5d05ffc0b3169df98c84.js",
    "revision": "996834c535eb336d9ff8a543fd6239c7"
  },
  {
    "url": "/_nuxt/85d0e176d69faa6931d6.js",
    "revision": "44e452192be56a53e1c712878d56a62e"
  },
  {
    "url": "/_nuxt/8dfd7db7c5aca968a0f2.js",
    "revision": "a6768d16159c51c02c4d1369869df14b"
  },
  {
    "url": "/_nuxt/95d67243255a5596d25c.js",
    "revision": "b572efb95bbe9ee28897f90e936de516"
  },
  {
    "url": "/_nuxt/961f8ae0c035fae879dc.js",
    "revision": "bdefbe53a925ef56ee2b3bd58c3b1a83"
  },
  {
    "url": "/_nuxt/992331d9a19220409bfb.js",
    "revision": "97ba7f1578f86dccb9cc6b708c116ed9"
  },
  {
    "url": "/_nuxt/d41deaafc13e0bff79af.js",
    "revision": "ef66278a8382edd9e82181611c003b30"
  },
  {
    "url": "/_nuxt/ddb64be24b70d62e1f5a.js",
    "revision": "cf8e66c03102f0db86433af7b67f2c08"
  },
  {
    "url": "/_nuxt/e831a10f20464f4e42b1.js",
    "revision": "9c3383882636a45b68dbe99643655613"
  },
  {
    "url": "/_nuxt/f0f7a43226acdf2dd469.js",
    "revision": "410e44f414bd8bbb381d43dfb5052edb"
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
