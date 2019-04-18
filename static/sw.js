importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09ec840be7d2b61a98f4.js",
    "revision": "3c3b5c4a0c30ecfc67b4e7024f8696f3"
  },
  {
    "url": "/_nuxt/257cb9d5d50a6c6f07f8.js",
    "revision": "5f5b3e4507be7c0d4077a3bdfb072462"
  },
  {
    "url": "/_nuxt/34c1397d63b235978a23.js",
    "revision": "37445f1d38f81b458bf35ed80b1daabf"
  },
  {
    "url": "/_nuxt/34f3c8327e854f0205ac.js",
    "revision": "58059d4730a89e519db1f25749e89a55"
  },
  {
    "url": "/_nuxt/3fa7c9a1c58af316566f.js",
    "revision": "9edf50d4417dd065f9af8e6586a8b644"
  },
  {
    "url": "/_nuxt/4fb11165ccfb447a2d55.js",
    "revision": "6610e770803926a5c64534f12b0518f8"
  },
  {
    "url": "/_nuxt/521389ca4c813db01149.js",
    "revision": "c4b915da4abc7800d75aaa98920edb7e"
  },
  {
    "url": "/_nuxt/62669d8d941d851975f7.js",
    "revision": "d04b979aa1d1db61edac4d6f8301dc43"
  },
  {
    "url": "/_nuxt/79795426fcfd0c689870.js",
    "revision": "67f81793ab01870ab42eeaa2d9b83d53"
  },
  {
    "url": "/_nuxt/ae8f5c62c6355fe8cdb2.js",
    "revision": "3a4ea4c518af9cb491ffd851376f50e5"
  },
  {
    "url": "/_nuxt/bf0a3903b459ab114ba6.js",
    "revision": "7f7cbafd2bc56dafa93bc1905390c7b5"
  },
  {
    "url": "/_nuxt/c503070aa07c2686d7e3.js",
    "revision": "b06b2dccbe8e8e5a94eed073f2ade2f0"
  },
  {
    "url": "/_nuxt/c957b23dde00be65ba6c.js",
    "revision": "8405aacfbff6f2d629b51dcda57bbabf"
  },
  {
    "url": "/_nuxt/de4292b78d220d120be6.js",
    "revision": "fc6ca1f243719b156f9b8a9e67822f6a"
  },
  {
    "url": "/_nuxt/e052d497fd61702cf590.js",
    "revision": "7e855e175f14eeac35237b9bdc72dba1"
  },
  {
    "url": "/_nuxt/ed22c51e4bd9fbc43ee2.js",
    "revision": "ef684d3b4f7b04c3ca49041f38edad81"
  },
  {
    "url": "/_nuxt/f070dd0d211de20ae3dc.js",
    "revision": "ef6e46a1aa0cda53ef2fcc3d0fb90e02"
  },
  {
    "url": "/_nuxt/f67db095ffd849d04858.js",
    "revision": "36c87f78cdb879655198e886dea4f3a7"
  },
  {
    "url": "/_nuxt/f9234fab8103bad788f8.js",
    "revision": "11db51af60bc6ee3638a9b0e626959f7"
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
