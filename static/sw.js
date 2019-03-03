importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1728116b151cd6b0c3a6.js",
    "revision": "63d8122e391c9359a927be856edebce5"
  },
  {
    "url": "/_nuxt/2e67a0359681eee3df66.js",
    "revision": "e448ef3e1c3042fb97d248d0566c355d"
  },
  {
    "url": "/_nuxt/3155e9e0a86480a09015.js",
    "revision": "00aa557d13fa8d694076d26ea9117083"
  },
  {
    "url": "/_nuxt/3cb4d05099a9fc61b2e5.js",
    "revision": "f922a68d5098b315b4bf8d491b8fa237"
  },
  {
    "url": "/_nuxt/48b64607ac4ddd2c7996.js",
    "revision": "70592544e13fa258b118d8319e6586bc"
  },
  {
    "url": "/_nuxt/624a22a10fd91ea85295.js",
    "revision": "3cc45f2dc2840ecc54b84a360bf00aed"
  },
  {
    "url": "/_nuxt/68b2efb87d6aef21c429.js",
    "revision": "ae05ac0602fb3715c1e88b1fc9054560"
  },
  {
    "url": "/_nuxt/beef87cad078ba9068a1.js",
    "revision": "c16896219acb31f777ff1533bfb92803"
  },
  {
    "url": "/_nuxt/e14919cd04edac03e436.js",
    "revision": "67d1f147e248eaa97f7a62840499c1a5"
  },
  {
    "url": "/_nuxt/ed19e0a6e7c5f478107d.js",
    "revision": "ef6712512aba7564140ad63daea51b0d"
  },
  {
    "url": "/_nuxt/f050e464e7754dc3b35e.js",
    "revision": "fe84bb852002efea38f6c3b10dc8378e"
  },
  {
    "url": "/_nuxt/fb26950e3f0684814fcb.js",
    "revision": "814bdad43ddc7a32193c4b361d6e5c94"
  },
  {
    "url": "/_nuxt/fbe2cbcbf4900c5e73ed.js",
    "revision": "2bbe177567c9e7e7a1ec1197c25f2d90"
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
