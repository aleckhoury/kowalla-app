importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "db295147eb7ed8990828b56a6a0cfc92"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "1ed89ac9b27048a8f342c27930032afd"
  },
  {
    "url": "/_nuxt/pages/beta/focus/_username/index.js",
    "revision": "9a659e5226a99442f13ae7764e825d5a"
  },
  {
    "url": "/_nuxt/pages/beta/index.js",
    "revision": "14c129991c8652e8e673aa210c785498"
  },
  {
    "url": "/_nuxt/pages/beta/index.pages/beta/project/_projectname/index.pages/beta/project/_projectname/posts/_postId.7f204e38.js",
    "revision": "6c22b8f4219570475a78a6fe80b8397d"
  },
  {
    "url": "/_nuxt/pages/beta/index/posts/_postId.js",
    "revision": "f9c5c622c168302ce390303af0282543"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/Edit.js",
    "revision": "ef93ae14fd4251af064655ce589b6bc7"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/Edit.pages/beta/project/_projectname/index.pages/beta/project/_proje.c33aa348.js",
    "revision": "d01a62714b62a427b20b8b007e663a5d"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/index.js",
    "revision": "250b7639fb381bc133a026c0af57a294"
  },
  {
    "url": "/_nuxt/pages/beta/project/_projectname/posts/_postId.js",
    "revision": "9b6cefe258c959ae53f4179c60e3b814"
  },
  {
    "url": "/_nuxt/pages/beta/signin.js",
    "revision": "d77d07a6452ff873d852c421be4b52bd"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/Edit.js",
    "revision": "95e6021b03eae9e303b4004720b076d0"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/index.js",
    "revision": "9e23ac5f6d960814901bd6b96350df41"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/index.pages/beta/space/_spacename/posts/_postId.js",
    "revision": "9ba2f58a1d67c6092d2db549f8c1c66a"
  },
  {
    "url": "/_nuxt/pages/beta/space/_spacename/posts/_postId.js",
    "revision": "f90ffd50557604b53c7c0740ea46238d"
  },
  {
    "url": "/_nuxt/pages/beta/user/_username/Edit.js",
    "revision": "7cc48f0cef473ef3b30dcc9a2e5886bf"
  },
  {
    "url": "/_nuxt/pages/beta/user/_username/index.js",
    "revision": "97229b8429e3aeb919d978f9dba8ba2e"
  },
  {
    "url": "/_nuxt/pages/index.js",
    "revision": "1b6f49714f0f1e862c8285ddee3934a5"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "2767f6a18ff44bdb0cb419c601a0999f"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "c14a08b02a9d1798f12b9dca75a1a326"
  },
  {
    "url": "/_nuxt/vendors.pages/beta/index.pages/beta/project/_projectname/index.pages/beta/project/_projectname/posts.9ecc6277.js",
    "revision": "3648671458633f4cd0eb4421922790bc"
  }
], {
  "cacheId": "Kowalla",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
