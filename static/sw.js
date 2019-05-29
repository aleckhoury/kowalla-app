importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/038c000214a6c6195925.js",
    "revision": "2023af25287929371dd9d38eeaf4d2ef"
  },
  {
    "url": "/_nuxt/0abc03e652f7864afda2.js",
    "revision": "54a7f42cc554bf8c2619bb5981ea60c1"
  },
  {
    "url": "/_nuxt/0e5c94ccceeef04ccbee.js",
    "revision": "7f6a476414539ec6a789c9d473161a84"
  },
  {
    "url": "/_nuxt/1990a0335a206aac6645.js",
    "revision": "43896fa206811156ecba6133a01d705d"
  },
  {
    "url": "/_nuxt/27102309d2ec45947391.js",
    "revision": "6df3214486a4460ddfc12ca740881a28"
  },
  {
    "url": "/_nuxt/296f850d154bce29e183.js",
    "revision": "fd3e148e5fc4881cf29dbd199b4d2858"
  },
  {
    "url": "/_nuxt/5414bcb624971c713984.js",
    "revision": "c8764c56e925b8aca77cc88b5f5c8ef6"
  },
  {
    "url": "/_nuxt/60bbde6c6b7fbcf83245.js",
    "revision": "20913cb7f6f28b98db6e88bfcd46990c"
  },
  {
    "url": "/_nuxt/72acdc14befda0beffbf.js",
    "revision": "86ad08567352e4ebdbe82c0f71efdf9e"
  },
  {
    "url": "/_nuxt/853a679846df89496982.js",
    "revision": "4112c01ac16cbc2dfd6c8a439782982e"
  },
  {
    "url": "/_nuxt/94c4cbadf05dfc6800a6.js",
    "revision": "ffadd69d5370dd3ffc5d4b354a04b2d0"
  },
  {
    "url": "/_nuxt/99abe8c4181c7bb7c436.js",
    "revision": "700cc8771fb170ebd11b85775c5ba90b"
  },
  {
    "url": "/_nuxt/a76f8eaa130a18c2774f.js",
    "revision": "250e0cc544e6e4de43ec327bc5ccf255"
  },
  {
    "url": "/_nuxt/a803646d89eca827f48e.js",
    "revision": "d4203c038d6d17d7b4982e6c373c898c"
  },
  {
    "url": "/_nuxt/b487dab910234405634c.js",
    "revision": "a0469b5ecb3fd3c99e5ee271326203cf"
  },
  {
    "url": "/_nuxt/c034551b5e0bdd22bde6.js",
    "revision": "3be7c0bc70d1d80def44079bb166f0fb"
  },
  {
    "url": "/_nuxt/d2ab7a70d56f86fe25a3.js",
    "revision": "3a87f934ddcbe0dccd248db35e3b11cc"
  },
  {
    "url": "/_nuxt/d5114888bf65aa2ba714.js",
    "revision": "26e47755998b421729837f0469d6e800"
  },
  {
    "url": "/_nuxt/f8749af12bbcb8aaaebd.js",
    "revision": "51af6faa0a4337d9948f9d71c17e4aa1"
  },
  {
    "url": "/_nuxt/fde4f3f6150c693beb7f.js",
    "revision": "fdd01e8a5511a102b6df3dd6f8fc7322"
  },
  {
    "url": "/_nuxt/ff6e6037e6a3ff889d1b.js",
    "revision": "6d78231cb046d2b92dbc90115baf7f20"
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
