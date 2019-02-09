importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/185040777a5a0b0be1ad.js",
    "revision": "8d96d79af896db6abe2074fd60c18c2e"
  },
  {
    "url": "/_nuxt/362c9c13b3cb9977a019.js",
    "revision": "82568566337b10693dca017009197b40"
  },
  {
    "url": "/_nuxt/39d03ae4f9e37070a859.js",
    "revision": "c04b1cc6d9e3204188c3c4632f201584"
  },
  {
    "url": "/_nuxt/3b41e4bf152efb1694f1.js",
    "revision": "eb9243d0be6d672a8039782f49016968"
  },
  {
    "url": "/_nuxt/50621140d1afd384cee9.js",
    "revision": "afdbd44fecbdd6aa5513a2e70d631a1a"
  },
  {
    "url": "/_nuxt/531be292fc3727ed1374.js",
    "revision": "cb9502a1fd8f513153eb74dba13c5dc3"
  },
  {
    "url": "/_nuxt/71170c296f6f4884a2ec.js",
    "revision": "ea7e32350e3281e8a63176f628f1c205"
  },
  {
    "url": "/_nuxt/7a0317a85631ffa4e9cf.js",
    "revision": "0bf799260e285fe57264f6dfcccde0d8"
  },
  {
    "url": "/_nuxt/857403cdd3a8be911739.js",
    "revision": "e8aa66c56fd7ec7be52c6b2b8a1a1432"
  },
  {
    "url": "/_nuxt/afa37e5ec7c5ae630d30.js",
    "revision": "81cd64316c4da00aaf589e82c8d1baaf"
  },
  {
    "url": "/_nuxt/b2580870d7df0e110661.js",
    "revision": "af75cdc16e5fdf352c0583a33ec58bc4"
  },
  {
    "url": "/_nuxt/c0b476e6e89965874e45.js",
    "revision": "c667803a200bebeebef6cd7b90a424b2"
  },
  {
    "url": "/_nuxt/d725bbc6e9047214aacb.js",
    "revision": "0d92c3ed7459f1a2293847d1d43f7206"
  },
  {
    "url": "/_nuxt/f19704d99937c6f8aa40.js",
    "revision": "7c2ede74b2ed1e868af606268adf349f"
  },
  {
    "url": "/_nuxt/fdbb86a4114b8fddcb43.js",
    "revision": "6d33075afe2023b451d4d3ac043b801e"
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
