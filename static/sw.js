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
<<<<<<< HEAD
    "url": "/_nuxt/1fd4ffbf73358f0fc32f.js",
    "revision": "137c11c434b6193787713a71f1a518b4"
  },
  {
    "url": "/_nuxt/41d0a0028d179cfb0a7a.js",
    "revision": "b6054408dea58dfc040601de522f86ed"
=======
    "url": "/_nuxt/30467d4455eb78a2f5d6.js",
    "revision": "a08b5c06bd838c7e5851b3f2516bdd90"
>>>>>>> develop
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
    "url": "/_nuxt/4e7efbedb0a42f0620ba.js",
    "revision": "22bb0b751ce3cee4a84e50ca63575298"
  },
  {
    "url": "/_nuxt/68d09ab55aa8216a0b1f.js",
    "revision": "c5eaf457527e031b77768ee30706b0ae"
  },
  {
<<<<<<< HEAD
    "url": "/_nuxt/84e70d936d2d647e10ab.js",
    "revision": "dd4bd73068713c2eb25b6bea71b18b0f"
=======
    "url": "/_nuxt/798078d5103714d882f1.js",
    "revision": "b93e8d93c1de2d991b5c0f1b1eab0442"
>>>>>>> develop
  },
  {
    "url": "/_nuxt/8baf75fd4e5caaa01e22.js",
    "revision": "63b6955127bc453c500fe359163bb15d"
  },
  {
<<<<<<< HEAD
    "url": "/_nuxt/8f254fa9679f8bd7aa29.js",
    "revision": "787a816e7bff36b01a159a0b2c190220"
  },
  {
    "url": "/_nuxt/9ab950837179e9fab856.js",
    "revision": "29f30ebd3d3f7434da072ba28da055d7"
=======
    "url": "/_nuxt/9d2e6b6ca7db55f70c63.js",
    "revision": "d95ce7c917eea7f33471866bb22fefc3"
  },
  {
    "url": "/_nuxt/bed2d6e7bded19779ff4.js",
    "revision": "d01a4c5c9d10d8bf72b38f634d504ba7"
>>>>>>> develop
  },
  {
    "url": "/_nuxt/a49c2f3adbbd9c617a7c.js",
    "revision": "4fe86c6bbe5e3672ba79a0fe96d729aa"
  },
  {
    "url": "/_nuxt/a7983de62385634e691f.js",
    "revision": "79a02e086b9c1c96c750d0db0723aeeb"
  },
  {
    "url": "/_nuxt/a9478af00729d17f7e38.js",
    "revision": "05980ddd5a5f3813a4d4dc9b82434fa3"
  },
  {
<<<<<<< HEAD
    "url": "/_nuxt/c62eba3741ad24d4ab72.js",
    "revision": "603214b411fd609bb900d17e838ed613"
  },
  {
    "url": "/_nuxt/dea946df9b3abe2e9a93.js",
    "revision": "b22cff7c20a409d9411ad7da37f2e8c0"
  },
  {
    "url": "/_nuxt/f2119a74a3b5a974843d.js",
    "revision": "638c8d2cb207f6d2fa7347f8ab2a0ec8"
=======
    "url": "/_nuxt/f2a8114ee35e43553f6b.js",
    "revision": "68851616f309a9e086139a87c124131e"
  },
  {
    "url": "/_nuxt/f46dc63d37307e255bcd.js",
    "revision": "23c0f146bbd6fde36417b7b6d404ae02"
  },
  {
    "url": "/_nuxt/f5ebdcde9b79f5c37b41.js",
    "revision": "31eeeea86203e447eba44e659095fc9c"
  },
  {
    "url": "/_nuxt/fa9c6dc0bb4c27e880ff.js",
    "revision": "c9c01d5b9d1b8c793d827cec4ffc8735"
>>>>>>> develop
  },
  {
    "url": "/_nuxt/faa104dfbbbdc0f42b95.js",
    "revision": "e404fdddd25a76aa8f9d80e6f8e9ccad"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
