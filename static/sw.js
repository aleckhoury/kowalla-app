importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22a5115eed0219029b07.js",
    "revision": "9fc398198bd68be2a27a1bf0f3dff8d4"
  },
  {
    "url": "/_nuxt/29aa716d53c2ebbf7309.js",
    "revision": "b9077fc17e33938a53bac36307830827"
  },
  {
    "url": "/_nuxt/2e0007ef00b734dc3567.js",
    "revision": "1ff97337cdf6079df1aa3c473298adce"
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
    "url": "/_nuxt/6ed128db5f49f2c68efb.js",
    "revision": "fc5817faff1d9cf506fb23d20c82bc07"
  },
  {
    "url": "/_nuxt/780ce4ec5b24c4ca008b.js",
    "revision": "9b57b5383ed85c46070bd71e95e117b7"
  },
  {
    "url": "/_nuxt/7d7d486139ceda7885ab.js",
    "revision": "ede47c6d35682add9cbd1b8a65c2c7f5"
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
    "url": "/_nuxt/9ec67957dc98538165aa.js",
    "revision": "dbad8bbeafca96c34fdb2ed0d06ff04d"
  },
  {
    "url": "/_nuxt/a024c03ba132a6849a5b.js",
    "revision": "c6e1d1bdc75e24c14c4b4ef7321dbd68"
  },
  {
    "url": "/_nuxt/a944bbcc03884024f097.js",
    "revision": "714f21fc567606b204bc0fcbeae4e960"
  },
  {
    "url": "/_nuxt/b1b0099ba9c6f987dc84.js",
    "revision": "a8947b37591beaf0cdae6e2a5e2e871f"
  },
  {
    "url": "/_nuxt/b832c03e72176f85f610.js",
    "revision": "300647377bd8ee0fafd148bfc4bfa8f5"
  },
  {
    "url": "/_nuxt/e3356e7c111575091c8a.js",
    "revision": "9e46e5f05bb2715987bd44739d5a880c"
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
