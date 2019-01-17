importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ea8501916200f6ab602.js",
    "revision": "bbc1ef5b179732882c47d6dd1e16d0db"
  },
  {
    "url": "/_nuxt/24e636f4fb8cf5908221.js",
    "revision": "c66ca959487c3e7f4aa26dd98bf232f9"
  },
  {
    "url": "/_nuxt/2f46d2eb1ce55580b0f9.js",
    "revision": "f6e1e14cc1e55dae50a5055ac9ce604f"
  },
  {
    "url": "/_nuxt/49efb2cfcd2d14ba1466.js",
    "revision": "f0e3abbfca8929cc072613703fbff691"
  },
  {
    "url": "/_nuxt/6b75bdac7a09a78bc0cf.js",
    "revision": "af51248e8aa4dbe917f8a0080b893c2e"
  },
  {
    "url": "/_nuxt/6bed1ae39e6aa9fd153e.js",
    "revision": "071e701a9e0f56d3489dae72893e5eb2"
  },
  {
    "url": "/_nuxt/7eed97e9129293d928e8.js",
    "revision": "f7b636688a6a830dbbfcd96a766082d5"
  },
  {
    "url": "/_nuxt/81ddb9566f2c06ed4387.js",
    "revision": "b2a63b16a1eced68bd0e8fcf58c10e6d"
  },
  {
    "url": "/_nuxt/8b08ebbe82f781be6d71.js",
    "revision": "923c9cc8a7ed01af25dfde64c585d69c"
  },
  {
    "url": "/_nuxt/8bd8a2683de29d08c65c.js",
    "revision": "09c71c371f6a380610c813946c84b1fa"
  },
  {
    "url": "/_nuxt/8d5bb583dc4c26ccee3a.js",
    "revision": "e867b6f00a114fae61c3a4b52469317c"
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
