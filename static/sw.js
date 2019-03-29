importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22a391412ad031bd5508.js",
    "revision": "ccb2c956948fd7f05e1f0bd479f94a42"
  },
  {
    "url": "/_nuxt/322e85e4c79538470d14.js",
    "revision": "24077f32afe3f8cd730ec8ecf3221fe9"
  },
  {
    "url": "/_nuxt/4474abff568baa5bc35f.js",
    "revision": "d0f72adf9935cba960bfa5d153ad6c49"
  },
  {
    "url": "/_nuxt/66829e50be4fa665be8c.js",
    "revision": "2821194d29171348ffad21124f2b8223"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/6a98cdc002d9a1957adb.js",
    "revision": "82fb751f887a2ae197a5d9bf6d5eb9c7"
  },
  {
    "url": "/_nuxt/7705fc72d1c956a6d0f5.js",
    "revision": "bd46fa62203505735920742c09bcd263"
  },
  {
    "url": "/_nuxt/7f4b5b05199b095d839d.js",
    "revision": "10d0ba1fb84899412b6146e1c7d29375"
  },
  {
    "url": "/_nuxt/8611a1e0c24fc9de73fe.js",
    "revision": "addb257244e11c03cee886141c2b39d3"
  },
  {
    "url": "/_nuxt/87a46d0c11cfa7181292.js",
    "revision": "d08b2d46b0b953d9e0430584876b90cd"
  },
  {
    "url": "/_nuxt/899db4c66d852c5923b9.js",
    "revision": "a9b8eee877caaf131f533ab00cf35265"
  },
  {
    "url": "/_nuxt/8f1d807d5d45f2a6b5d7.js",
    "revision": "4c82ced277f7cad6479ae32961e3e885"
  },
  {
    "url": "/_nuxt/a56ef420cddfaf11d182.js",
    "revision": "b912d87588db553a3310fc1ffac0563a"
  },
  {
    "url": "/_nuxt/a7bdf09c5cf5c1bebecd.js",
    "revision": "96b31c73a58637f0c416af4e93ba68a9"
  },
  {
    "url": "/_nuxt/b7050d14696017b1f2fc.js",
    "revision": "ae06091b58cf91a3d72899ad312598c0"
  },
  {
    "url": "/_nuxt/b7ef36084e9feef32941.js",
    "revision": "0d6a1fa793e6695f2ad6a133fe6c3158"
  },
  {
    "url": "/_nuxt/ce180286787936ea49f0.js",
    "revision": "766771a750f4e6adae4c951c6da28ee9"
  },
  {
    "url": "/_nuxt/d84bffcc1b05a4f558ef.js",
    "revision": "f7d99ebcce491d50b35f939980d41d88"
  },
  {
    "url": "/_nuxt/e0e253ca6d98070a5d11.js",
    "revision": "24885dfb8c7f299afc77617fe17b5d89"
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
