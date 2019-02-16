importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c73ce02754b39497e9a.js",
    "revision": "b95887464b37212c78543031f0bc0932"
  },
  {
    "url": "/_nuxt/2142fad5f0d318891997.js",
    "revision": "9a03416ecd5663defcdfcd4c77fe4860"
  },
  {
    "url": "/_nuxt/3401e02250a089b485b8.js",
    "revision": "404409c17375445d961a3daa7991a1fe"
  },
  {
    "url": "/_nuxt/5ab77d00dff12e2a2e72.js",
    "revision": "cf66cf88f780e2aa9bd644351f9a3c66"
  },
  {
    "url": "/_nuxt/75e1c7ebfece8da9b21c.js",
    "revision": "e26b11f0e9a16d8d2d5f28076b79797e"
  },
  {
    "url": "/_nuxt/8762c5d86d3d1d8c1d98.js",
    "revision": "74a980d0c01857a2798596f9ecf58e96"
  },
  {
    "url": "/_nuxt/9b961cc11566a3d6624f.js",
    "revision": "3edfdf382d28d6c5bf4f1b56c1863aff"
  },
  {
    "url": "/_nuxt/9c13e0c15966c8d9c8cf.js",
    "revision": "6f73e73708bc7c9ce740a8add58fee3e"
  },
  {
    "url": "/_nuxt/c452d6659611570bceb4.js",
    "revision": "55646ac00034e1fa57a02ce8de51f0f6"
  },
  {
    "url": "/_nuxt/d2b1efa75ceb09073745.js",
    "revision": "5b2dc51be3d5c93a3ccd154ad8330ccd"
  },
  {
    "url": "/_nuxt/d39696735ad80d6242f7.js",
    "revision": "828e4906b5407d65a05bea0caf7b3aff"
  },
  {
    "url": "/_nuxt/d87d8a2521133c9952bf.js",
    "revision": "55436f0cbd6eb9ca6c84533112837d7d"
  },
  {
    "url": "/_nuxt/ef34c1ac63bdbead5836.js",
    "revision": "5a3d9f9f2b8665a19f101d1d86a72059"
  },
  {
    "url": "/_nuxt/f0bd8ef90712e99209c1.js",
    "revision": "9c084a6402e4f6caaabfba9664d508b3"
  },
  {
    "url": "/_nuxt/ff9ec6e2456099114b84.js",
    "revision": "07dc2c2187d61f6fa2084acbc979c1b5"
  },
  {
    "url": "/_nuxt/ffe248fca325aad0a58a.js",
    "revision": "cb783ec45d258555a4cf1f70e30cf63b"
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
