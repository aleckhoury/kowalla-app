importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "501a60214037acb933337583511601c5"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "934cc2f21351ef2169c441cba7c08741"
  },
  {
    "url": "/_nuxt/pages/about.js",
    "revision": "f99baa4d139e8361936e28619df3a1f2"
  },
  {
    "url": "/_nuxt/pages/dev/c/_communityname/index.js",
    "revision": "8696798758e5e9cd383ba74c8bf0d217"
  },
  {
    "url": "/_nuxt/pages/dev/c/_communityname/index/posts/_postId.js",
    "revision": "6b17f1c00fbb15b14e53cf8f5c6b66b8"
  },
  {
    "url": "/_nuxt/pages/dev/focus.js",
    "revision": "3453f2337e2756669a75b05100bece53"
  },
  {
    "url": "/_nuxt/pages/dev/index.js",
    "revision": "d0db333df850395b9a8a2862699b45db"
  },
  {
    "url": "/_nuxt/pages/dev/index/posts/_postId.js",
    "revision": "bf1e86e21ef2ac7734c363de4a4e5d16"
  },
  {
    "url": "/_nuxt/pages/dev/p/_projectname/index.js",
    "revision": "4b8f45b38aed3d4b6b1d354d3cda2a8b"
  },
  {
    "url": "/_nuxt/pages/dev/p/_projectname/index/posts/_postId.js",
    "revision": "2e639bde04f125baa2eda18f061ec969"
  },
  {
    "url": "/_nuxt/pages/dev/Trello.js",
    "revision": "df62cce0dd77a4d9214a04e5a13b01cb"
  },
  {
    "url": "/_nuxt/pages/dev/Trello.pages/dev/c/_communityname/index.pages/dev/index.pages/dev/p/_projectname/index.pag.0575538c.js",
    "revision": "1b185079c882923d6c037d7a831bd51a"
  },
  {
    "url": "/_nuxt/pages/dev/u/_username.js",
    "revision": "6ad5d8dbfae8be4f15ec1eb3b0d74b52"
  },
  {
    "url": "/_nuxt/pages/index.js",
    "revision": "28104cb631fd6f107c71d10030736544"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "41a942fbafe7ddaa411bcc895eb49cc0"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "d1ae9b9d879dec552a8f6a90eae5be2f"
  },
  {
    "url": "/_nuxt/vendors.pages/dev/c/_communityname/index.pages/dev/focus.pages/dev/index.pages/dev/p/_projectname/in.ac0c3e91.js",
    "revision": "f1278424ae10764ff42dc2ccd2e7e847"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
