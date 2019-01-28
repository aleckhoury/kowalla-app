importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a8fd5ea5df9c63f8cb8.js",
    "revision": "5d3c1b8c9c107472c6e1ad5ae2c044fd"
  },
  {
    "url": "/_nuxt/24cc213631ae88ef97de.js",
    "revision": "06fde578da2f27adb46bc46395246446"
  },
  {
    "url": "/_nuxt/4cac39c4349a7658130d.js",
    "revision": "86e868280f1eda8bb71684c90c1b8706"
  },
  {
    "url": "/_nuxt/4e8d8caecba774ca2d90.js",
    "revision": "de5bf4f01a89e5cb2f0d623f8b631d3a"
  },
  {
    "url": "/_nuxt/6a7fa0504d8a0ec62ba0.js",
    "revision": "29e9ee8aec45c99e19da7fd2850e26b2"
  },
  {
    "url": "/_nuxt/88f742215b323e33826e.js",
    "revision": "638134e7fddb49475c149001aedfc58a"
  },
  {
    "url": "/_nuxt/8b97427c0301673968ed.js",
    "revision": "804ef24e9f2a45285cdef149462fbe2e"
  },
  {
    "url": "/_nuxt/8f23ebfe6b20a300cf30.js",
    "revision": "9e3d0d73044a820988b3e05609da2a46"
  },
  {
    "url": "/_nuxt/92e013a7b4b142170bcc.js",
    "revision": "160eeb0d0e287e010d6b4853d5434a8a"
  },
  {
    "url": "/_nuxt/d65fed211a8c17e394cc.js",
    "revision": "cfdaf226916132961d1ba9680558facd"
  },
  {
    "url": "/_nuxt/ef370a7b67bda80fbe11.js",
    "revision": "53be5fbf35b71763f91fea92c9006f46"
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
