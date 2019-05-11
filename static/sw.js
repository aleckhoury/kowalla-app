importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2378ab0c3b067fb330c7.js",
    "revision": "30fc413e2f75efc9fd4b55649a34d2ef"
  },
  {
    "url": "/_nuxt/2d55553313cdcc236c3a.js",
    "revision": "69478c9583d467915aadd28d6e2a37e6"
  },
  {
    "url": "/_nuxt/30ce7c2cc1be9474375c.js",
    "revision": "863b003aa853b23b021ab20bed349415"
  },
  {
    "url": "/_nuxt/3f313523c3b2cf60d278.js",
    "revision": "575a0ac77ed2523a32828947ac1af30e"
  },
  {
    "url": "/_nuxt/64f9edf23c93a6c3b4fe.js",
    "revision": "65720a9c582f81a9c51f74e5e08ad9e1"
  },
  {
    "url": "/_nuxt/69b9d0f967d7f3543072.js",
    "revision": "a8a97976e11ca7e51892863b8fed81b2"
  },
  {
    "url": "/_nuxt/69e20937b9250ade9df7.js",
    "revision": "2519809d9cf49ea1b990c4d979186c48"
  },
  {
    "url": "/_nuxt/71a80a143297a82ae01c.js",
    "revision": "a34ee443edb544d35188a792c92087a2"
  },
  {
    "url": "/_nuxt/749d66d9370bd793dbef.js",
    "revision": "c3b670b2f0519542033dd65ffbb00c6e"
  },
  {
    "url": "/_nuxt/80693d352a6f2960c868.js",
    "revision": "59bf17cbff2b727cfa9669ec1522d677"
  },
  {
    "url": "/_nuxt/8b5123b976c7befaf115.js",
    "revision": "d40fafb1ef42dea363b392ab59a74f43"
  },
  {
    "url": "/_nuxt/8c306a59de911717920a.js",
    "revision": "2d966c44b3df1c0289f57d9caf05ff43"
  },
  {
    "url": "/_nuxt/94e0a57a130c0ae47a62.js",
    "revision": "5b171d2967a71dcc5d660bfa95499690"
  },
  {
    "url": "/_nuxt/a4bf93d0ae60d06548bd.js",
    "revision": "4d567108f61c93f7879809a6d2350695"
  },
  {
    "url": "/_nuxt/ba4bb06f84dd3c3ccd60.js",
    "revision": "ff9bb1355c20b21e88def11aa412952d"
  },
  {
    "url": "/_nuxt/bce216a88492c2351490.js",
    "revision": "46a2488da7044e713daeba8ae130d597"
  },
  {
    "url": "/_nuxt/d476730b0db10914aadd.js",
    "revision": "9764594a6dbaf293eac736249472d449"
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
