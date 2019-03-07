importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01bb6ea19ec3be46bf29.js",
    "revision": "830222758c03edc297412fbb16825b90"
  },
  {
    "url": "/_nuxt/08bba14d88899dbf1a51.js",
    "revision": "e566aa6b86033dcd8608e9fec8158c2c"
  },
  {
    "url": "/_nuxt/08ca0e03a962386097f9.js",
    "revision": "7ca077f0224e64782ec8de96918f1dd4"
  },
  {
    "url": "/_nuxt/0da00b6beb11d772f89d.js",
    "revision": "4d680ea6ff1052717cfaa9c5050afe78"
  },
  {
    "url": "/_nuxt/1c2d128adc759ad9534c.js",
    "revision": "8cecabc6d2b7b2576dc51daaf7bdab17"
  },
  {
    "url": "/_nuxt/2a60d777aa63458022ad.js",
    "revision": "6d15a3a988581788549e120ff353d9d1"
  },
  {
    "url": "/_nuxt/3cae540e0d0de3c8b4c0.js",
    "revision": "6caf11a253c5a5f7faf3725903c2f371"
  },
  {
    "url": "/_nuxt/4279a3451d1df6d92225.js",
    "revision": "c2eefb4a633b9b50611b1d25c4863473"
  },
  {
    "url": "/_nuxt/457f852ddac1a404c64e.js",
    "revision": "e8c5e79832ff0813038059aa143b5591"
  },
  {
    "url": "/_nuxt/51ead2c2147d4f628e00.js",
    "revision": "c489b840c7165fdf881a4c598f298181"
  },
  {
    "url": "/_nuxt/72e45aeee2a07dd36744.js",
    "revision": "cba2df0d12587683c0654a0266222c72"
  },
  {
    "url": "/_nuxt/965b1dedc5ef8ba06794.js",
    "revision": "d29dacd786f4a1d39d79529bbc8ad539"
  },
  {
    "url": "/_nuxt/998ea9f444f2dd441087.js",
    "revision": "5d61922b164f9c7b99aa35d555bde452"
  },
  {
    "url": "/_nuxt/a873171aa44c0e2a8457.js",
    "revision": "6b92cc818718ce32708a07c1bf40dbbd"
  },
  {
    "url": "/_nuxt/b1bdd9e7706454642827.js",
    "revision": "34b7aa3a902275c4058a53f70aca6067"
  },
  {
    "url": "/_nuxt/e5120f37cade354ccf05.js",
    "revision": "2258d501ece90cb53923eaefb12faf87"
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
