importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01c9d7f62f20813c230e.js",
    "revision": "80c626bab7742d743a8900d2aebe48dd"
  },
  {
    "url": "/_nuxt/331da0c9856803a3f5e9.js",
    "revision": "3c35f279a71af10f3fafbb971cb8339f"
  },
  {
    "url": "/_nuxt/37fea29a49adcf8e6cb1.js",
    "revision": "18cf1fd0c92aaa9f1f9bbcfcfbfdc5c4"
  },
  {
    "url": "/_nuxt/52c8bc27847f32b6c39e.js",
    "revision": "7dbc9d6660c710bfdac04fa350af7659"
  },
  {
    "url": "/_nuxt/5ecc046cb88fbfc3bc53.js",
    "revision": "dc1b848528545c9257438974435f068b"
  },
  {
    "url": "/_nuxt/77228efbc4bd91ea910c.js",
    "revision": "5caeb1711ab80647af7f27c3020b7753"
  },
  {
    "url": "/_nuxt/775f6fea62e945c87169.js",
    "revision": "5e916d87cd68c1e018ab5e62d68e10d6"
  },
  {
    "url": "/_nuxt/8429984ae9c1e3ad8430.js",
    "revision": "5040770c61d2a2242902a507bfaa0e55"
  },
  {
    "url": "/_nuxt/92bf123bbe8bc51bfd02.js",
    "revision": "1d501e2b37e0f01590e4e0e21776ba5f"
  },
  {
    "url": "/_nuxt/a15c416eb648bec18565.js",
    "revision": "6aad72c8094273279eba97601b8e3ac0"
  },
  {
    "url": "/_nuxt/c3d1e7d879be7ec2b954.js",
    "revision": "eab9c49062626fbf8edf137b90a0623d"
  },
  {
    "url": "/_nuxt/f27a45f86114f84e31da.js",
    "revision": "891475111c6cb642ba05213797c04a53"
  },
  {
    "url": "/_nuxt/f959d88cecd126cadd64.js",
    "revision": "c48aecb1b1ac3c2bdc26b7c0d0df32cb"
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
