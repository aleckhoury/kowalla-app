importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05f25574c3843e4b660f.js",
    "revision": "f8417b28abe857a3d1519dccb5ea1606"
  },
  {
    "url": "/_nuxt/130256885ac2e9ff99db.js",
    "revision": "bcb805ce47d6b91dc2e7855feb71e261"
  },
  {
    "url": "/_nuxt/1f6fa5bcbee046836dbe.js",
    "revision": "88ec0b90beb309126a13efdfaaa89140"
  },
  {
    "url": "/_nuxt/252a8e036b137200db2f.js",
    "revision": "cb8af3189011aab53e927dd76fd892b4"
  },
  {
    "url": "/_nuxt/2bb72e9d67ea49bff510.js",
    "revision": "2c9f4ce3120f51b517611843fdb55ba4"
  },
  {
    "url": "/_nuxt/3675f5bf6589412c73a1.js",
    "revision": "9b03965f681d0abed759068577232b73"
  },
  {
    "url": "/_nuxt/4e29c21bf46d45f9ee55.js",
    "revision": "96bdeffc9f7cd4808062bf5932995faf"
  },
  {
    "url": "/_nuxt/65698f8271272711aeaa.js",
    "revision": "9e00498d8fb33cbc986b49bdee7a7e03"
  },
  {
    "url": "/_nuxt/66be3de8f4b1f7906a9a.js",
    "revision": "5e411eeda04037d2cb5f2fed4d776e6d"
  },
  {
    "url": "/_nuxt/6ebba68277c1eeeebfaa.js",
    "revision": "5b578b4ece8cef6e89e17f5f6fb70714"
  },
  {
    "url": "/_nuxt/6f70f4ae926bb9ca717f.js",
    "revision": "de07826bc7cdf9715968b29f0ad9d189"
  },
  {
    "url": "/_nuxt/7ffdab4950cc1115053e.js",
    "revision": "90f6533dd173ad7f2e95f11f27b7ee6a"
  },
  {
    "url": "/_nuxt/8de5cddd79eba9ff7c63.js",
    "revision": "964c39f5e07f0fd2cd249e8c9f282314"
  },
  {
    "url": "/_nuxt/99e87c9842f4eb7956ba.js",
    "revision": "0803799abf68709c1ceaa32db560fccf"
  },
  {
    "url": "/_nuxt/bd67cc76c4d8d39f07ff.js",
    "revision": "1898427bd84db655f8dc47937a4a00be"
  },
  {
    "url": "/_nuxt/d92aa0348130a0aec774.js",
    "revision": "c16c0fe073dac2b2a472cab6c7751f11"
  },
  {
    "url": "/_nuxt/dea946df9b3abe2e9a93.js",
    "revision": "b22cff7c20a409d9411ad7da37f2e8c0"
  },
  {
    "url": "/_nuxt/f0f97eecb3c3597560e6.js",
    "revision": "a9fe3e59906afdfd5a1e5e34016a0423"
  },
  {
    "url": "/_nuxt/faa104dfbbbdc0f42b95.js",
    "revision": "e404fdddd25a76aa8f9d80e6f8e9ccad"
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
