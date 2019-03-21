importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d9e7a88ce94e0d5923e.js",
    "revision": "73629d057af7081716206f119c3f97cf"
  },
  {
    "url": "/_nuxt/1adabc6af45dbf02fc31.js",
    "revision": "6bd010254ab3a7e673daea09d93b6e29"
  },
  {
    "url": "/_nuxt/21e6d77841c3d5734159.js",
    "revision": "d991d449d37423ed61fb0d337d74b36e"
  },
  {
    "url": "/_nuxt/2dc0b7ebb89ef078c5ef.js",
    "revision": "278ff26805ec374dab8552cbc7e4515b"
  },
  {
    "url": "/_nuxt/551609d7a1be8bfb76ff.js",
    "revision": "e521ac02cfb3578e50a2e52410c19f32"
  },
  {
    "url": "/_nuxt/629fbc8f20497418e770.js",
    "revision": "1d01dd6dff942b9f3f02045334c13233"
  },
  {
    "url": "/_nuxt/800beeb038ede135901b.js",
    "revision": "6f1785c1eeca13185807cbcd8f7e9d46"
  },
  {
    "url": "/_nuxt/991d14e640bdddb81f94.js",
    "revision": "cd3cf4818ee0d9a9d34a3d2c8585245f"
  },
  {
    "url": "/_nuxt/a37ee27d83b90bab3aa0.js",
    "revision": "9df3f677dd45e2246e9f5146c7547b06"
  },
  {
    "url": "/_nuxt/a8f3a1dd658bd3078277.js",
    "revision": "d0281450d201b6bf8d8ee69afb09139c"
  },
  {
    "url": "/_nuxt/a9a13cb5cd88e750cd01.js",
    "revision": "982e06c88d0dddeb7bc9a392b9396957"
  },
  {
    "url": "/_nuxt/ab9a8c12887fa153fbcd.js",
    "revision": "cd9a4cc46916aa504fb1fa69b13951be"
  },
  {
    "url": "/_nuxt/bf4522eeb56af396606a.js",
    "revision": "5bb9dba469fd7c07c9c8496465cb91c3"
  },
  {
    "url": "/_nuxt/bf5833e45c0333f0a6d3.js",
    "revision": "228469a5fcddb00ba4f66107d3fc5cfe"
  },
  {
    "url": "/_nuxt/dd0880949143301e1bf3.js",
    "revision": "436bdbaff040480e480af216043e805d"
  },
  {
    "url": "/_nuxt/e5f666ae28cc7c6ba35f.js",
    "revision": "29717c05e25bafdac83f3e952400fb28"
  },
  {
    "url": "/_nuxt/f238cf1a7ed6fdeec4e7.js",
    "revision": "939d22586e000a5709299a32c8c14b7c"
  },
  {
    "url": "/_nuxt/f8de30b4596c66928caa.js",
    "revision": "97ee85afa5906f43d236271dee8a8f88"
  },
  {
    "url": "/_nuxt/fb899bcf287f51228a25.js",
    "revision": "e7c84f8702625e8ed1c21f8fa7ba24d4"
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
