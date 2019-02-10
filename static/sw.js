importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/1b63bfea83a61959ed7a.js",
    "revision": "251624128dda14ff7ae140f760948569"
  },
  {
    "url": "/_nuxt/1fc9a446002e080c92ea.js",
    "revision": "b828e9e36801f07b2cd8904937fd0049"
  },
  {
    "url": "/_nuxt/3435f87734e68f09f9e9.js",
    "revision": "280e6fa586ab4a07cbc2e03d9bfef408"
  },
  {
    "url": "/_nuxt/3751b59a667960cb96cf.js",
    "revision": "4f76de986fe40f3ff6f5650309cde260"
  },
  {
    "url": "/_nuxt/3b41e4bf152efb1694f1.js",
    "revision": "eb9243d0be6d672a8039782f49016968"
  },
  {
    "url": "/_nuxt/54fcee6ee56bcab61168.js",
    "revision": "05b3c86bc006cf11c802bb9e3683a995"
  },
  {
    "url": "/_nuxt/6b180d260f3b3a4dd3ed.js",
    "revision": "798c4869f435ec9e272cfa88f8106bc6"
  },
  {
    "url": "/_nuxt/9c930ab3970dccbee4ae.js",
    "revision": "e83ff3f62484cb98fe4116fbf680eb5a"
  },
  {
    "url": "/_nuxt/b23a25282b8d6a1a8495.js",
    "revision": "fce191e8af47626dc879721eb1eeeda2"
  },
  {
    "url": "/_nuxt/b7d8f6db2f203445d597.js",
    "revision": "d02c05d0205e4a13456e810a01e0c27f"
  },
  {
    "url": "/_nuxt/c7c26723cfa23cbe0d55.js",
    "revision": "d5e62798bd6932260eeb5fb87ae2e589"
  },
  {
    "url": "/_nuxt/d05b9d750f18cd0268f0.js",
    "revision": "d3813dded941f43e23c0894c20082246"
  },
  {
    "url": "/_nuxt/e59d45eb9b5085f41b16.js",
    "revision": "cb6ff863e44f2e6fd286395fc78536e9"
  },
  {
    "url": "/_nuxt/ed2648948e5b0f054599.js",
    "revision": "efbb7a9c329f6d42552a85dc5b400858"
  },
  {
    "url": "/_nuxt/f0883b3588e63429921e.js",
    "revision": "97da9c7b48fc050778015be70a680e83"
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
