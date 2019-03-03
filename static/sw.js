importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0693ac89804317aff4f4.js",
    "revision": "bdbf5a3368964d2bc07a8f8455eb43b7"
  },
  {
    "url": "/_nuxt/2e67a0359681eee3df66.js",
    "revision": "e448ef3e1c3042fb97d248d0566c355d"
  },
  {
    "url": "/_nuxt/4983a2da208d1b073458.js",
    "revision": "aa21f83926c06ada06632ef6c6208004"
  },
  {
    "url": "/_nuxt/58c80599626d89060ac4.js",
    "revision": "cf09aec2b3774de2eb512efb13f2235a"
  },
  {
    "url": "/_nuxt/5ccb8880f3f97f386c82.js",
    "revision": "00d8f06d3baea51ae36d81fc6501deb4"
  },
  {
    "url": "/_nuxt/6ea60f63ab42f03029b0.js",
    "revision": "7c1b44e8126266ef542ef0ba4ac9f036"
  },
  {
    "url": "/_nuxt/7f7bbce8d3aa54bade65.js",
    "revision": "2c32d3e343d2f1e8d5cef1056941d55d"
  },
  {
    "url": "/_nuxt/97b8b2cac7e300755e6b.js",
    "revision": "3fbe5158001f164cd8a75f1e9167b103"
  },
  {
    "url": "/_nuxt/aafc19a8f16bbd113de8.js",
    "revision": "a6042781bbb92add19138fe50b27e28f"
  },
  {
    "url": "/_nuxt/c910c163f4e327921aa8.js",
    "revision": "18bb4b4d427a579271d11e146ea59e65"
  },
  {
    "url": "/_nuxt/ccea0e019edcd6266d02.js",
    "revision": "d28d752cd2c89ab8a5a0dd941f4f2a85"
  },
  {
    "url": "/_nuxt/e101452e35cd4168f1fd.js",
    "revision": "be55dc4e577c8bfaa94654e3b545362d"
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
