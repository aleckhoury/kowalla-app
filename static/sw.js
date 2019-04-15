importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22a5115eed0219029b07.js",
    "revision": "9fc398198bd68be2a27a1bf0f3dff8d4"
  },
  {
    "url": "/_nuxt/2b0ea5c85487d8ff6f6e.js",
    "revision": "82cc86513173bcc1f93979a130ff943d"
  },
  {
    "url": "/_nuxt/2e0007ef00b734dc3567.js",
    "revision": "1ff97337cdf6079df1aa3c473298adce"
  },
  {
    "url": "/_nuxt/33d4f10ada30593ba691.js",
    "revision": "ccb857f6e5a571b754ed9a6b38846b9e"
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
    "url": "/_nuxt/614b254a9720d522f729.js",
    "revision": "cf2f55a88bd513fb05d650ac1ec0f21c"
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
    "url": "/_nuxt/9ec67957dc98538165aa.js",
    "revision": "dbad8bbeafca96c34fdb2ed0d06ff04d"
  },
  {
    "url": "/_nuxt/a024c03ba132a6849a5b.js",
    "revision": "c6e1d1bdc75e24c14c4b4ef7321dbd68"
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
    "url": "/_nuxt/ee62061bd0eaf0757b42.js",
    "revision": "05169eeaafbc4e5c84e319a78839345b"
  },
  {
    "url": "/_nuxt/fe64a00794aee4cac376.js",
    "revision": "fde3b6032bae06fc7535f675f1bb34fb"
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
