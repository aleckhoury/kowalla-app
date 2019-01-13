importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/070e17b54e04bdfa5236.js",
    "revision": "052d0ddb8a8807c06384f06671df5979"
  },
  {
    "url": "/_nuxt/61a3281690f414918878.js",
    "revision": "4910bae786bbf5e587708cc6427baacb"
  },
  {
    "url": "/_nuxt/62ded48c6acb85697ace.js",
    "revision": "4ec3e36cff161958b4e489837d1b988e"
  },
  {
    "url": "/_nuxt/97e1aa5e4e88853e60f3.js",
    "revision": "8fc6043f8bbef84940d89a0d4ccbfd96"
  },
  {
    "url": "/_nuxt/a6aa793f51013c25fc03.js",
    "revision": "f1cdc0f8eb6ab74cbd9bf72971d3b15c"
  },
  {
    "url": "/_nuxt/a6ab94309b8683d97cc4.js",
    "revision": "1f572e23ae9fc69bac9b0cf35989308b"
  },
  {
    "url": "/_nuxt/b5a5e4826bd84d4cda4a.js",
    "revision": "41c0725bdddd5b501c753cd38078e181"
  },
  {
    "url": "/_nuxt/dade8faa210eeae66f1f.js",
    "revision": "cd335c542d797ab7c04e18060f260de6"
  },
  {
    "url": "/_nuxt/efe5f37bea83c28314cf.js",
    "revision": "7eef85322e5fac0997eee543f48fbea4"
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
