importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/011e03d11ec9e66de5b0.js",
    "revision": "06f98f592461acb5d80d40ebdfa33efb"
  },
  {
    "url": "/_nuxt/0623163141be28cb22e8.js",
    "revision": "ccb4cabe4656840fe0e24f39042d7d40"
  },
  {
    "url": "/_nuxt/1be779f95ed523b3aed4.js",
    "revision": "aab0670e7f69a8ad6b2b41fb8c1acb9f"
  },
  {
    "url": "/_nuxt/2378ab0c3b067fb330c7.js",
    "revision": "30fc413e2f75efc9fd4b55649a34d2ef"
  },
  {
    "url": "/_nuxt/2f96a18be80b5ae6242f.js",
    "revision": "d1532e289b57dfe6664bc60ab1cfe841"
  },
  {
    "url": "/_nuxt/326a6f1b4832f494a98f.js",
    "revision": "e9630a7c26fbb85567775e03675d24b8"
  },
  {
    "url": "/_nuxt/56fdd935f188ee05a9f7.js",
    "revision": "593596d78f126d0204211b1ba7edbfa4"
  },
  {
    "url": "/_nuxt/57f1ab952d270e77164d.js",
    "revision": "f86007749259054d491334dd37048367"
  },
  {
    "url": "/_nuxt/815d09c845ee15f98aa5.js",
    "revision": "dd2974e197e1b15d74dceb649dfef7b9"
  },
  {
    "url": "/_nuxt/828aab1841bf689cf4f7.js",
    "revision": "5e74989d0e04d6fbee3a1eff3ad6c009"
  },
  {
    "url": "/_nuxt/a4bf93d0ae60d06548bd.js",
    "revision": "4d567108f61c93f7879809a6d2350695"
  },
  {
    "url": "/_nuxt/d4606aab2dfa5ae0c1c8.js",
    "revision": "8ae0de7680a2de0bc030658714750092"
  },
  {
    "url": "/_nuxt/d8b13e2f85377e884639.js",
    "revision": "a8a97976e11ca7e51892863b8fed81b2"
  },
  {
    "url": "/_nuxt/ecec28c9eeef754d0bfb.js",
    "revision": "22f90d57402f690624e37c19f0bd28bf"
  },
  {
    "url": "/_nuxt/f6a7b8aa589ac40475bb.js",
    "revision": "366f344aa577b4396fe48e49ca278094"
  },
  {
    "url": "/_nuxt/fee5dd9b6f9bc9fc214d.js",
    "revision": "c3b670b2f0519542033dd65ffbb00c6e"
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
