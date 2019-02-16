importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/025770e4422313970800.js",
    "revision": "678636fd7335cea8965bf0939aa359f2"
  },
  {
    "url": "/_nuxt/033d91122463270df04d.js",
    "revision": "115d789dddab7fd813b35229cfc40124"
  },
  {
    "url": "/_nuxt/0f97179f010308c83cfb.js",
    "revision": "8ac56103b29eff681c6e59fbefdc0801"
  },
  {
    "url": "/_nuxt/1db40929f26602153249.js",
    "revision": "be8afc1e8ea52a71396a3a1cb7311198"
  },
  {
    "url": "/_nuxt/1f08c00a9a5ceb9930e9.js",
    "revision": "353b59155d2d3c857f0046aed387eddd"
  },
  {
    "url": "/_nuxt/456c9a2c2db4b4b28603.js",
    "revision": "11c4691f2768a8d772f4cd4d4e005d4b"
  },
  {
    "url": "/_nuxt/66721e943a024ef7b016.js",
    "revision": "708ba483f8bf7eb467c334357c4523d6"
  },
  {
    "url": "/_nuxt/6ff3ad2b2ee4abbaf4c0.js",
    "revision": "b7609852edc970176d6886f50aeb469a"
  },
  {
    "url": "/_nuxt/7e8f5d310c66c1b6a76e.js",
    "revision": "fd11e5e881c7b1bebf8fa739b5b34e6a"
  },
  {
    "url": "/_nuxt/aa5cfe9510e2173c8af8.js",
    "revision": "ea49c497cef4209db00d508e3b91d75e"
  },
  {
    "url": "/_nuxt/ce795f1905132bbbdd3b.js",
    "revision": "45509a29d55e451af1dda1351d66f369"
  },
  {
    "url": "/_nuxt/d94fc40a6e33a032989b.js",
    "revision": "d72768faa363c09d44e28df1772b918d"
  },
  {
    "url": "/_nuxt/e2d1a3414dd3cab129e5.js",
    "revision": "5949b9707c997c4328a65acd1f9e92bc"
  },
  {
    "url": "/_nuxt/f446c64847d790dc7a4a.js",
    "revision": "579de9f7fd578dae89cae9779da87939"
  },
  {
    "url": "/_nuxt/fe7e290701f78eb72bf9.js",
    "revision": "ecba5db87b56cac169428affb2293f91"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
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
