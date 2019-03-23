importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ee3fa0ff2396d27eb78.js",
    "revision": "db66273d3d7330efdca2f50fb83bedb3"
  },
  {
    "url": "/_nuxt/2624e337233ce3104bbc.js",
    "revision": "488a2018e5232fc926e6737a01ac0588"
  },
  {
    "url": "/_nuxt/27695a1f623fc663739d.js",
    "revision": "b3b34e131f3d29f395633be8cbda1545"
  },
  {
    "url": "/_nuxt/2b16bf2f533141208ac9.js",
    "revision": "ad234435b02b926aba18f0113483c92c"
  },
  {
    "url": "/_nuxt/5991da47b1a30aae5f02.js",
    "revision": "460a6441f1adb60f10c9a19aee39392a"
  },
  {
    "url": "/_nuxt/5f16ce4190710815fcfe.js",
    "revision": "56b63bcddb99b28ff6ee526d306b0ede"
  },
  {
    "url": "/_nuxt/75d922a7ddad90eb491b.js",
    "revision": "4c814bdf2316dde5bde5a39360419471"
  },
  {
    "url": "/_nuxt/800c7ed87721ac26034e.js",
    "revision": "095b1d4a9681dace3c58c996b8947331"
  },
  {
    "url": "/_nuxt/89f0fdf9e29b038fbf14.js",
    "revision": "d43eb9f597300a9ecf1ae0ebd4f2e834"
  },
  {
    "url": "/_nuxt/8b81f125e00853ebee4e.js",
    "revision": "0a104112de8e8091fc480d8ebb66f6e6"
  },
  {
    "url": "/_nuxt/96f3adc832d084e01586.js",
    "revision": "028f5b44811cfdc04c7ed91352b5608a"
  },
  {
    "url": "/_nuxt/99a2e7bdd3f5971a7383.js",
    "revision": "0f7c17e6437aee431138f8b889fc7522"
  },
  {
    "url": "/_nuxt/a11dc767738de42ddd90.js",
    "revision": "7141d56449b3bad7488d9bb3399f7fa9"
  },
  {
    "url": "/_nuxt/c4cca5a90893d70dd1fb.js",
    "revision": "13c8c88e1bcd2c27fca470aeb87e0e24"
  },
  {
    "url": "/_nuxt/ce836e16b8adc59af8cb.js",
    "revision": "7f35e771a1900efd7f2b935ae36e5bef"
  },
  {
    "url": "/_nuxt/cf83ee1ead25ef938a9c.js",
    "revision": "f87977c2fb9ffe2ef85f645634adbab4"
  },
  {
    "url": "/_nuxt/d71128212eeb6cafb5aa.js",
    "revision": "07014822302f9fca0672abef3db8e694"
  },
  {
    "url": "/_nuxt/e2970065bba9e2e16423.js",
    "revision": "86acf8e2df94797b398675db7ceebac8"
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
