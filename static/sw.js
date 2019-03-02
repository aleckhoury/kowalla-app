importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0340e1e19424d056f1fb.js",
    "revision": "535c848e278433a5faa93cc3c08d6cf1"
  },
  {
    "url": "/_nuxt/1ef6419500a9ae983bc0.js",
    "revision": "ad73175f3b754ef4f392e174881b3512"
  },
  {
    "url": "/_nuxt/2c54ad54795f73024886.js",
    "revision": "a5adbf2e78ac1425a76d212af5328c92"
  },
  {
    "url": "/_nuxt/5ecc046cb88fbfc3bc53.js",
    "revision": "dc1b848528545c9257438974435f068b"
  },
  {
    "url": "/_nuxt/6cfeaceb457c7a8f842c.js",
    "revision": "c8a1b314cc0ecacabac8aecd74234640"
  },
  {
    "url": "/_nuxt/6ef852aec106e70a3328.js",
    "revision": "4012d067d93da5073bc180fed120e065"
  },
  {
    "url": "/_nuxt/78ccb0123f9f40236b48.js",
    "revision": "a8bdd7f9e3c77f97549ee18626ff96cf"
  },
  {
    "url": "/_nuxt/875f2f8be9bc0c62ba98.js",
    "revision": "606bf405ec465abc557f933f7188b244"
  },
  {
    "url": "/_nuxt/b9a172c890dd5fe3b4da.js",
    "revision": "29ff5ca14e040b762bf16ea81b5b5d7f"
  },
  {
    "url": "/_nuxt/c3d1e7d879be7ec2b954.js",
    "revision": "eab9c49062626fbf8edf137b90a0623d"
  },
  {
    "url": "/_nuxt/cf31fae8ce1a5848743e.js",
    "revision": "f62363c35bdf2e5d4d7b8d1f8fd91b07"
  },
  {
    "url": "/_nuxt/d11f68da543c3f198bbb.js",
    "revision": "9dbee7245e9e098bb0c2b78fc46d28e0"
  },
  {
    "url": "/_nuxt/dbf7a501e8e84eedb13a.js",
    "revision": "f1638578c2c76456551c1d8ef3256ddc"
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
