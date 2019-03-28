importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/040ccdda1acf29e1929e.js",
    "revision": "2c043a907745b623a6201c7668ce6c64"
  },
  {
    "url": "/_nuxt/0b8f57543d7835ed5df9.js",
    "revision": "a262fdc3f6504a6bc1bcde66f1d557c0"
  },
  {
    "url": "/_nuxt/3e3b8ce8565a3fa25bc2.js",
    "revision": "b0b6e08d801cf1fd123934b772cf9511"
  },
  {
    "url": "/_nuxt/588ce837a25844401b18.js",
    "revision": "1d2cc01ac6c046acc23a1744ed7ab571"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/6aa49abf5f86eff0a32b.js",
    "revision": "7b86be922923daba8de40a9db89d2e2b"
  },
  {
    "url": "/_nuxt/6ecd85df25d154840227.js",
    "revision": "343ae4e13f0842b8185918c6092bb249"
  },
  {
    "url": "/_nuxt/77421774ca2ec8a66890.js",
    "revision": "73e5a37bfbb1c01638acf68eeefb66c2"
  },
  {
    "url": "/_nuxt/8774eeafd05d8f23ca0a.js",
    "revision": "3570555106da1916a9f5ef4f01cc544a"
  },
  {
    "url": "/_nuxt/97d187f7891adac29a5f.js",
    "revision": "38133c1fcbbd9b313c2f21ac7b0b0c8b"
  },
  {
    "url": "/_nuxt/ba083730b3d309bba16e.js",
    "revision": "99e921e517170732b5963a201d4fe4fe"
  },
  {
    "url": "/_nuxt/c58214b5db09a5493394.js",
    "revision": "613dfbbfdc1d80019a66a18741a871f9"
  },
  {
    "url": "/_nuxt/ce524adf02ca0bd6a96e.js",
    "revision": "af68db757f00885737643bb78f04b311"
  },
  {
    "url": "/_nuxt/dfd71d33f7c68789a844.js",
    "revision": "574fb92d1e5f292f6dbcf7fa762c1172"
  },
  {
    "url": "/_nuxt/e9e6cc725668e1d6773f.js",
    "revision": "19241a11f10bacb8af715c27f4ebe458"
  },
  {
    "url": "/_nuxt/ef09a731d30f93127b54.js",
    "revision": "bd8350606cb57f63a1d65bcee2ed118e"
  },
  {
    "url": "/_nuxt/f315af3fc1c073921119.js",
    "revision": "4e1fe1235e97598aeaaddeb3a5a2817e"
  },
  {
    "url": "/_nuxt/f94ccc95dc183e67515b.js",
    "revision": "91d0d17e5fd99ceddb7da352ffd09c12"
  },
  {
    "url": "/_nuxt/fd08bb44bf96a39957bd.js",
    "revision": "07af50cdcec93c4beb229e5b4260a681"
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
