importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0576a32e6648a5aed2e0.js",
    "revision": "5e2ba6c95175b0c4d79ac72c799cc3b3"
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
    "url": "/_nuxt/307ab64623e69f726aa4.js",
    "revision": "f6f3d3ede8ddcbd36eead5912230998b"
  },
  {
    "url": "/_nuxt/41a05477ebd60cb3114f.js",
    "revision": "038e89dbf7d0dd585f85662282173bb4"
  },
  {
    "url": "/_nuxt/487c4ea06065afd34ea5.js",
    "revision": "b5c4081b85ea8815d804e1d78a5e23a4"
  },
  {
    "url": "/_nuxt/511c0caafa1c060dac9f.js",
    "revision": "5de86496f57968b434ebde7503d1bcdf"
  },
  {
    "url": "/_nuxt/5ad3b20f4d10117ded2a.js",
    "revision": "385df22d626d6bbbd9c3b57e4dc7dfa0"
  },
  {
    "url": "/_nuxt/87eba90b82527cdbd929.js",
    "revision": "35b1bc647d017e8aa3432561d863b5b6"
  },
  {
    "url": "/_nuxt/8f0980047dac09e8d79e.js",
    "revision": "b0453684b1c95b2cb5d9c48a8323ddf8"
  },
  {
    "url": "/_nuxt/9a4eadf5d15192d71359.js",
    "revision": "707f0a5d5382465f03a8f92287eea319"
  },
  {
    "url": "/_nuxt/a5ac2804b92e80d16d9a.js",
    "revision": "a90fb7a1705d08561f519dd884bb5b9c"
  },
  {
    "url": "/_nuxt/b0929fd8212184b93923.js",
    "revision": "85404807c74c5e1274ac60344066ddc1"
  },
  {
    "url": "/_nuxt/b300d58bdcaa8c2241ae.js",
    "revision": "269f2e8d801e0e2e23f1405bf32fe665"
  },
  {
    "url": "/_nuxt/b7dd72545f86c0a09210.js",
    "revision": "bc759872a2457b64bf668bf51c939859"
  },
  {
    "url": "/_nuxt/cb697e8be4b85a96ef88.js",
    "revision": "46ed64922d8cb1deff0ad9b0c7f34a84"
  },
  {
    "url": "/_nuxt/e4f140e75e1c371cfb13.js",
    "revision": "9aa3976ad0b8bee5db436309ec33a25c"
  },
  {
    "url": "/_nuxt/e6f494d6be232647be38.js",
    "revision": "781329febd937d4fb46c779a4238b99a"
  },
  {
    "url": "/_nuxt/e72771e60cc7af32ada1.js",
    "revision": "58ea3d8e563bbc6c518c1a84bfce2a1f"
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
