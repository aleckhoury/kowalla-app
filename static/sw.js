importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "e46c516f453eee53a351331a79199af6"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "09511b9109c14d39d72337fd9b8ef83b"
  },
  {
    "url": "/_nuxt/pages/beta/focus/_username/index.js",
    "revision": "afdad7157b89f9a55ce07f3cdb8c67fb"
  },
  {
    "url": "/_nuxt/pages/beta/index.js",
    "revision": "478119f54a8e63b326dfee2d32fa2cf6"
  },
  {
    "url": "/_nuxt/pages/beta/index.pages/beta/project/_projectname/index.pages/beta/project/_projectname/posts/_postId.7f204e38.js",
    "revision": "22cff08a9501233c4a6aae70757ea455"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/Edit.js",
    "revision": "4fd9e5ff496b344f4e59cf56dd34db95"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/index.js",
    "revision": "20d54d2e939bab6a42588c70228245b4"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/posts/_postId.js",
    "revision": "c333cda16525202133473ec1714d5eb3"
  },
  {
    "url": "/_nuxt/pages/beta/signin.js",
    "revision": "e298a6683ace34faae5ae3658fca0330"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/Edit.js",
    "revision": "ff4b1321695af06bed35b675673b0b7c"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/index.js",
    "revision": "386d2183b109bcb448d635161a4ec376"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/posts/_postId.js",
    "revision": "04c06b52e4595f6bc0cf8838cd0d40b0"
  },
  {
    "url": "/_nuxt/pages/beta/user/_username/Edit.js",
    "revision": "1d8d79f5ce7954bbe7374c1995fcfc68"
  },
  {
    "url": "/_nuxt/pages/beta/user/_username/index.js",
    "revision": "276e23f7744eedc177c9d574fd04b39f"
  },
  {
    "url": "/_nuxt/pages/index.js",
    "revision": "64722b3eacb5dcad544dc145eaab0f87"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "7c1a62af8026ed897ae314a806400af3"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "4cd210cc2d855a5b550ad1f7a328be2f"
  },
  {
    "url": "/_nuxt/vendors.pages/beta/index.pages/beta/project/_projectname/index.pages/beta/project/_projectname/posts.9ecc6277.js",
    "revision": "4e02b9e2546e07b242981185254e7d84"
  }
], {
  "cacheId": "Kowalla",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
