importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e282a9675193f7e40f5.js",
    "revision": "c231d48999816c388a92d4ed61c3a08b"
  },
  {
    "url": "/_nuxt/202265456ed980efe330.js",
    "revision": "e4a2ebcf833a95144d04744f75c59361"
  },
  {
    "url": "/_nuxt/2e67a0359681eee3df66.js",
    "revision": "e448ef3e1c3042fb97d248d0566c355d"
  },
  {
    "url": "/_nuxt/3da652ac87d1097681af.js",
    "revision": "8a44bfe2bc5d4b0aa7f8debf0ada749d"
  },
  {
    "url": "/_nuxt/ab7b0f5de60bb426e4c1.js",
    "revision": "3ccf11a81bb86a447c7007fa5df065ab"
  },
  {
    "url": "/_nuxt/beb51994c6a6006eacab.js",
    "revision": "00472ea37fd84850b086d2fe6ab29bdc"
  },
  {
    "url": "/_nuxt/c6bc9628a1bb396a03a5.js",
    "revision": "796ab47acd68c76aae62c6e22f8925b2"
  },
  {
    "url": "/_nuxt/cfd06ddf7f147e83c60b.js",
    "revision": "b6329415397df3e945052dbce88b3461"
  },
  {
    "url": "/_nuxt/d9dfd50a41a5e78c6ffc.js",
    "revision": "9affd352f09158acef993167af1e5360"
  },
  {
    "url": "/_nuxt/f122eab6e5886fbbfc14.js",
    "revision": "3f99f13436133ff0a1d2a6f66dd3b2a0"
  },
  {
    "url": "/_nuxt/fbe2cbcbf4900c5e73ed.js",
    "revision": "2bbe177567c9e7e7a1ec1197c25f2d90"
  },
  {
    "url": "/_nuxt/fe81a64fb23ca5457a67.js",
    "revision": "bec8c2e52ce642fa29337460920a28ff"
  },
  {
    "url": "/_nuxt/feff21290ab961023db1.js",
    "revision": "05e9cfe5c0796eb487a1ca11c8414bfd"
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
