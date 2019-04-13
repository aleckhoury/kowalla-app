importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e17eab339b9be8779cb.js",
    "revision": "543b6f1cffd5341a8d0e6aa4305e02ca"
  },
  {
    "url": "/_nuxt/2541828d3aaf6307f2cb.js",
    "revision": "95755affcd214197c7959f0a5bfdabfc"
  },
  {
    "url": "/_nuxt/27b16985fb1ed4bd960f.js",
    "revision": "4d0194aed45f9b588f257eac190e246b"
  },
  {
    "url": "/_nuxt/4a2074387bc58753aebd.js",
    "revision": "bf6b8aa339fdfe2e4d43c8888acc3fb1"
  },
  {
    "url": "/_nuxt/5097926fefc750115c8a.js",
    "revision": "7afacb0a82212400ad23b40a5d5ad329"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/6bfadd37a61149833dd4.js",
    "revision": "76d78dd6b60402a913097d99d38dedca"
  },
  {
    "url": "/_nuxt/77421774ca2ec8a66890.js",
    "revision": "73e5a37bfbb1c01638acf68eeefb66c2"
  },
  {
    "url": "/_nuxt/7f1110347a03d4292b12.js",
    "revision": "dda2fdd2df116646f1855b39eb43be65"
  },
  {
    "url": "/_nuxt/862bdaaa4e06b5b2dbfc.js",
    "revision": "dca04b657745fc5de95c8a6bae6f5c92"
  },
  {
    "url": "/_nuxt/8e43f8876fea1e9e22f2.js",
    "revision": "f7a309ac20a43704c5316d0a9bc7d800"
  },
  {
    "url": "/_nuxt/9a9dc59d37995c64b22f.js",
    "revision": "e013c8485364130ab89871fd592f17e8"
  },
  {
    "url": "/_nuxt/a71877faae9ae02eb88c.js",
    "revision": "9ff91a228ff7c32ec118f1671a5ef90f"
  },
  {
    "url": "/_nuxt/b2ebe539803566a048ba.js",
    "revision": "8f5b11f70d1729167e7edfd67fd37dc4"
  },
  {
    "url": "/_nuxt/bb454edc4eecb670efc0.js",
    "revision": "00c1f073adbfb57c8557604b8687e406"
  },
  {
    "url": "/_nuxt/c33dad0da3a0c8784b7c.js",
    "revision": "653bf86e744b96cac9e572249e5ac4e7"
  },
  {
    "url": "/_nuxt/cdcae7db54674ddcc948.js",
    "revision": "3a6adb4ba8cdf2ccfd578f7e86560da1"
  },
  {
    "url": "/_nuxt/d994df426fa41c8a3c54.js",
    "revision": "2802929897fd43efbffb516ef4313be9"
  },
  {
    "url": "/_nuxt/f3aa9b73eea829a7b213.js",
    "revision": "6145c587594b11f492e3a068c9fa9e4b"
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
