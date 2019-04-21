importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02ccc173ea89e1d449e5.js",
    "revision": "a3cb6d40950fc6fee24825603a08dac8"
  },
  {
    "url": "/_nuxt/1561d63e560923a20a0e.js",
    "revision": "59ae5eee44f225adabeee56f3bf2ff85"
  },
  {
    "url": "/_nuxt/1fd4ffbf73358f0fc32f.js",
    "revision": "137c11c434b6193787713a71f1a518b4"
  },
  {
    "url": "/_nuxt/41d0a0028d179cfb0a7a.js",
    "revision": "b6054408dea58dfc040601de522f86ed"
  },
  {
    "url": "/_nuxt/44904e04f22f64873f00.js",
    "revision": "23631c650bbe6598bd82c455699eb6eb"
  },
  {
    "url": "/_nuxt/45ae95e22b1a814f48c5.js",
    "revision": "a685bfb774f03a0dfbbad76d7de0b96b"
  },
  {
    "url": "/_nuxt/47eb5699573a6ade243c.js",
    "revision": "65eea79f80c3683f45087d3f152fe4d5"
  },
  {
    "url": "/_nuxt/4e7efbedb0a42f0620ba.js",
    "revision": "22bb0b751ce3cee4a84e50ca63575298"
  },
  {
    "url": "/_nuxt/68d09ab55aa8216a0b1f.js",
    "revision": "c5eaf457527e031b77768ee30706b0ae"
  },
  {
    "url": "/_nuxt/6d4e70d7fd5974c10ef7.js",
    "revision": "f5d79ddf6e054130197aab156a917244"
  },
  {
    "url": "/_nuxt/76d1f0426a3452204f29.js",
    "revision": "5ba72e006d94634a83bd7803e5874ec3"
  },
  {
    "url": "/_nuxt/84e70d936d2d647e10ab.js",
    "revision": "dd4bd73068713c2eb25b6bea71b18b0f"
  },
  {
    "url": "/_nuxt/86480eb0e56127e8da8d.js",
    "revision": "1aee3a08465cc82f0809d4cc96a0c45d"
  },
  {
    "url": "/_nuxt/9ab950837179e9fab856.js",
    "revision": "29f30ebd3d3f7434da072ba28da055d7"
  },
  {
    "url": "/_nuxt/a7983de62385634e691f.js",
    "revision": "79a02e086b9c1c96c750d0db0723aeeb"
  },
  {
    "url": "/_nuxt/b7aada8c988125942bb7.js",
    "revision": "3adccd81b5dd6485dfe13cbdaefa215c"
  },
  {
    "url": "/_nuxt/c62eba3741ad24d4ab72.js",
    "revision": "603214b411fd609bb900d17e838ed613"
  },
  {
    "url": "/_nuxt/dea946df9b3abe2e9a93.js",
    "revision": "b22cff7c20a409d9411ad7da37f2e8c0"
  },
  {
    "url": "/_nuxt/faa104dfbbbdc0f42b95.js",
    "revision": "e404fdddd25a76aa8f9d80e6f8e9ccad"
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
