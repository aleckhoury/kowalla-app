importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ecf595fb2709bf130a8.js",
    "revision": "809142228937c3a4098ab4188914ae36"
  },
  {
    "url": "/_nuxt/1f1e09dacc5206c15104.js",
    "revision": "17664af7b83ca21691bc2891c4d40490"
  },
  {
    "url": "/_nuxt/2b469bec084089729537.js",
    "revision": "8715d6926b6f4dc657c26eb3b33d8b78"
  },
  {
    "url": "/_nuxt/3820e2e859b4f7236483.js",
    "revision": "c89007f0b7dd4b5080d4041e3879aeb2"
  },
  {
    "url": "/_nuxt/44f4eb86d454fc5bb06e.js",
    "revision": "824a903ecb26e7fbb46fa3af0ab21685"
  },
  {
    "url": "/_nuxt/4ed39496c7c3820e6f9a.js",
    "revision": "e373a74514720605a98ac638425428c4"
  },
  {
    "url": "/_nuxt/50187807b01d8ee751e1.js",
    "revision": "9803202346c54e6066eeb4ded23eff49"
  },
  {
    "url": "/_nuxt/6f8d8fc9827f5064100d.js",
    "revision": "82c224c661404151d786aea6a159b5b3"
  },
  {
    "url": "/_nuxt/851217a86a8cffb06191.js",
    "revision": "400acc2fb5566ef4208e356a91ffda08"
  },
  {
    "url": "/_nuxt/873508e2803910a9baa8.js",
    "revision": "9cdb0247168c95c0674d8dcd4d880eaa"
  },
  {
    "url": "/_nuxt/a40a46ead6e45f73dc77.js",
    "revision": "93004cae3c6ef061a1594c41182c9781"
  },
  {
    "url": "/_nuxt/ac1d8c0e427dd9ccc206.js",
    "revision": "63628c9465b807f498f8a8ac79b14e38"
  },
  {
    "url": "/_nuxt/ccfefe3be3fe55784ebe.js",
    "revision": "9eeec19c9bdbe222e1eb5c3c563b17b9"
  },
  {
    "url": "/_nuxt/d1840c76b03d0cef992c.js",
    "revision": "56f7e238b3b3d1afb770330ec48c725f"
  },
  {
    "url": "/_nuxt/d4454b56d043d855fdf1.js",
    "revision": "fc519d9cbacf0596db4a4e7061ac208e"
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
