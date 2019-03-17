importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/25682d7d4f5257a4cc3a.js",
    "revision": "8651a36f68421642447b088c9311001d"
  },
  {
    "url": "/_nuxt/25dd8a29c7ccb9a0d2e4.js",
    "revision": "eae3ae9ca64a37ef6525a65d4c18f219"
  },
  {
    "url": "/_nuxt/27e46934afbae372f247.js",
    "revision": "4cee0cee567738126ed1400093f7713e"
  },
  {
    "url": "/_nuxt/3a196b304aed96521269.js",
    "revision": "b6c59a6114afdeb9528fe58efb984958"
  },
  {
    "url": "/_nuxt/4a0c33504c4e4d8e13cf.js",
    "revision": "a70f442789b54af76b80382c0407d9c5"
  },
  {
    "url": "/_nuxt/4c1ca72916d8e33ef5f8.js",
    "revision": "ff9c1c7bd51a32a5a7afe309641074ca"
  },
  {
    "url": "/_nuxt/510bba015863385daa87.js",
    "revision": "a43b414f582e83829f64b659a0457fac"
  },
  {
    "url": "/_nuxt/6222c43c969ce185e64c.js",
    "revision": "0877bf09a5f937805d6040f137de33d0"
  },
  {
    "url": "/_nuxt/71d637c8a33151b46af4.js",
    "revision": "3b40daa031c2e5964cc8124bc215f502"
  },
  {
    "url": "/_nuxt/8692ac210a3485f5b21a.js",
    "revision": "bacb3e50932537b9b7a24afc5b7e9894"
  },
  {
    "url": "/_nuxt/8afd939805e2425b9c9d.js",
    "revision": "b09ff71e3a3b94f54ad0aaca97d8c7bc"
  },
  {
    "url": "/_nuxt/8bd168bbb0ab36684945.js",
    "revision": "b0e926a76ff95ac6de1cf0fd925437e7"
  },
  {
    "url": "/_nuxt/94e63962ace345760a89.js",
    "revision": "6d67c7fbdcdde5ff5c74ccfe697afb74"
  },
  {
    "url": "/_nuxt/ac6a592a8e3ce79ad213.js",
    "revision": "15e4bb7a80f3b272733f96e17847b99f"
  },
  {
    "url": "/_nuxt/b1efdcd0e1be16bb571c.js",
    "revision": "25c531dfb0292b7745f6e4611f360ce7"
  },
  {
    "url": "/_nuxt/c122fc1bf856a5d9eb0b.js",
    "revision": "d31400e0a590856e4a24cfe9f646315b"
  },
  {
    "url": "/_nuxt/ca12dc77b0e7c93f5a4e.js",
    "revision": "5e85a4c09d13ca35329228fe9c396330"
  },
  {
    "url": "/_nuxt/cde86ab80ddac4028d9d.js",
    "revision": "7664f013617b364c84c90b44c51875da"
  },
  {
    "url": "/_nuxt/d13824b56d0fecac5da6.js",
    "revision": "2ce6a7beaba96920467b43234d9e4c00"
  },
  {
    "url": "/_nuxt/ed3ebc9462f88edec963.js",
    "revision": "a5a0338e808a2c0e23263eee30bc06f7"
  },
  {
    "url": "/_nuxt/f6fc246ba18f3a34ce80.js",
    "revision": "62d03d66ad2fec5aadf1510e35ed2152"
  },
  {
    "url": "/_nuxt/feec443f578d0f17cd4e.js",
    "revision": "d83b5ddcc32a81405dbd0ac7d1538615"
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
