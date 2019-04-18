importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e25457a33a8f95f0c13.js",
    "revision": "021bb8095a88c5f559f4325b2a5db772"
  },
  {
    "url": "/_nuxt/239f2643e881cc881754.js",
    "revision": "af107d2c028004510fdca341fb381cd9"
  },
  {
    "url": "/_nuxt/32b393ded919c87e6fa2.js",
    "revision": "fead857abe26d27e10e5e855ab02fc5c"
  },
  {
    "url": "/_nuxt/4ba21656e77c9c1f2374.js",
    "revision": "2e513f103d18d709aec986bd30c8f476"
  },
  {
    "url": "/_nuxt/50feec19720ef4e63b8e.js",
    "revision": "7149c88801bf5e54527b99cab9b7e6c3"
  },
  {
    "url": "/_nuxt/58df7bb07a3b58cc3417.js",
    "revision": "2b864f9efe2f67d4080d30102103798b"
  },
  {
    "url": "/_nuxt/8a719b3e7cb045f33ce3.js",
    "revision": "0c8cfaac07b0798d4b947e3d9d6d6094"
  },
  {
    "url": "/_nuxt/8ad4dc98b7b1afba9bd6.js",
    "revision": "ac6411d112db34b82c6327256d23a324"
  },
  {
    "url": "/_nuxt/9c47f3437de0717aaebe.js",
    "revision": "7d2f18ffe7934863d0fd11bc54b521c5"
  },
  {
    "url": "/_nuxt/a1df27d3864f92e5cb12.js",
    "revision": "10373bca65d6e32edbf35b856d00a437"
  },
  {
    "url": "/_nuxt/a29a92e806955129f67e.js",
    "revision": "0601722e53187554fe4519fa41a4a065"
  },
  {
    "url": "/_nuxt/ba990096ae64a477b661.js",
    "revision": "c67ef1f481ec98ffbb0b7c1d6a09dd88"
  },
  {
    "url": "/_nuxt/c484bd4ba677477ba9da.js",
    "revision": "09243cb3c73763fb0faac0ec4ed9fd1c"
  },
  {
    "url": "/_nuxt/d04e4df5adfc69ab354c.js",
    "revision": "3237b61adb8fbd2d14e42a3e7baedcc8"
  },
  {
    "url": "/_nuxt/dffc94d6852386cee922.js",
    "revision": "21c041a6fde1db91eef0b77ede3a0c76"
  },
  {
    "url": "/_nuxt/e3af9584254a1dcb50ce.js",
    "revision": "f8a85c839d18afc0b874fd78aef5264f"
  },
  {
    "url": "/_nuxt/e50f319c82d425fa653e.js",
    "revision": "6871496e1c33d2f8b8939845977eacb6"
  },
  {
    "url": "/_nuxt/efc4e5f67fcb62ca03bb.js",
    "revision": "ebc1bbaea92d46ee46a9a6cde922680c"
  },
  {
    "url": "/_nuxt/fb7a910ffe4c6caeca05.js",
    "revision": "7743823eab6cbf0b5d20d3cac0fd8f19"
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
