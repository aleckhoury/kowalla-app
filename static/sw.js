importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/012f185720f8c296c672.js",
    "revision": "7f354b9fe68e372a5dad09a0153a0e9e"
  },
  {
    "url": "/_nuxt/1c2d128adc759ad9534c.js",
    "revision": "8cecabc6d2b7b2576dc51daaf7bdab17"
  },
  {
    "url": "/_nuxt/23e89426ed79e1480eff.js",
    "revision": "d842b57e559090483a208b1fbf7dd3a2"
  },
  {
    "url": "/_nuxt/26f32ead54cc532b01fc.js",
    "revision": "6af03e1f25bdac53d5f15f7438c8239f"
  },
  {
    "url": "/_nuxt/2b72792977867ac12d1e.js",
    "revision": "5b7d90a885eb225513cb4c7af9fc7cd7"
  },
  {
    "url": "/_nuxt/6e62bf22eb6be301d163.js",
    "revision": "0a9d9cc2c97c719b4e3284b45c497657"
  },
  {
    "url": "/_nuxt/73f7ba3b8d4d5934ea00.js",
    "revision": "fb475d38d71c00b04003428a0b44bde0"
  },
  {
    "url": "/_nuxt/779bd330cbcb33b566bc.js",
    "revision": "5c9aaf15e64165d9b6ed219ff2090b98"
  },
  {
    "url": "/_nuxt/801cd7518120354e1d48.js",
    "revision": "6b9484cfbd857ff2ec11e93fcab326bc"
  },
  {
    "url": "/_nuxt/8f799d44e70190864fff.js",
    "revision": "2582cb617cd8854328b919d215b9ed8d"
  },
  {
    "url": "/_nuxt/ab0a9fb32a4bdb564bc5.js",
    "revision": "920b926f1746893fce3ddfca425484af"
  },
  {
    "url": "/_nuxt/af898957ea96be30979b.js",
    "revision": "7f9aef0f644ce574fb35fbdb11170f6a"
  },
  {
    "url": "/_nuxt/b0f69e2812c45bfbbf91.js",
    "revision": "13b36ee8ad196b49fd40e92cf0d5e044"
  },
  {
    "url": "/_nuxt/e335753c2289f549d22a.js",
    "revision": "637f17f77b65eef9f92d399c0aad81ca"
  },
  {
    "url": "/_nuxt/f6049a0cde19870d780b.js",
    "revision": "5eb491a6712e76a0fe4f6c1fb0d69766"
  },
  {
    "url": "/_nuxt/fc1925c4c559e9ba7b04.js",
    "revision": "023b7b015b6c2e7fb75ac4a9c72ef93a"
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
