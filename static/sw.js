importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17d0af390802c227c5ee.js",
    "revision": "fc00e2e2ef1f0aab54bd8cf6a73717c5"
  },
  {
    "url": "/_nuxt/2175a6d66613019bb550.js",
    "revision": "538fbdbb28544c24f24c16de6e8be7e6"
  },
  {
    "url": "/_nuxt/23488ea85efc6f461218.js",
    "revision": "01aa61d3f0d3113d7e5571c5b8869c6e"
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
    "url": "/_nuxt/5575f0335a200513e74f.js",
    "revision": "8d3ce65beca45e4850603e3172adb336"
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
    "url": "/_nuxt/a70bb8df6022b8191c7d.js",
    "revision": "4fc8d729e62ab6ced033a3b4a3c5926f"
  },
  {
    "url": "/_nuxt/b9323eb50a4146bd6e78.js",
    "revision": "2394955e36fb343ded31173bbe56e14a"
  },
  {
    "url": "/_nuxt/d30ecd9914902990ae94.js",
    "revision": "6835ba4b99bb05ed243eaef856979f57"
  },
  {
    "url": "/_nuxt/d9c944d56ced1929879d.js",
    "revision": "b1186a3a05b3fab43ae8af8e9830dc6c"
  },
  {
    "url": "/_nuxt/eef87f5bfe3af5db9892.js",
    "revision": "ac431314e397472ccf243f1804d96a07"
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
