importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17be1b8eed15a54b1f83.js",
    "revision": "a842fbb8ae3364237bd99b34ea107ae4"
  },
  {
    "url": "/_nuxt/24a3055fe7c975f56bd6.js",
    "revision": "89e10ece08018a8d2430a5eafe49e060"
  },
  {
    "url": "/_nuxt/322e85e4c79538470d14.js",
    "revision": "24077f32afe3f8cd730ec8ecf3221fe9"
  },
  {
    "url": "/_nuxt/419d2ae344ccafc8a07f.js",
    "revision": "971978fba98901d32c76cd74dc1b438d"
  },
  {
    "url": "/_nuxt/41ca09f53020656166cb.js",
    "revision": "9936715bf7b74e95854a74cc7e3d17c9"
  },
  {
    "url": "/_nuxt/425f6b9c6892f312e1b3.js",
    "revision": "125c0fd850384be917a48aa4e4ba4ea4"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/7ea571a81cd2e4409a78.js",
    "revision": "60b6478f192044ddb5763f139667ae23"
  },
  {
    "url": "/_nuxt/9225cbdb48bc8e9797a1.js",
    "revision": "611d24640d981073962f5fda859013ba"
  },
  {
    "url": "/_nuxt/9d66ae42280b7f6743c2.js",
    "revision": "d9430a6f9bcfc1666547519e864f9218"
  },
  {
    "url": "/_nuxt/bfba9a5fb5567267465b.js",
    "revision": "def47caa6f730ed50edfe174fe0a40d7"
  },
  {
    "url": "/_nuxt/d3bd17c52cdc4c61a360.js",
    "revision": "2ef818d148660cad81835f1ac6e976ff"
  },
  {
    "url": "/_nuxt/d5072b1c77937c581349.js",
    "revision": "f1d3eea75be792bc0937d17c33f553ff"
  },
  {
    "url": "/_nuxt/d96018dedf7562b4f217.js",
    "revision": "52a3d28e86bf956d571a32a49a51f0fb"
  },
  {
    "url": "/_nuxt/e0e253ca6d98070a5d11.js",
    "revision": "24885dfb8c7f299afc77617fe17b5d89"
  },
  {
    "url": "/_nuxt/e8cfb5cce154c6b63366.js",
    "revision": "7eb5455739324e7904b3b2d17d30146f"
  },
  {
    "url": "/_nuxt/ef46820aa3d0a897fb50.js",
    "revision": "d3412cc5796e31a02da6c96980588c13"
  },
  {
    "url": "/_nuxt/f1d6bea3e7e08ed2b002.js",
    "revision": "443e58e1693abb88e128361f0d517190"
  },
  {
    "url": "/_nuxt/fe16db0352afe729dc2b.js",
    "revision": "8e879755a5be4e5b93bf003b8ebde990"
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
