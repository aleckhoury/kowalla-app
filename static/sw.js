importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/025770e4422313970800.js",
    "revision": "678636fd7335cea8965bf0939aa359f2"
  },
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/1db40929f26602153249.js",
    "revision": "be8afc1e8ea52a71396a3a1cb7311198"
  },
  {
    "url": "/_nuxt/34affe4fabb892c52765.js",
    "revision": "63914bed89596b148a7a79e9bdb65363"
  },
  {
    "url": "/_nuxt/456c9a2c2db4b4b28603.js",
    "revision": "11c4691f2768a8d772f4cd4d4e005d4b"
  },
  {
    "url": "/_nuxt/5788773e33b758c0d745.js",
    "revision": "d620fe3605ae8bb23997b9e826f86a3a"
  },
  {
    "url": "/_nuxt/765290e1740617f9c2a4.js",
    "revision": "c0d45c2a0fca689d13ebff960a8fc1ce"
  },
  {
    "url": "/_nuxt/7e8f5d310c66c1b6a76e.js",
    "revision": "fd11e5e881c7b1bebf8fa739b5b34e6a"
  },
  {
    "url": "/_nuxt/8ec28418f5e906afd086.js",
    "revision": "eb09f74901853a0b7cfb534715788e30"
  },
  {
    "url": "/_nuxt/cc814b3ae9c802923cad.js",
    "revision": "f4fda4a0e2cb3ad42c451c1662030ff0"
  },
  {
    "url": "/_nuxt/ce795f1905132bbbdd3b.js",
    "revision": "45509a29d55e451af1dda1351d66f369"
  },
  {
    "url": "/_nuxt/d94fc40a6e33a032989b.js",
    "revision": "d72768faa363c09d44e28df1772b918d"
  },
  {
    "url": "/_nuxt/f446c64847d790dc7a4a.js",
    "revision": "579de9f7fd578dae89cae9779da87939"
  },
  {
    "url": "/_nuxt/f787fbfeb1023fb9486b.js",
    "revision": "dabc63ee70caabda0dda2cdb19aafdeb"
  },
  {
    "url": "/_nuxt/fe7e290701f78eb72bf9.js",
    "revision": "ecba5db87b56cac169428affb2293f91"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
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
