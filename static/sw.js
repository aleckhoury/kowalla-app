importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02e4798881b39f0780f5.js",
    "revision": "0083c3572b037bb48797f0759f58dd98"
  },
  {
    "url": "/_nuxt/0de20f3a39d532b6ad1b.js",
    "revision": "32fa23ca22fe0268a4f46cb7f1a7a444"
  },
  {
    "url": "/_nuxt/21455dbafcdfd4329383.js",
    "revision": "19fee2bd1f4a1c9c8408dbf53366cdb0"
  },
  {
    "url": "/_nuxt/2a932f762c000ab2b59b.js",
    "revision": "4ff55ff2cc430042a2037571333dd13a"
  },
  {
    "url": "/_nuxt/59eb9462c782e4787e1c.js",
    "revision": "6641b6d7ba40d1142bf5228a2f85a791"
  },
  {
    "url": "/_nuxt/6b630e5149dd96965254.js",
    "revision": "b4aac1872b8fc8d9fd8230dad3265f30"
  },
  {
    "url": "/_nuxt/759c7603504c50a4174b.js",
    "revision": "e4fe8041f36cc8906fd78076ef6761ff"
  },
  {
    "url": "/_nuxt/81a3825ee640fcd352bc.js",
    "revision": "0b2a3d83cd6c650384a09b3e0fcbfd55"
  },
  {
    "url": "/_nuxt/b2b1fa6a3d87bf803d4c.js",
    "revision": "12af95061d16b04750a32abad28ac888"
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
