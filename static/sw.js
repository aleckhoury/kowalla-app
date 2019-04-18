importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0039b8cfe97197c25c54.js",
    "revision": "56b842cf6e6be1baec8166ebffebb63c"
  },
  {
    "url": "/_nuxt/00e0a1bef0edf2aa274e.js",
    "revision": "3e5692e8edf01aaf096fa69895654ad3"
  },
  {
    "url": "/_nuxt/09ff571ab674b9250877.js",
    "revision": "a6bdc0395b8145eed8294b7d244cbe84"
  },
  {
    "url": "/_nuxt/135ffb37d229db34df39.js",
    "revision": "1afa027ebf7a1591d93b017dc152e306"
  },
  {
    "url": "/_nuxt/27da6aad5df982916e8b.js",
    "revision": "52b0428c58fd452f3452849b9d4f7b2b"
  },
  {
    "url": "/_nuxt/34c1397d63b235978a23.js",
    "revision": "37445f1d38f81b458bf35ed80b1daabf"
  },
  {
    "url": "/_nuxt/3b18817b777de13e5032.js",
    "revision": "122091b05b0b8adf48b8cb44c952bf0e"
  },
  {
    "url": "/_nuxt/404fc863732af6b2d00a.js",
    "revision": "d441f550f944a9e21bba8b50b0c82266"
  },
  {
    "url": "/_nuxt/47d52b44814004af6f32.js",
    "revision": "07f97089d49100406bb18d46d1181b7b"
  },
  {
    "url": "/_nuxt/6890b91ba3be3b8bdfab.js",
    "revision": "2cdaf350af023ad5c757a0a3fc299be3"
  },
  {
    "url": "/_nuxt/831428b5bdc71f8ea5e3.js",
    "revision": "14b1b1fead766714c4cef47776698f03"
  },
  {
    "url": "/_nuxt/98f98455853861e3903a.js",
    "revision": "f7154e433b95ea519304c8d0f591b39a"
  },
  {
    "url": "/_nuxt/a6977f093aff1da30bae.js",
    "revision": "e8306f0892823e936bd1abd165f37056"
  },
  {
    "url": "/_nuxt/a996bec23562439b1e0c.js",
    "revision": "3d573fc4bdad33f3ec849fabe3f21fd7"
  },
  {
    "url": "/_nuxt/b232a80f784c1cf84bae.js",
    "revision": "8e2ed7dad4b65176892e3421184873ea"
  },
  {
    "url": "/_nuxt/b5da01c91c18154a2797.js",
    "revision": "97600a52fd460dbba15e02614cc5e86a"
  },
  {
    "url": "/_nuxt/b8e5e7d9304a4fd5aa53.js",
    "revision": "2ab6d54f8e911b641aaaa43f4e7e9a22"
  },
  {
    "url": "/_nuxt/cab09a69209b42b4c119.js",
    "revision": "346bc618f48ac755d344410ea12e6ed0"
  },
  {
    "url": "/_nuxt/ed4fae84f9a6c60bdb88.js",
    "revision": "9ee5d8f34a619727bb4994892d14d6c4"
  },
  {
    "url": "/_nuxt/f070dd0d211de20ae3dc.js",
    "revision": "ef6e46a1aa0cda53ef2fcc3d0fb90e02"
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
