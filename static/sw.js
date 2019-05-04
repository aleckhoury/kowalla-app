importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0623163141be28cb22e8.js",
    "revision": "ccb4cabe4656840fe0e24f39042d7d40"
  },
  {
    "url": "/_nuxt/22acb40cb0c8b776c241.js",
    "revision": "6206f01a7f6677fc94cc864315a66640"
  },
  {
    "url": "/_nuxt/2b1fe7cc3368960fb986.js",
    "revision": "742ccb18bf024fd2dcc095bee6c64859"
  },
  {
    "url": "/_nuxt/2f96a18be80b5ae6242f.js",
    "revision": "d1532e289b57dfe6664bc60ab1cfe841"
  },
  {
    "url": "/_nuxt/3d28f5088682e4b3b002.js",
    "revision": "ee50068209dcc172ac5340953ff686a7"
  },
  {
    "url": "/_nuxt/5d05ffc0b3169df98c84.js",
    "revision": "996834c535eb336d9ff8a543fd6239c7"
  },
  {
    "url": "/_nuxt/65527fea7d9d9c5c05a7.js",
    "revision": "a069329925a34be3f5c9beb5842a28f1"
  },
  {
    "url": "/_nuxt/70aae4d341c05472cc9f.js",
    "revision": "7dd1225f22be4c823064a63dda968a03"
  },
  {
    "url": "/_nuxt/8216767a1ceacf501edd.js",
    "revision": "473a6c4de1364c9b25d78df53079a0a2"
  },
  {
    "url": "/_nuxt/cbe56899fdb4f2211d84.js",
    "revision": "ae1fef24414ab0200642faf6ba1b50a6"
  },
  {
    "url": "/_nuxt/cd5c0f50da91a7662681.js",
    "revision": "d1b95ce8adae7f29ca18fcd078c219cd"
  },
  {
    "url": "/_nuxt/ce339b748dff3f897513.js",
    "revision": "001537d90486907e3b93b1b1f2a77db5"
  },
  {
    "url": "/_nuxt/d41deaafc13e0bff79af.js",
    "revision": "ef66278a8382edd9e82181611c003b30"
  },
  {
    "url": "/_nuxt/d79b7a9c414c0977df4a.js",
    "revision": "779b0345a82914193ff0df244102b1ca"
  },
  {
    "url": "/_nuxt/ddb64be24b70d62e1f5a.js",
    "revision": "cf8e66c03102f0db86433af7b67f2c08"
  },
  {
    "url": "/_nuxt/e831a10f20464f4e42b1.js",
    "revision": "9c3383882636a45b68dbe99643655613"
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
