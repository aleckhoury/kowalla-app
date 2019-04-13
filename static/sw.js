importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d38303bb7033357ec82.js",
    "revision": "94dbc1b812b26d82c317ec00b9250cd1"
  },
  {
    "url": "/_nuxt/0f0d4f47128135c0f597.js",
    "revision": "fdfbf438d842676de215436daae4f645"
  },
  {
    "url": "/_nuxt/1a7b51551c039fe13f9d.js",
    "revision": "0f3084c0af8d8a69592f7999ee29d02b"
  },
  {
    "url": "/_nuxt/459adae30adcb877e27b.js",
    "revision": "7e2217ec0b3051fc360f1975ed4f4a05"
  },
  {
    "url": "/_nuxt/487c4ea06065afd34ea5.js",
    "revision": "b5c4081b85ea8815d804e1d78a5e23a4"
  },
  {
    "url": "/_nuxt/55a184d59a3afed7ea22.js",
    "revision": "5a29eed2382078f87c7de9a7474674f8"
  },
  {
    "url": "/_nuxt/6758596680a3a4e5d56f.js",
    "revision": "53830116f354408ca69ecf68239f849c"
  },
  {
    "url": "/_nuxt/6be469653060e1a376e8.js",
    "revision": "c6296999780210d6584ac98b4160bfe3"
  },
  {
    "url": "/_nuxt/75c2c1fc9e3c104d2d03.js",
    "revision": "73d8a0f469d762fd4ade53db92ffbe15"
  },
  {
    "url": "/_nuxt/7bc8742b6e46c80cbf89.js",
    "revision": "b907b752a86543658e717b50933539aa"
  },
  {
    "url": "/_nuxt/882b4eb90225edcff452.js",
    "revision": "940a19ce83b7cbe734699e4391461eaf"
  },
  {
    "url": "/_nuxt/949b4110de1041232df8.js",
    "revision": "56c43aedc83ad0a0ad9599c2086484f6"
  },
  {
    "url": "/_nuxt/9901a97c4fc76415ecea.js",
    "revision": "a681949e2bfc6ad485916373cc80ded3"
  },
  {
    "url": "/_nuxt/b1a8242d26b03ff6e00a.js",
    "revision": "95acc196e2eac26715354999fe16d8b5"
  },
  {
    "url": "/_nuxt/cb697e8be4b85a96ef88.js",
    "revision": "46ed64922d8cb1deff0ad9b0c7f34a84"
  },
  {
    "url": "/_nuxt/cd21ed66dfd1c32147fe.js",
    "revision": "ef6ed97f734e89b4b0a16147f19799e3"
  },
  {
    "url": "/_nuxt/d5e423deaf36105f4c01.js",
    "revision": "0da740c922c50f90a88102f3a3d3a090"
  },
  {
    "url": "/_nuxt/e883c2efea88f196ccff.js",
    "revision": "510f8640678c0a5114ea7fa52f4ae533"
  },
  {
    "url": "/_nuxt/ffbddd2254a93478ea07.js",
    "revision": "63a79fff50ae6a15b12f526828a07b78"
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
