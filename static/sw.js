importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0db55f8042d95ec774d2.js",
    "revision": "1236a3de86be29eaedfcf6becab8c781"
  },
  {
    "url": "/_nuxt/22a5115eed0219029b07.js",
    "revision": "9fc398198bd68be2a27a1bf0f3dff8d4"
  },
  {
    "url": "/_nuxt/24f95e4538a8117984e6.js",
    "revision": "c98f48b35358e8c3ae9d1eb8efd6947d"
  },
  {
    "url": "/_nuxt/2e0007ef00b734dc3567.js",
    "revision": "1ff97337cdf6079df1aa3c473298adce"
  },
  {
    "url": "/_nuxt/35fc7d720c9b9fb8b736.js",
    "revision": "45e74ed0b14907b23526c84b91bbedd1"
  },
  {
    "url": "/_nuxt/3a375bf237d9c4e6cae1.js",
    "revision": "e9047580dc404b40a0bfbdce48a6b209"
  },
  {
    "url": "/_nuxt/5047e700a1bcef7db3d1.js",
    "revision": "c7311d93fda16314846c34332e05213e"
  },
  {
    "url": "/_nuxt/5ad3b20f4d10117ded2a.js",
    "revision": "385df22d626d6bbbd9c3b57e4dc7dfa0"
  },
  {
    "url": "/_nuxt/6407671a0cce2426191a.js",
    "revision": "e80eeb693dff6d66ecc2f429061cb14c"
  },
  {
    "url": "/_nuxt/780ce4ec5b24c4ca008b.js",
    "revision": "9b57b5383ed85c46070bd71e95e117b7"
  },
  {
    "url": "/_nuxt/87eba90b82527cdbd929.js",
    "revision": "35b1bc647d017e8aa3432561d863b5b6"
  },
  {
    "url": "/_nuxt/882dcc6fa99445125df9.js",
    "revision": "e6b3f9549bc086e09bb8095eafa0d5fa"
  },
  {
    "url": "/_nuxt/9582affb1801eb8e5ad4.js",
    "revision": "0f3c9838367fce245c1e1d3782073707"
  },
  {
    "url": "/_nuxt/a024c03ba132a6849a5b.js",
    "revision": "c6e1d1bdc75e24c14c4b4ef7321dbd68"
  },
  {
    "url": "/_nuxt/ab4fe3eefbdedb071668.js",
    "revision": "2c179492329d30f3f5d0bea47fd9ebe5"
  },
  {
    "url": "/_nuxt/b1b0099ba9c6f987dc84.js",
    "revision": "a8947b37591beaf0cdae6e2a5e2e871f"
  },
  {
    "url": "/_nuxt/e3356e7c111575091c8a.js",
    "revision": "9e46e5f05bb2715987bd44739d5a880c"
  },
  {
    "url": "/_nuxt/f4a896a4c48487df6c0c.js",
    "revision": "70575fae1388f7c9a303e07afe3fad71"
  },
  {
    "url": "/_nuxt/ff62fd9b9bb4aecb88dc.js",
    "revision": "d4e37a85796faf1ae1d18bdfa8a92f7c"
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
