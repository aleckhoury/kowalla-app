importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07844485485b2e5724a3.js",
    "revision": "1e6ec9190eb6174a21a91d9315013566"
  },
  {
    "url": "/_nuxt/1e17eab339b9be8779cb.js",
    "revision": "543b6f1cffd5341a8d0e6aa4305e02ca"
  },
  {
    "url": "/_nuxt/2541828d3aaf6307f2cb.js",
    "revision": "95755affcd214197c7959f0a5bfdabfc"
  },
  {
    "url": "/_nuxt/2bbfcdceb554ef6c5a18.js",
    "revision": "b4c6963b41741004e5439d3eb933dd2d"
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
    "url": "/_nuxt/77421774ca2ec8a66890.js",
    "revision": "73e5a37bfbb1c01638acf68eeefb66c2"
  },
  {
    "url": "/_nuxt/7f1110347a03d4292b12.js",
    "revision": "dda2fdd2df116646f1855b39eb43be65"
  },
  {
    "url": "/_nuxt/88cbe60ffd71589f96e0.js",
    "revision": "88dae286e5e4682fab7627b70962dec4"
  },
  {
    "url": "/_nuxt/8e43f8876fea1e9e22f2.js",
    "revision": "f7a309ac20a43704c5316d0a9bc7d800"
  },
  {
    "url": "/_nuxt/9a6eb40a932997abf92e.js",
    "revision": "3f682fef305654f9428a8529a19ea230"
  },
  {
    "url": "/_nuxt/a71877faae9ae02eb88c.js",
    "revision": "9ff91a228ff7c32ec118f1671a5ef90f"
  },
  {
    "url": "/_nuxt/bb454edc4eecb670efc0.js",
    "revision": "00c1f073adbfb57c8557604b8687e406"
  },
  {
    "url": "/_nuxt/d2085b75fd5d38a9cb45.js",
    "revision": "9b3264d9fe5384116f8fe6bd60b0204f"
  },
  {
    "url": "/_nuxt/d516710004f65c086e66.js",
    "revision": "0ad218fd24e5cb50efdf245b64792f54"
  },
  {
    "url": "/_nuxt/d994df426fa41c8a3c54.js",
    "revision": "2802929897fd43efbffb516ef4313be9"
  },
  {
    "url": "/_nuxt/ec24497fc20af7f03822.js",
    "revision": "2eb26df82c8ad4e4e8bff9e4a9c4fe74"
  },
  {
    "url": "/_nuxt/f21dce6bfe3df653dfe2.js",
    "revision": "faa8597e8cbd03598fa857163190f158"
  },
  {
    "url": "/_nuxt/f489d5c1bd4c4f39d354.js",
    "revision": "d255b20a9684d6cccb23a6275b013bd4"
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
