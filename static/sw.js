importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05d9a99b16ad2897f183.js",
    "revision": "6ef6a90170eae5798e63e360e4f9f6cd"
  },
  {
    "url": "/_nuxt/0d38303bb7033357ec82.js",
    "revision": "94dbc1b812b26d82c317ec00b9250cd1"
  },
  {
    "url": "/_nuxt/0f0d4f47128135c0f597.js",
    "revision": "fdfbf438d842676de215436daae4f645"
  },
  {
    "url": "/_nuxt/10418af1e7da40a9b9e1.js",
    "revision": "94aa7f9abcdca5596847541ac5fe4d0e"
  },
  {
    "url": "/_nuxt/1a7b51551c039fe13f9d.js",
    "revision": "0f3084c0af8d8a69592f7999ee29d02b"
  },
  {
    "url": "/_nuxt/3285fbceed17ddc9d506.js",
    "revision": "88d0657146426640a5c5ce643ea7c1b3"
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
    "url": "/_nuxt/7bc8742b6e46c80cbf89.js",
    "revision": "b907b752a86543658e717b50933539aa"
  },
  {
    "url": "/_nuxt/9901a97c4fc76415ecea.js",
    "revision": "a681949e2bfc6ad485916373cc80ded3"
  },
  {
    "url": "/_nuxt/9a7be71e20daa475ccf0.js",
    "revision": "eaaec2941754de1edb402c1802ed26ef"
  },
  {
    "url": "/_nuxt/9db9cd931de55b96cf2e.js",
    "revision": "bfcf00a5f196a7d25765ad0393984ea9"
  },
  {
    "url": "/_nuxt/ab2302e484a1a9196cee.js",
    "revision": "2b50fc977203f56d3b8a93959e27adb0"
  },
  {
    "url": "/_nuxt/cb697e8be4b85a96ef88.js",
    "revision": "46ed64922d8cb1deff0ad9b0c7f34a84"
  },
  {
    "url": "/_nuxt/ce9d99c831eb9a8d8034.js",
    "revision": "386b739089132b318d486772a8990537"
  },
  {
    "url": "/_nuxt/cf76192e682cac84b8c1.js",
    "revision": "ec1276805a4087bdc14011d95759cd78"
  },
  {
    "url": "/_nuxt/e9165cb96c4304b8ecf9.js",
    "revision": "c63235151b9789636f887890eb36800f"
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
