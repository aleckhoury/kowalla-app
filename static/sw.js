importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/070e17b54e04bdfa5236.js",
    "revision": "052d0ddb8a8807c06384f06671df5979"
  },
  {
    "url": "/_nuxt/110f76a577fab914b517.js",
    "revision": "863ff2929bc1d6c71bc0a0f231e7772f"
  },
  {
    "url": "/_nuxt/4349b4afb1af0d71fb29.js",
    "revision": "c211d80c5aa7bd81e4c002edaa5506b5"
  },
  {
    "url": "/_nuxt/57f2d988af97fe49e673.js",
    "revision": "aff501fc206ba5e32df4e7af0af57dce"
  },
  {
    "url": "/_nuxt/74e2a2f05316b4e86a8b.js",
    "revision": "0722b6496f2a3dbefae0862a547e0a54"
  },
  {
    "url": "/_nuxt/767efab2eb2506897c39.js",
    "revision": "70c3fa937e899b1154e1ff78bb23896e"
  },
  {
    "url": "/_nuxt/97e1aa5e4e88853e60f3.js",
    "revision": "8fc6043f8bbef84940d89a0d4ccbfd96"
  },
  {
    "url": "/_nuxt/d0c2f4382e44dc702c1a.js",
    "revision": "12a2c186089c021f38048efaeffeab8f"
  },
  {
    "url": "/_nuxt/d94eb4548cfede808176.js",
    "revision": "eff26eed410c58aadb3d972766f873f4"
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
