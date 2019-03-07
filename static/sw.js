importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08ca0e03a962386097f9.js",
    "revision": "7ca077f0224e64782ec8de96918f1dd4"
  },
  {
    "url": "/_nuxt/1c2d128adc759ad9534c.js",
    "revision": "8cecabc6d2b7b2576dc51daaf7bdab17"
  },
  {
    "url": "/_nuxt/2c0470e6a6e78d4ae60c.js",
    "revision": "bbebf7c9d80be987f2750c83a5b36c28"
  },
  {
    "url": "/_nuxt/55898dec5b11c4c8fd5c.js",
    "revision": "8496c668e74a4a806595cdaf666ab109"
  },
  {
    "url": "/_nuxt/5af72ac0069e5fc42491.js",
    "revision": "5ceb8035ce6e95a3f7e680ef24109ecf"
  },
  {
    "url": "/_nuxt/68c9c878855e1d4b1170.js",
    "revision": "70bfe2b510e69ddd9337eea805246d1f"
  },
  {
    "url": "/_nuxt/7aebcd96600d143e3bd3.js",
    "revision": "6be7fa2c86fa0f585c4b82d46a632dfa"
  },
  {
    "url": "/_nuxt/82c4bbfb27822de6c6e3.js",
    "revision": "979e074605eb8a4195eba030fcf14fd7"
  },
  {
    "url": "/_nuxt/9143648cc17b53c34d68.js",
    "revision": "32d78a7445a05c5e173af43e5c5f5afd"
  },
  {
    "url": "/_nuxt/99d0fe6b60d1ccffdc45.js",
    "revision": "a19665235a91e726cc7f2e85b3b872db"
  },
  {
    "url": "/_nuxt/9a3f1578290291941420.js",
    "revision": "5d189fef10325819b2dc16825dde00e0"
  },
  {
    "url": "/_nuxt/9f13a05d3bb1fcbdf540.js",
    "revision": "03dae20f8b8479000875b1a903eca3ba"
  },
  {
    "url": "/_nuxt/cbbf46b9e4efcdf4019b.js",
    "revision": "66320e0acd5723133e21246838591d9c"
  },
  {
    "url": "/_nuxt/e132dc8a875917746fc6.js",
    "revision": "fd0e89ab4335db633e285274c9d61c49"
  },
  {
    "url": "/_nuxt/e590f0b371e2bbad30e2.js",
    "revision": "cd2f57a19a1266ac424e4ee95597a9a2"
  },
  {
    "url": "/_nuxt/fc5707e7138cd2a64844.js",
    "revision": "a06e1e1f0a630e57f2ca31371e8afba3"
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
