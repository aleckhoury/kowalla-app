importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e06ac4553902fa0690f.js",
    "revision": "8c43508c17f04b047510efbbfdae0ce2"
  },
  {
    "url": "/_nuxt/12fd748bdd1beb8e52cc.js",
    "revision": "54265d94b949f541d3a891ce0b87da64"
  },
  {
    "url": "/_nuxt/188111dde6a63867ea6d.js",
    "revision": "0ffb20f54d023d7bd80c4282619ea5b9"
  },
  {
    "url": "/_nuxt/19c492e025f5b2ee8fc8.js",
    "revision": "f0d34ae6dc8204cb18c2250bb6764bf0"
  },
  {
    "url": "/_nuxt/2258393c7a4e00c26e4d.js",
    "revision": "799d4bc4d0685aa2dc36fe1f535244d0"
  },
  {
    "url": "/_nuxt/228d9ecd20f09fab604d.js",
    "revision": "f33bca3c5896b3fb368647e3cee1e2e8"
  },
  {
    "url": "/_nuxt/347f5399dfbdd999fa8f.js",
    "revision": "1272680710d08cbedd648a94f4d32709"
  },
  {
    "url": "/_nuxt/5fbc4459461944858791.js",
    "revision": "6e6cd525e8f52efa63bbc4e17a2d6fb3"
  },
  {
    "url": "/_nuxt/6e62bf22eb6be301d163.js",
    "revision": "0a9d9cc2c97c719b4e3284b45c497657"
  },
  {
    "url": "/_nuxt/80d848da1b54ac55e22a.js",
    "revision": "80b90bd798ccd8e2804d3a683813180c"
  },
  {
    "url": "/_nuxt/a39ce7661a19af603fce.js",
    "revision": "6d87a348d55247eb996b1ae9f8a403f6"
  },
  {
    "url": "/_nuxt/adc8f4b0aadc22808889.js",
    "revision": "f40344cf47c39967e065754b74dc6bcb"
  },
  {
    "url": "/_nuxt/b02d4e1b0d568e4c80da.js",
    "revision": "4dd294d7c69780596f0d0d7b23f8b9fc"
  },
  {
    "url": "/_nuxt/c7f158197d39425049b8.js",
    "revision": "5e948afdd251d7349c670cacfa393305"
  },
  {
    "url": "/_nuxt/ccd3e4b4e94b48a31ed8.js",
    "revision": "08baa27723298b3608b42e91cc1d4a70"
  },
  {
    "url": "/_nuxt/fb73474d1a9a9cfdf267.js",
    "revision": "4acda82eeb28e0e61b348308a4e0412d"
  },
  {
    "url": "/_nuxt/fd4b50f4d2ce5851c729.js",
    "revision": "ff40200d04e24d5d18aecf1acb8baec5"
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
