importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12fb8dbdf4519432dabd.js",
    "revision": "404943de51b61686e8bab4746265623b"
  },
  {
    "url": "/_nuxt/1e1de35152365a701f7c.js",
    "revision": "59690920c0df2f580ddf01112cbc4c14"
  },
  {
    "url": "/_nuxt/237e7b2a0c3a384582c2.js",
    "revision": "b8a86f86a3cc622e38daabc336bf3b7e"
  },
  {
    "url": "/_nuxt/2895a97554915af8d3fd.js",
    "revision": "39bb7aba06206b5ec32f3c99311bd9a4"
  },
  {
    "url": "/_nuxt/49b35d0bba4362e80966.js",
    "revision": "4d86dcea2cd7201405543b241171e1e2"
  },
  {
    "url": "/_nuxt/4df204b0026180e52490.js",
    "revision": "4cbcad3dc1e500475d62f0c822ef2462"
  },
  {
    "url": "/_nuxt/5b408a36808a729a52d9.js",
    "revision": "c77db952cd46674166bfcb0653dffc0a"
  },
  {
    "url": "/_nuxt/62ca83903ee32177302d.js",
    "revision": "3b32944d94e2f88f6019d67e6d567476"
  },
  {
    "url": "/_nuxt/62f6d496b76ae4f7a9bf.js",
    "revision": "527b908b1becd8aae631d64bc3a8136b"
  },
  {
    "url": "/_nuxt/8340f641ff70810de91e.js",
    "revision": "7330e9dda2ec02af31ee46c1ec3155ae"
  },
  {
    "url": "/_nuxt/92a73b5e394264b89646.js",
    "revision": "927b6556880e822fff3537b141963c69"
  },
  {
    "url": "/_nuxt/94169275447a44a36aea.js",
    "revision": "2bc3249901a8bb92c2a8a209d66aa5cd"
  },
  {
    "url": "/_nuxt/94eca61181592db797d1.js",
    "revision": "168cc18ee5db52a6b55af709415275d8"
  },
  {
    "url": "/_nuxt/a7e68c6c7e848d593837.js",
    "revision": "0efd3f0b1b58d330fbce55a1c2934654"
  },
  {
    "url": "/_nuxt/b678cbe9964daca0e764.js",
    "revision": "2088358f35cb20edfe8d26f97cfbe95d"
  },
  {
    "url": "/_nuxt/bc3c9da6a42928d97ce1.js",
    "revision": "c02194a4e3e470a48fd20edb7b7eb5bf"
  },
  {
    "url": "/_nuxt/d609f13e9b4777113d6d.js",
    "revision": "c864bcb2a5fa60b2f678dab46bd8f2b2"
  },
  {
    "url": "/_nuxt/e46d164157e11b361108.js",
    "revision": "027a7d4219dedbb5d3959a6c19f71220"
  },
  {
    "url": "/_nuxt/f1537de9b0fac05752bc.js",
    "revision": "e20470f4931ea183727eb63a40b299a6"
  },
  {
    "url": "/_nuxt/f9b259cdd2aeea3f7d07.js",
    "revision": "1a9e3a3fca00aa273cd6943de070aca7"
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
