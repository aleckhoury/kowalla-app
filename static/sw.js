importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17d0af390802c227c5ee.js",
    "revision": "fc00e2e2ef1f0aab54bd8cf6a73717c5"
  },
  {
    "url": "/_nuxt/2a8f9df8de93944a48df.js",
    "revision": "03842c896230524e055722fdd27520fd"
  },
  {
    "url": "/_nuxt/54f6d6a62203d7aea989.js",
    "revision": "ed91acacb9f36e2b0ec11341397c19f8"
  },
  {
    "url": "/_nuxt/57ea2caaf55f7df7c943.js",
    "revision": "d88fda72bb47c5044d3d781b45eede92"
  },
  {
    "url": "/_nuxt/57f8c053f326839d0d6a.js",
    "revision": "179b542f5907f9c829b448e0d543ca51"
  },
  {
    "url": "/_nuxt/5dc7b9a3633381437b26.js",
    "revision": "8336ec8e73a11a1a2ffeefb123b037b0"
  },
  {
    "url": "/_nuxt/629fbc8f20497418e770.js",
    "revision": "1d01dd6dff942b9f3f02045334c13233"
  },
  {
    "url": "/_nuxt/8562a2d4f5c679643815.js",
    "revision": "f981bea361336ffdcc86ea295c8f996b"
  },
  {
    "url": "/_nuxt/9a94de69c1cef88eac4b.js",
    "revision": "48578ef0ec5822e69ee8374cfb14c06d"
  },
  {
    "url": "/_nuxt/9fb794f06451d2aee29e.js",
    "revision": "25e9ea8fa3889e3a030b47f93dd57c30"
  },
  {
    "url": "/_nuxt/a11dc767738de42ddd90.js",
    "revision": "7141d56449b3bad7488d9bb3399f7fa9"
  },
  {
    "url": "/_nuxt/a245a5a4fd71d0f45d60.js",
    "revision": "608f1cd3a62604c0352e4d7b66379f71"
  },
  {
    "url": "/_nuxt/a70bb8df6022b8191c7d.js",
    "revision": "4fc8d729e62ab6ced033a3b4a3c5926f"
  },
  {
    "url": "/_nuxt/a8e4892f7a5d8d02bd4a.js",
    "revision": "fd551059e56a4dbd1098109ace0ffcbb"
  },
  {
    "url": "/_nuxt/a95df488d08a1f5979a0.js",
    "revision": "f01c2af1d4da1b52c687f6b2b8a6af93"
  },
  {
    "url": "/_nuxt/b9323eb50a4146bd6e78.js",
    "revision": "2394955e36fb343ded31173bbe56e14a"
  },
  {
    "url": "/_nuxt/c0b4d022f32295266445.js",
    "revision": "3d951d5b6a656d911bc2d67bcf58bbeb"
  },
  {
    "url": "/_nuxt/d30ecd9914902990ae94.js",
    "revision": "6835ba4b99bb05ed243eaef856979f57"
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
