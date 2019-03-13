importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d6b3b700db04c8f445f.js",
    "revision": "f973bfb012bee07d974f5e53d6c59645"
  },
  {
    "url": "/_nuxt/228f3e174e1977021861.js",
    "revision": "6ed8834e67f6718272027cb22d5cf117"
  },
  {
    "url": "/_nuxt/31b642215f455e481686.js",
    "revision": "3f15c336153a5412ce73180122824a5f"
  },
  {
    "url": "/_nuxt/47c31dba4d764c535a64.js",
    "revision": "ceaef5a81d5253ada1601a4aebf1f092"
  },
  {
    "url": "/_nuxt/4e8bdf5bc42d3fcf9223.js",
    "revision": "3e698102772fa75372a2a5d0e39b81b3"
  },
  {
    "url": "/_nuxt/584839923f35dd69eb54.js",
    "revision": "f4f27d5495e5a11b9ae075eb4b02f065"
  },
  {
    "url": "/_nuxt/634c4f386e491dc2608f.js",
    "revision": "8cc38a5bcc62a2bc2fc1598974e8b424"
  },
  {
    "url": "/_nuxt/673191ed7415b3102802.js",
    "revision": "c12225beb7693600e0b8972a83f62667"
  },
  {
    "url": "/_nuxt/8a97ae804c04a4664e9a.js",
    "revision": "f51b78921572b92bc62a6b7e660383c0"
  },
  {
    "url": "/_nuxt/9606a9d4e436ef903a72.js",
    "revision": "af71e6624e6b0ca15b885b098ab9fda2"
  },
  {
    "url": "/_nuxt/af2537e58d4e4ba9e973.js",
    "revision": "da2d33f1a1cc520ff9e3454c4ab3e59c"
  },
  {
    "url": "/_nuxt/b1726bf6243b455a721d.js",
    "revision": "24fb0832df46f16fe1c5f834fe50d1c5"
  },
  {
    "url": "/_nuxt/b9e2e9fca3624fc78708.js",
    "revision": "6bfccd5a43d021d79bca18900e32227f"
  },
  {
    "url": "/_nuxt/bb98048f9aa51f0d8165.js",
    "revision": "d832b2641eedef205d10f202ea44bfc8"
  },
  {
    "url": "/_nuxt/c22daf489e593e0370a2.js",
    "revision": "237fc91f39022bf8802a212bb54b4b5e"
  },
  {
    "url": "/_nuxt/c6f0fd0157ff1b35d337.js",
    "revision": "1154583ad8d80e167ea369d83e818896"
  },
  {
    "url": "/_nuxt/c891f4be31dbecf659eb.js",
    "revision": "4a2555485996ef2e6d11f2f6e81c8c9e"
  },
  {
    "url": "/_nuxt/e48d5935e234d9b2ac67.js",
    "revision": "6ddd825abde0cc19c1906724867dd394"
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
