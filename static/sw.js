importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/176b00c6bd79c7d21f39.js",
    "revision": "64f4fc98c5073cb965b1e3284b4bda49"
  },
  {
    "url": "/_nuxt/1ca35d4e49fdd5cadf79.js",
    "revision": "c8bb4ac62b80521d46a15e0caea295f8"
  },
  {
    "url": "/_nuxt/1e17eab339b9be8779cb.js",
    "revision": "543b6f1cffd5341a8d0e6aa4305e02ca"
  },
  {
    "url": "/_nuxt/24e12be0e1a1b2190374.js",
    "revision": "9c7a0f79880282026d5e80845cff74dd"
  },
  {
    "url": "/_nuxt/2541828d3aaf6307f2cb.js",
    "revision": "95755affcd214197c7959f0a5bfdabfc"
  },
  {
    "url": "/_nuxt/27b16985fb1ed4bd960f.js",
    "revision": "4d0194aed45f9b588f257eac190e246b"
  },
  {
    "url": "/_nuxt/3c586a6984a8b7274ec2.js",
    "revision": "57bb3f2dd391d88c1bd90c7e8b9fef94"
  },
  {
    "url": "/_nuxt/4a2074387bc58753aebd.js",
    "revision": "bf6b8aa339fdfe2e4d43c8888acc3fb1"
  },
  {
    "url": "/_nuxt/4bf828dda7d2e7ba3a12.js",
    "revision": "defa95dafa10ce38a211c756ad7e9bad"
  },
  {
    "url": "/_nuxt/5097926fefc750115c8a.js",
    "revision": "7afacb0a82212400ad23b40a5d5ad329"
  },
  {
    "url": "/_nuxt/5e4ddb290aae9fa30ac2.js",
    "revision": "1be6bd7942805f889968ba06cbaf0780"
  },
  {
    "url": "/_nuxt/66db672a239f8681b884.js",
    "revision": "a13ad4edff0abd7030cecfda526eb66c"
  },
  {
    "url": "/_nuxt/77421774ca2ec8a66890.js",
    "revision": "73e5a37bfbb1c01638acf68eeefb66c2"
  },
  {
    "url": "/_nuxt/7f1110347a03d4292b12.js",
    "revision": "dda2fdd2df116646f1855b39eb43be65"
  },
  {
    "url": "/_nuxt/8e43f8876fea1e9e22f2.js",
    "revision": "f7a309ac20a43704c5316d0a9bc7d800"
  },
  {
    "url": "/_nuxt/a71877faae9ae02eb88c.js",
    "revision": "9ff91a228ff7c32ec118f1671a5ef90f"
  },
  {
    "url": "/_nuxt/bb454edc4eecb670efc0.js",
    "revision": "00c1f073adbfb57c8557604b8687e406"
  },
  {
    "url": "/_nuxt/d994df426fa41c8a3c54.js",
    "revision": "2802929897fd43efbffb516ef4313be9"
  },
  {
    "url": "/_nuxt/dad608cf57c23b57ec3d.js",
    "revision": "02fcbdf3d2020bfa359dc98b371a6531"
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
