importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/017c5c14d75500bc59b5.js",
    "revision": "39f766e5368b289b2e1fe1d6f18c2d33"
  },
  {
    "url": "/_nuxt/055207d58aac47cff58b.js",
    "revision": "6966330a1a8111b711221e5943492d6c"
  },
  {
    "url": "/_nuxt/36f229c724e12147fcaf.js",
    "revision": "6ae844a715da63396af2431e66abe553"
  },
  {
    "url": "/_nuxt/39384cea542b6878990a.js",
    "revision": "c0cc5a15fb0aa2fc9792dcd2578dde31"
  },
  {
    "url": "/_nuxt/3d3bec9fbe93bfca460a.js",
    "revision": "7024d0507177eb0dc130128bad07e8a5"
  },
  {
    "url": "/_nuxt/4d8af22227fdf5bec6d0.js",
    "revision": "64800c9d9ad4906ce187b82f7dc97181"
  },
  {
    "url": "/_nuxt/552c9a575ab9b569735c.js",
    "revision": "8792e03e3d10bc48dd58ddb06c32da98"
  },
  {
    "url": "/_nuxt/66149f3f89ef188f52f0.js",
    "revision": "77bf81a4f5a1a7dcc325dd483b9fffe1"
  },
  {
    "url": "/_nuxt/6a0450a93f5b145354df.js",
    "revision": "58131faf07eac1af5f793753f97485dc"
  },
  {
    "url": "/_nuxt/7a42717bbb1d7d2c1899.js",
    "revision": "36b9924805ea93c637610988dc03a555"
  },
  {
    "url": "/_nuxt/8cca66b08ce581e9a5ce.js",
    "revision": "4511e51a88d60bcbca0c8472b7541147"
  },
  {
    "url": "/_nuxt/996d777391c2439e6095.js",
    "revision": "929eee4cbf91ae50153bf3516d633afe"
  },
  {
    "url": "/_nuxt/9a655d6b1b9be2b2d625.js",
    "revision": "665eae685f157ddbb931af45cb735199"
  },
  {
    "url": "/_nuxt/b5705bd73d48f09bbfb4.js",
    "revision": "2dc00f1ef228f4900d57f1e02f9627c8"
  },
  {
    "url": "/_nuxt/bf26210152cb1c974bd0.js",
    "revision": "16e46df8a10b417e4d8c4e6742cf12a3"
  },
  {
    "url": "/_nuxt/c568e26514aa0bc11161.js",
    "revision": "9197e49c522c834955c6d6ec1795427c"
  },
  {
    "url": "/_nuxt/dcdb32dc5c4bdc7b88b9.js",
    "revision": "f49e5cd7bfdaa79f42e5f267db08e2ab"
  },
  {
    "url": "/_nuxt/e56dd48001f7bc4b4b02.js",
    "revision": "ee59863ef83cf10371c0f1fbf7959fe7"
  },
  {
    "url": "/_nuxt/e86c3d9cdff76bd0ba67.js",
    "revision": "cdfc71904befddd39a1c6eb9527bb58e"
  },
  {
    "url": "/_nuxt/f7b3989357f8c37f4235.js",
    "revision": "76586aba7225cec567059063585599af"
  },
  {
    "url": "/_nuxt/fcb426109d16b05d55e1.js",
    "revision": "19a6b88c0d9be36fa8b0b51c620dcc1e"
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
