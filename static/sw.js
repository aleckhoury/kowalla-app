importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/228f3e174e1977021861.js",
    "revision": "6ed8834e67f6718272027cb22d5cf117"
  },
  {
    "url": "/_nuxt/3ce66588a104dbc2db2b.js",
    "revision": "05047bd1bfbf56e8a26bb509715bde03"
  },
  {
    "url": "/_nuxt/3f99016dc4048d161781.js",
    "revision": "eb7c2ec502599a34c6614f403f12d210"
  },
  {
    "url": "/_nuxt/40e503ac6d8e9c9c6a82.js",
    "revision": "c95630bc80ba14cf27b02abfe96ce492"
  },
  {
    "url": "/_nuxt/433a934ae9288869e119.js",
    "revision": "8d4888b86c0b3de64368c65b94ae0780"
  },
  {
    "url": "/_nuxt/5fea09d5b3d8785fce2a.js",
    "revision": "93e23d67260e129cdc2df07781707d73"
  },
  {
    "url": "/_nuxt/60b8da35ed90d9e32ab2.js",
    "revision": "8425ac43c359e265af2ce20db694066a"
  },
  {
    "url": "/_nuxt/90dddf9c14c26d60c3a3.js",
    "revision": "581033536d58ce02063a424bef28b508"
  },
  {
    "url": "/_nuxt/91baeffd1984fb1c7a66.js",
    "revision": "18af3b955426de979f5fe4eeb95b3272"
  },
  {
    "url": "/_nuxt/9858289ad44ac83c65a3.js",
    "revision": "f0ec5858f9ebcfa177c5c3155e19df72"
  },
  {
    "url": "/_nuxt/9c1d86f890205ffbc876.js",
    "revision": "769501e1152349a7e8583007b682b368"
  },
  {
    "url": "/_nuxt/abfc19cbbde2bb179ab2.js",
    "revision": "0baff9feae8dacdfe91fb138555b9702"
  },
  {
    "url": "/_nuxt/af2537e58d4e4ba9e973.js",
    "revision": "da2d33f1a1cc520ff9e3454c4ab3e59c"
  },
  {
    "url": "/_nuxt/b436772f6bf6a1a01f8e.js",
    "revision": "23ae6829d89ad0c6efbd63d3f631e429"
  },
  {
    "url": "/_nuxt/c64dbcde6a78283a9084.js",
    "revision": "5edd163def6e94334cac2b490b5130d3"
  },
  {
    "url": "/_nuxt/c9cc71b28934ca0541eb.js",
    "revision": "ac3da2f209cf3eee9765b1979fc151bd"
  },
  {
    "url": "/_nuxt/d948013eaf77363c70b7.js",
    "revision": "adf2f16e0c7cb65a67c23a0c62d02e84"
  },
  {
    "url": "/_nuxt/e72dfa4866ce4febfb44.js",
    "revision": "7aedee6ff11f04bcbf3851c9311393bf"
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
