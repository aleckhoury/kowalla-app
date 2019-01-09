importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22219a522d61911815d2.js",
    "revision": "38565dbba7fa5fa50a7264484e53b080"
  },
  {
    "url": "/_nuxt/61510cc41719c665f832.js",
    "revision": "f6e00b0d3184def08c1adb8e1f3fdab6"
  },
  {
    "url": "/_nuxt/7d2b9c4c94d94534e3f3.js",
    "revision": "c0fbecf8805bb8f8f41cf2c890539df5"
  },
  {
    "url": "/_nuxt/b0fc368f79c3b4f509a3.js",
    "revision": "c990c30d68b6e2013da1cbc142988238"
  },
  {
    "url": "/_nuxt/d5d026ff51a18e6bea71.js",
    "revision": "58508cfe1b1e6c44084848a27de251ae"
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
