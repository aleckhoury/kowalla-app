importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e3214efee2695055ac9.js",
    "revision": "9a5e00ee716cb7b4c3f37c53a6b40834"
  },
  {
    "url": "/_nuxt/234c5b3995028b3718af.js",
    "revision": "f2392aa6d1e2fb0a513b17cc58641e3d"
  },
  {
    "url": "/_nuxt/34fe764f12c14f93e066.js",
    "revision": "3e08def305433c21d71a685e2a5849dd"
  },
  {
    "url": "/_nuxt/3c8f74222b4521e4ff34.js",
    "revision": "75f18ba8d9ed915fe8962b7d45d732f6"
  },
  {
    "url": "/_nuxt/510e8e78892ecb65ae03.js",
    "revision": "0f7d501051ff8541fe56e8eb990743ca"
  },
  {
    "url": "/_nuxt/698ca87950b094b2a7f6.js",
    "revision": "d20fcb35a18cf816af5c28b01914f813"
  },
  {
    "url": "/_nuxt/820bf334da82906a0de9.js",
    "revision": "b3d928251b3b14df776f9c8777c9c600"
  },
  {
    "url": "/_nuxt/9f92adb4a2f25fc423f7.js",
    "revision": "e409b1f8ed9da26c45a7a0d9c984cf77"
  },
  {
    "url": "/_nuxt/a93296e53131b81a39f7.js",
    "revision": "12d3286f8d7d7afd59049fe73ea63b20"
  },
  {
    "url": "/_nuxt/ab957686c39e26863e33.js",
    "revision": "fa1acab75320899abc096ae088aa8e90"
  },
  {
    "url": "/_nuxt/c0e259165736b0b63a59.js",
    "revision": "1e40683c87fc6b1ff53c4eef32c24f37"
  },
  {
    "url": "/_nuxt/ce91517510af7be7ef35.js",
    "revision": "ccf265180668b6dbc9271664f3da243c"
  },
  {
    "url": "/_nuxt/cf14410fef02a4ca685e.js",
    "revision": "b1f8519fecd5fe25fa8a16995ee472cd"
  },
  {
    "url": "/_nuxt/d015975d5e6c4f858cd5.js",
    "revision": "01fbdc587626708d77c125530d820e6d"
  },
  {
    "url": "/_nuxt/d3d4598f70573f3d3fd4.js",
    "revision": "b86d658de88105cadce758f442df8778"
  },
  {
    "url": "/_nuxt/dbeebbec5ddc0dd5b11b.js",
    "revision": "aa976e53e6efba216a25d8c18a01aa98"
  },
  {
    "url": "/_nuxt/e929b4d9cf54c85b0173.js",
    "revision": "61c5be1ba09d234dd01fb00e26569328"
  },
  {
    "url": "/_nuxt/ee23f315a1b2af5c20cb.js",
    "revision": "819e749e4fd3ab714e891de3dfc297c9"
  },
  {
    "url": "/_nuxt/fc9d65a9fb66cf14b49d.js",
    "revision": "93d752f9ec7d1c70d326d8e51717ee4a"
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
