importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1656c54bfc569c76b773.js",
    "revision": "798e4f40e5f8e42b396e2f397e0ab47a"
  },
  {
    "url": "/_nuxt/192ea1cfb6b2d080c4a9.js",
    "revision": "0444dedfa87a3c55fe42206326ff1141"
  },
  {
    "url": "/_nuxt/1cab202d7fbcb5ed4476.js",
    "revision": "4abfa53b9eb47d136dc1ef54360b7900"
  },
  {
    "url": "/_nuxt/2a0cde095d9c3d395e75.js",
    "revision": "28389b22bd6de88e55ed7b5e800e3fee"
  },
  {
    "url": "/_nuxt/4f0f48ca3d7a2a71f5aa.js",
    "revision": "b0d3a6001e0d56b2f86feaf6bcf394dd"
  },
  {
    "url": "/_nuxt/58c84a5ff2e6ba841b33.js",
    "revision": "cefed4f49e44b4bb9a7acfbb623725d9"
  },
  {
    "url": "/_nuxt/7ab50087d411ff2a0f90.js",
    "revision": "ecd89fbc15cd918f97e813824bc3f95d"
  },
  {
    "url": "/_nuxt/7f9af4601e3030f8ef64.js",
    "revision": "38fd6247abc1c1d75960ea0073086a68"
  },
  {
    "url": "/_nuxt/828dad049437bfdf229a.js",
    "revision": "3d7968b54e10b5991c4792039d2ed981"
  },
  {
    "url": "/_nuxt/844687728562988b6503.js",
    "revision": "0ab0d5a1ee8e60a7dc79aa275763f123"
  },
  {
    "url": "/_nuxt/a4c2bdb07206ce524470.js",
    "revision": "83a9d18de0979f1eab6e5395151630e3"
  },
  {
    "url": "/_nuxt/cfd1279a1f9c1d1909c8.js",
    "revision": "1550170a8f505b2afdefa0e99142be04"
  },
  {
    "url": "/_nuxt/d411fd1b9fb9417b3e84.js",
    "revision": "d1b6e3c6b9a2650bac29ae4f8870d719"
  },
  {
    "url": "/_nuxt/d561aceba1432f9d2c74.js",
    "revision": "242579b981fb4b10d90baddba7f9ed65"
  },
  {
    "url": "/_nuxt/ea2c1ef4f9e7ac7709b5.js",
    "revision": "1b81bc23bb6240ee4359597752bf834e"
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
