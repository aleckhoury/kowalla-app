importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04faade18b128ca1e8af.js",
    "revision": "97db1f4d8ebc264f65455317c89ab54d"
  },
  {
    "url": "/_nuxt/2ccbed3de0ef71c5333f.js",
    "revision": "0b4243da1509c0161d9af81c2ef4ba2a"
  },
  {
    "url": "/_nuxt/2d6afa68c9cb9933f0b4.js",
    "revision": "c2b5389624cc33f0a980875df1cfff4d"
  },
  {
    "url": "/_nuxt/439315fcd594c579ecf8.js",
    "revision": "d596644f5dd17501cb03ae1c3f2359b7"
  },
  {
    "url": "/_nuxt/6ab5282c841a0f711021.js",
    "revision": "c3b0822f2baf3316df021b9020a22eb9"
  },
  {
    "url": "/_nuxt/9c4a7b3b6df43d151da3.js",
    "revision": "7d25a9f4d482a0defed2a67e65fff730"
  },
  {
    "url": "/_nuxt/ac027c15e71e4d274777.js",
    "revision": "7763e582853600e09fe51f484a4dc278"
  },
  {
    "url": "/_nuxt/b748ab3336377267732b.js",
    "revision": "8dc035a7afa0909d3f2107e5a6f3024b"
  },
  {
    "url": "/_nuxt/d4454b56d043d855fdf1.js",
    "revision": "fc519d9cbacf0596db4a4e7061ac208e"
  },
  {
    "url": "/_nuxt/d8ea85871723b1e99bb0.js",
    "revision": "223a0a63d406d394eae74e49132a154c"
  },
  {
    "url": "/_nuxt/da0b222d53e2dc819509.js",
    "revision": "d88f562b20dc3dfdde130828864250bb"
  },
  {
    "url": "/_nuxt/dd5be6e0c3bff52ea099.js",
    "revision": "49af612d3c984a3b8350b9daea8a2f62"
  },
  {
    "url": "/_nuxt/ec7a57548d6f01d21aaf.js",
    "revision": "ee567ebbd0973e785729639a820c16c3"
  },
  {
    "url": "/_nuxt/f01ef91a22740b9bb38b.js",
    "revision": "2955f0a16625c9c1ecf00162e5f03880"
  },
  {
    "url": "/_nuxt/fcfc800e997bfd5edab4.js",
    "revision": "8a749bf340eacb9f76b962012be21541"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
