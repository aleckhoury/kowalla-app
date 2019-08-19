importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02898955670a035db5bc.js",
    "revision": "d35e5830f6ee0f5ed3fa6b88b368f3f4"
  },
  {
    "url": "/_nuxt/04c8722fd363460f932e.js",
    "revision": "5cc55ec2c9ba8e9ed761a54acc1224b3"
  },
  {
    "url": "/_nuxt/15da7a4d027b8ef0b889.js",
    "revision": "b92c456b1d018ccc0e3e8cc30b95f114"
  },
  {
    "url": "/_nuxt/2c72937f17ac7c53c0d9.js",
    "revision": "1866ede1217877b0a0ab06746565a49f"
  },
  {
    "url": "/_nuxt/30a995d62d6d983545a8.js",
    "revision": "f6786901f6d466b45fb10a73c2b173ef"
  },
  {
    "url": "/_nuxt/3284a5577e8a1de1ecc5.js",
    "revision": "0eb5238dea87feef03ed89a06f7e5508"
  },
  {
    "url": "/_nuxt/3580eaa022c5f623e89f.js",
    "revision": "071cfd7546f5b54dda10804b22da9e6a"
  },
  {
    "url": "/_nuxt/3d81ba857a76d82e8afd.js",
    "revision": "515e6434550c8fa5bccdb6b18382e4ee"
  },
  {
    "url": "/_nuxt/57bc2be8b7a1572df32c.js",
    "revision": "4acb715924e21ac4ba6e53f154f2205b"
  },
  {
    "url": "/_nuxt/58e954acc96bc7c9b88d.js",
    "revision": "912fe860b5fa62f32b93d91d77e4d403"
  },
  {
    "url": "/_nuxt/6457b619341d693fbb7b.js",
    "revision": "b5348b1d1bb82874a7dae0f873e7edcd"
  },
  {
    "url": "/_nuxt/7193b649675e25700026.js",
    "revision": "4849c91013c28bca65bea7ad794df36c"
  },
  {
    "url": "/_nuxt/782d096271c8ed6c1ec0.js",
    "revision": "88c5103cb5c446a220dcbcf42c7c062b"
  },
  {
    "url": "/_nuxt/93d9a747a5caf451ab85.js",
    "revision": "a449985f1cc65253c1fb7d53f06b4e4b"
  },
  {
    "url": "/_nuxt/b4ebf486bd6ed3540dab.js",
    "revision": "342c2f90b22af9259053fc338b8f845c"
  },
  {
    "url": "/_nuxt/c1f08f8f2a89a51a0211.js",
    "revision": "110ff9d27b3cfe8c997ad8cad62f21cc"
  },
  {
    "url": "/_nuxt/c953861523e71e8cb85b.js",
    "revision": "a92e1770c1039dc27ade1a140616688d"
  },
  {
    "url": "/_nuxt/ceae21a50f568e48aba3.js",
    "revision": "6b94138dd6e2168ecbed0a66076c48c1"
  },
  {
    "url": "/_nuxt/df4735171c9333570ac5.js",
    "revision": "b26c87d89d49db94081818eb543cd132"
  },
  {
    "url": "/_nuxt/f54d7492e77c154d80f5.js",
    "revision": "70bfaea635abfd7ac7a68e337815b5d4"
  },
  {
    "url": "/_nuxt/f54fef32285c9acc8874.js",
    "revision": "45348a4a3f7961b274478d798e612514"
  },
  {
    "url": "/_nuxt/f5f5a12bb8fec7991663.js",
    "revision": "c73043abbb73d2153d01eed25ccf97be"
  }
], {
  "cacheId": "Kowalla",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
