importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16d71773ab267602ecf4.js",
    "revision": "e2572f7e0e95f07c33f17b20f0dabb76"
  },
  {
    "url": "/_nuxt/1dc014e778149b2a97c6.js",
    "revision": "c038b6ed4a3d1cdb90f94fdfe78f45b2"
  },
  {
    "url": "/_nuxt/29b42a8aa3e71309ceae.js",
    "revision": "fe4dfd1212af6b6a1200da12bc1846d8"
  },
  {
    "url": "/_nuxt/439315fcd594c579ecf8.js",
    "revision": "d596644f5dd17501cb03ae1c3f2359b7"
  },
  {
    "url": "/_nuxt/5c3a33122c669154c4de.js",
    "revision": "17d7107a1dbd2761ef280f19e47dfd42"
  },
  {
    "url": "/_nuxt/9464e761516d8010e477.js",
    "revision": "1f5015460a57b3fe636a3f6696a83e57"
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
    "url": "/_nuxt/ced77bc4e4b45e2dd3e9.js",
    "revision": "8588ca5e170c9defe364e942483187d8"
  },
  {
    "url": "/_nuxt/d4454b56d043d855fdf1.js",
    "revision": "fc519d9cbacf0596db4a4e7061ac208e"
  },
  {
    "url": "/_nuxt/da0b222d53e2dc819509.js",
    "revision": "d88f562b20dc3dfdde130828864250bb"
  },
  {
    "url": "/_nuxt/db52eed1af45e7ae4406.js",
    "revision": "d7b9ee1bc58e915b4d8ab775b0e71d21"
  },
  {
    "url": "/_nuxt/dd5be6e0c3bff52ea099.js",
    "revision": "49af612d3c984a3b8350b9daea8a2f62"
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
