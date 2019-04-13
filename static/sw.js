importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
<<<<<<< HEAD
=======
    "url": "/_nuxt/176b00c6bd79c7d21f39.js",
    "revision": "64f4fc98c5073cb965b1e3284b4bda49"
  },
  {
    "url": "/_nuxt/1ca35d4e49fdd5cadf79.js",
    "revision": "c8bb4ac62b80521d46a15e0caea295f8"
  },
  {
>>>>>>> develop
    "url": "/_nuxt/0d38303bb7033357ec82.js",
    "revision": "94dbc1b812b26d82c317ec00b9250cd1"
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
<<<<<<< HEAD
    "url": "/_nuxt/4f3c420d1eb6ce790874.js",
    "revision": "922439fb6620815679c23b25d9763ae5"
  },
  {
    "url": "/_nuxt/55a184d59a3afed7ea22.js",
    "revision": "5a29eed2382078f87c7de9a7474674f8"
  },
  {
    "url": "/_nuxt/5c12ff4b0a95d0ea0565.js",
    "revision": "c641f1bf3239163ded682cb304660e3e"
  },
  {
    "url": "/_nuxt/6758596680a3a4e5d56f.js",
    "revision": "53830116f354408ca69ecf68239f849c"
=======
    "url": "/_nuxt/1a7b51551c039fe13f9d.js",
    "revision": "0f3084c0af8d8a69592f7999ee29d02b"
>>>>>>> develop
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
    "url": "/_nuxt/459adae30adcb877e27b.js",
    "revision": "7e2217ec0b3051fc360f1975ed4f4a05"
  },
  {
<<<<<<< HEAD
    "url": "/_nuxt/9c1fde582a41a0773d68.js",
    "revision": "191e63e940e5d7b15abdc2e4493dba7a"
  },
  {
    "url": "/_nuxt/b30d11f3cc539bdb8e38.js",
    "revision": "8a922b1640a3cface88faae88787f2fa"
  },
  {
    "url": "/_nuxt/c1c17451e10e6c18b13d.js",
    "revision": "43363a5685d3e5427a5825fae3e85be4"
  },
  {
    "url": "/_nuxt/cb697e8be4b85a96ef88.js",
    "revision": "46ed64922d8cb1deff0ad9b0c7f34a84"
  },
  {
    "url": "/_nuxt/ec2b21f98e27776fadf4.js",
    "revision": "fa053e834c4ad75786f179843be51eb3"
=======
    "url": "/_nuxt/487c4ea06065afd34ea5.js",
    "revision": "b5c4081b85ea8815d804e1d78a5e23a4"
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
    "url": "/_nuxt/9a7be71e20daa475ccf0.js",
    "revision": "eaaec2941754de1edb402c1802ed26ef"
  },
  {

    "url": "/_nuxt/d994df426fa41c8a3c54.js",
    "revision": "2802929897fd43efbffb516ef4313be9"
  },
  {
    "url": "/_nuxt/dad608cf57c23b57ec3d.js",
    "revision": "02fcbdf3d2020bfa359dc98b371a6531"

>>>>>>> develop
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
