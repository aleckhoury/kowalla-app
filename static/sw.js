importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02285316c25a74dd071e.js",
    "revision": "efed5da20c3336e511a39426396a1660"
  },
  {
    "url": "/_nuxt/023e305ac4d19aff9469.js",
    "revision": "cf528696e4cb2ab73fcffdab3c8728e2"
  },
  {
    "url": "/_nuxt/0d972651c3ff5275a82c.js",
    "revision": "cb61c1b1b2ca1733112652c636f7ae5d"
  },
  {
    "url": "/_nuxt/22ff95cb181c154e7172.js",
    "revision": "adce7e7be8f2fdc2c7a1d4ae8e3d85bd"
  },
  {
    "url": "/_nuxt/29af31ad1508200557ab.js",
    "revision": "6e21396d36b31361e78fec9c46e50652"
  },
  {
    "url": "/_nuxt/36012dc6a9f7ae22ce55.js",
    "revision": "4e662e6f34cd360891ac4aee45baf038"
  },
  {
    "url": "/_nuxt/6ee2793d09df5453a1a3.js",
    "revision": "2e6f9d1881db0ddfc0a5b06f1656fc22"
  },
  {
    "url": "/_nuxt/6fbd1a0c401e5e276b19.js",
    "revision": "1d3280443541d9221cc3e09680a2bafc"
  },
  {
    "url": "/_nuxt/92b8aaffc2b03f7357fb.js",
    "revision": "dda3cf209b8ebc838de55aaa6d6c0ca7"
  },
  {
    "url": "/_nuxt/9e40297fb2f51a6ceeb0.js",
    "revision": "cb18e81795ff504840945a11563a19d9"
  },
  {
    "url": "/_nuxt/a11dc767738de42ddd90.js",
    "revision": "7141d56449b3bad7488d9bb3399f7fa9"
  },
  {
    "url": "/_nuxt/a60b0e2b905b10f7506e.js",
    "revision": "d0791559ecf2afb13766aad096976800"
  },
  {
    "url": "/_nuxt/af63f65b580a6812fc19.js",
    "revision": "277542b86356e8164ce576d30f3e8fcb"
  },
  {
    "url": "/_nuxt/be4bb3d34e0eb5f49dbe.js",
    "revision": "067e9212f9d38d601347cacdefa215e2"
  },
  {
    "url": "/_nuxt/cf83ee1ead25ef938a9c.js",
    "revision": "f87977c2fb9ffe2ef85f645634adbab4"
  },
  {
    "url": "/_nuxt/d392a3b3194c6de92dd2.js",
    "revision": "e2883b93420508cedf44a27d0d59fb12"
  },
  {
    "url": "/_nuxt/de00ed9355d843b04e50.js",
    "revision": "c9c0e3f59d664270d845b8092022a5a3"
  },
  {
    "url": "/_nuxt/f6938aa61e7912f6677f.js",
    "revision": "6a72abf7b6ba5c3b4f2d37a85b4b0a8f"
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
