importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06ba3c4e51d49fe5da82.js",
    "revision": "2a07dfc088f59af6ae95b7575f9d8bc0"
  },
  {
    "url": "/_nuxt/40a8d6d2a10911852f72.js",
    "revision": "bd23aa3615a49c22384db84404ad7f57"
  },
  {
    "url": "/_nuxt/4321663cc951e9e8fda6.js",
    "revision": "63c838656c54b5c4c8300c5cb892d12a"
  },
  {
    "url": "/_nuxt/53c71fbc28442cf17744.js",
    "revision": "c4beb9de7fb377abe370b8e994e04464"
  },
  {
    "url": "/_nuxt/6517bb262690f85a0836.js",
    "revision": "f7613fffc6ecd6a14a24b39edaf35a61"
  },
  {
    "url": "/_nuxt/77cd429128e73274f1eb.js",
    "revision": "4799c6be494fcd7851cdb29227858af1"
  },
  {
    "url": "/_nuxt/85013e1d2a96b470ff28.js",
    "revision": "ccce9ebb0455f758c63efd825f184458"
  },
  {
    "url": "/_nuxt/85b0e96991a958404820.js",
    "revision": "d19966b3b9e8f5abe1f5e4ce4f37f408"
  },
  {
    "url": "/_nuxt/88e2901c0af3b99b7a44.js",
    "revision": "8c495579033b86a28de8b58a983b2da7"
  },
  {
    "url": "/_nuxt/9d353a4e1c17bb17c77b.js",
    "revision": "feba15c26ca54500998dd3e5a984d478"
  },
  {
    "url": "/_nuxt/c33903fe88892a32f5fb.js",
    "revision": "5a2ab5186630c47195bc1929f4019cdf"
  },
  {
    "url": "/_nuxt/da8bcfaf11faf1cddb70.js",
    "revision": "48b8e6da8de274a7669f8c681986c745"
  },
  {
    "url": "/_nuxt/dcc6449862ca0c94b2af.js",
    "revision": "649a308d9e91c5146ff3bc0724a66191"
  },
  {
    "url": "/_nuxt/e8fcaea478c08998e151.js",
    "revision": "a946e88068c89951d29501b92fb2936e"
  },
  {
    "url": "/_nuxt/e9fab4fdb4acc8c05dd3.js",
    "revision": "842c7f2d39dba1c2d6573ab7b57c322b"
  },
  {
    "url": "/_nuxt/ebb02aacf50ebca44b98.js",
    "revision": "9717777c6ff89e80f398cd3feacbc377"
  },
  {
    "url": "/_nuxt/f399afffc446084e6533.js",
    "revision": "322204ea8a8e7d3644adebb5682d7b67"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
