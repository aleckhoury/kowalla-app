importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02dbc7e1fdf375c9fd79.js",
    "revision": "053124311f3425865804cd71ec150093"
  },
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/30d735e074b355c2f99d.js",
    "revision": "1806efb989d59ddcfb195a2d1483591c"
  },
  {
    "url": "/_nuxt/337d3d90419233d3c2c3.js",
    "revision": "4e42956789ce26e01944926fcf79f756"
  },
  {
    "url": "/_nuxt/3b41e4bf152efb1694f1.js",
    "revision": "eb9243d0be6d672a8039782f49016968"
  },
  {
    "url": "/_nuxt/4753b5f314772915529b.js",
    "revision": "9e2892dcc5231cac9f0d6e00f34eaf0d"
  },
  {
    "url": "/_nuxt/57458290e5c2d769fd75.js",
    "revision": "8dffd417f65fca22cab04574a2b5e96e"
  },
  {
    "url": "/_nuxt/684b39c54c3f9506a044.js",
    "revision": "12bebab1fc1db7f64cc1f0f3c74e1c6d"
  },
  {
    "url": "/_nuxt/87e5c806774136223b98.js",
    "revision": "369d55a70a9aebf0a0758105b5b6e50a"
  },
  {
    "url": "/_nuxt/98201be12cbe5232e4e6.js",
    "revision": "5788d0927016480c0a4b697754b8f995"
  },
  {
    "url": "/_nuxt/9a5a1ebe3903930ef47e.js",
    "revision": "fc559452ab0a24a8fd410cb5b313f93b"
  },
  {
    "url": "/_nuxt/a92dbcca352fc333d9c0.js",
    "revision": "f097d9b545087e48d1346492ca502e0c"
  },
  {
    "url": "/_nuxt/a9ee31278f31953436bf.js",
    "revision": "439d0bc9df8c17c791f41157678cff0c"
  },
  {
    "url": "/_nuxt/bba9583e53aca3878bd1.js",
    "revision": "c823478d45af9083136d3fd96dc754d0"
  },
  {
    "url": "/_nuxt/c717a3e330b8c42c667b.js",
    "revision": "bdd1413b17932f5c01ad9127a1c56ffe"
  },
  {
    "url": "/_nuxt/ce5f77e9b94be4cd60d2.js",
    "revision": "27e01952a6a2616759c608c6d6143186"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
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
