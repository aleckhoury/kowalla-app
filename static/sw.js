importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/1fc9a446002e080c92ea.js",
    "revision": "b828e9e36801f07b2cd8904937fd0049"
  },
  {
    "url": "/_nuxt/226adf5d7d1a0aa16f25.js",
    "revision": "51e8292d473bd828404a1a168c9bd8da"
  },
  {
    "url": "/_nuxt/22c7f1499a3b78d126b0.js",
    "revision": "314f321dc6425c66824469e95810bab6"
  },
  {
    "url": "/_nuxt/3435f87734e68f09f9e9.js",
    "revision": "280e6fa586ab4a07cbc2e03d9bfef408"
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
    "url": "/_nuxt/b62adc2168aae50bf075.js",
    "revision": "938a5eaf76600c4ddf5992284157e009"
  },
  {
    "url": "/_nuxt/c7c26723cfa23cbe0d55.js",
    "revision": "d5e62798bd6932260eeb5fb87ae2e589"
  },
  {
    "url": "/_nuxt/e59d45eb9b5085f41b16.js",
    "revision": "cb6ff863e44f2e6fd286395fc78536e9"
  },
  {
    "url": "/_nuxt/eb02fc6899f2c575b6c4.js",
    "revision": "35dd7bc0d7efba52e02d7c55fec31fd8"
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
