importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/019587c8d2fef05cb1b9.js",
    "revision": "0f25dcd4d01e6b5d7d68f8d434f685be"
  },
  {
    "url": "/_nuxt/0645005d56d5c56ad38e.js",
    "revision": "ccc2c4fb9a70f717177b5b62d2186f9a"
  },
  {
    "url": "/_nuxt/0e6c7b4c32dea59ab1e1.js",
    "revision": "726f87b753ba27f96df0ef407b58abe1"
  },
  {
    "url": "/_nuxt/1729b780fb9d85746a6a.js",
    "revision": "585bb3deb2b57a06b1689912edfe9bde"
  },
  {
    "url": "/_nuxt/25f2550f0b6193a4b942.js",
    "revision": "44b3722537c3e23534645dd7814e730f"
  },
  {
    "url": "/_nuxt/267d263601ad6b6fe010.js",
    "revision": "f690ecd31e233b54bb0691ceebe67610"
  },
  {
    "url": "/_nuxt/3f6bb7667e7968e9a159.js",
    "revision": "6e199a0ae6c1849d2c2cdff2f0988173"
  },
  {
    "url": "/_nuxt/4237eb2651b967046396.js",
    "revision": "c481b93490c238a4d4b5664acfcff834"
  },
  {
    "url": "/_nuxt/586aab861a9f25e46251.js",
    "revision": "dfb524e63a150a96aa54ff87ec4867a8"
  },
  {
    "url": "/_nuxt/5d9780e3d27b73e7d725.js",
    "revision": "be6aaa1817036f048588eff883dcdf16"
  },
  {
    "url": "/_nuxt/6a481219637866cabd11.js",
    "revision": "cca13e3afb05a7e2ca511043824f33f2"
  },
  {
    "url": "/_nuxt/718390aefae9f9a226a4.js",
    "revision": "94fb33ef61b64e5e568258507f43f9a8"
  },
  {
    "url": "/_nuxt/8458b8f7af0043cc10f2.js",
    "revision": "c5b141db6fc7f0cdb46a40142d94cd6c"
  },
  {
    "url": "/_nuxt/8711d620be345903e265.js",
    "revision": "8b14bbd027514d3e77b05dfb51149bde"
  },
  {
    "url": "/_nuxt/a11dc767738de42ddd90.js",
    "revision": "7141d56449b3bad7488d9bb3399f7fa9"
  },
  {
    "url": "/_nuxt/a5297ee181837898049c.js",
    "revision": "167dae144858d757e85465b764e36130"
  },
  {
    "url": "/_nuxt/b312ad365181c805362c.js",
    "revision": "d8d132b288b3a54b66286716e70b3f59"
  },
  {
    "url": "/_nuxt/eb0177e6d3b8fa223521.js",
    "revision": "e6f94ca5687984cb7134be6e513282b4"
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
