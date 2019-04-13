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
    "url": "/_nuxt/4f3c420d1eb6ce790874.js",
    "revision": "922439fb6620815679c23b25d9763ae5"
  },
  {
    "url": "/_nuxt/55a184d59a3afed7ea22.js",
    "revision": "5a29eed2382078f87c7de9a7474674f8"
  },
  {
    "url": "/_nuxt/5c12ff4b0a95d0ea0565.js",
    "revision": "c641f1bf3239163ded682cb304660e3e"
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
    "url": "/_nuxt/9c1fde582a41a0773d68.js",
    "revision": "191e63e940e5d7b15abdc2e4493dba7a"
  },
  {
    "url": "/_nuxt/b30d11f3cc539bdb8e38.js",
    "revision": "8a922b1640a3cface88faae88787f2fa"
  },
  {
    "url": "/_nuxt/c1c17451e10e6c18b13d.js",
    "revision": "43363a5685d3e5427a5825fae3e85be4"
  },
  {
    "url": "/_nuxt/cb697e8be4b85a96ef88.js",
    "revision": "46ed64922d8cb1deff0ad9b0c7f34a84"
  },
  {
    "url": "/_nuxt/ec2b21f98e27776fadf4.js",
    "revision": "fa053e834c4ad75786f179843be51eb3"
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
