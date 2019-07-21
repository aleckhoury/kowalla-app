importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16384e817cd1237ccce9.js",
    "revision": "00700564d30b16a1ae77a88ab99f5c34"
  },
  {
    "url": "/_nuxt/168445000fecb6c10c6f.js",
    "revision": "68fe3e66c44d7b4d07a969b2f7d1af03"
  },
  {
    "url": "/_nuxt/1afeac6281970d37ea73.js",
    "revision": "1a0ca1f6c7a4a0f2d9b1e553fe97e3d8"
  },
  {
    "url": "/_nuxt/32684c60e9814bc9d9b2.js",
    "revision": "dfd7d6b94424b3d4b34d88d63c956620"
  },
  {
    "url": "/_nuxt/33af7a86012055ab44f5.js",
    "revision": "fbc51c3f1e6aed53b94fe953e5e49b3f"
  },
  {
    "url": "/_nuxt/3b87efd53e816fdd819c.js",
    "revision": "8fe0776ec4e8394a679f815468b07c1b"
  },
  {
    "url": "/_nuxt/3ca3af11d93865e5a484.js",
    "revision": "0c0773e70e0cc53e72a8b2488caa3aad"
  },
  {
    "url": "/_nuxt/417c9160bafe4fc340bd.js",
    "revision": "2adc32dd5b8cf80aa5a83521bed96c84"
  },
  {
    "url": "/_nuxt/48259f9696138c510651.js",
    "revision": "4d03bb69d3a9bf624a2c077f363e2617"
  },
  {
    "url": "/_nuxt/62c5a0f1554d0196588e.js",
    "revision": "46e4459099749541a0ca5a66c70055d1"
  },
  {
    "url": "/_nuxt/67b47c0ec4eb3f338468.js",
    "revision": "e83f1168600cd8d024e441f13fffcffb"
  },
  {
    "url": "/_nuxt/6ca885af0f7ad3b7944f.js",
    "revision": "9c9cc8af5d8427e8acaad1c25e10447f"
  },
  {
    "url": "/_nuxt/8417ba9777ee44a0463c.js",
    "revision": "76cf8a20110211368c48ade62cf8714b"
  },
  {
    "url": "/_nuxt/9a4087592ff375f92f9a.js",
    "revision": "9cbb38b6212f1fc5bb9a7fdb2cf7e169"
  },
  {
    "url": "/_nuxt/a2953df2f9b0246e5455.js",
    "revision": "a8dab2b6f0e45c76133326a6c04b58c6"
  },
  {
    "url": "/_nuxt/a342ad9d7b728213f33d.js",
    "revision": "dcaa0280dc5a7a610af2336df51291c3"
  },
  {
    "url": "/_nuxt/b0c64492813f8a2a6483.js",
    "revision": "37173d02bc40c2be3e53e61785217b6b"
  },
  {
    "url": "/_nuxt/c89c2c64f724c9a909f9.js",
    "revision": "999ea3822470bb793cd57c1837b549fc"
  },
  {
    "url": "/_nuxt/cfb3a96c30d4b670e1c9.js",
    "revision": "daef8e7d43da5be6f97d1c0b7c16385f"
  },
  {
    "url": "/_nuxt/dc1ced4917f478713917.js",
    "revision": "0360ae6b97adaa0a0fb70ccb8f861ba1"
  },
  {
    "url": "/_nuxt/e5b2532396fd66140dde.js",
    "revision": "7dd559ae9a6630ab7ef2195e5388e792"
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
