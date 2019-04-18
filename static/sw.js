importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04fff7f84170c9b3ea5a.js",
    "revision": "c4886c4e889877e3e08a9a9ddcf1ac8c"
  },
  {
    "url": "/_nuxt/07ab06a3d69559a2a4e5.js",
    "revision": "701051ab5846a095aee2195dea4acd5c"
  },
  {
    "url": "/_nuxt/0c27e961bc5694f66195.js",
    "revision": "e9e2fdd58c0e07fdacdcdbf37ebf0bbc"
  },
  {
    "url": "/_nuxt/11fb250e475fcdec2d3a.js",
    "revision": "fc035b2a8c0a7557d00d02c021abfdc0"
  },
  {
    "url": "/_nuxt/1a404a4dceb82112f56a.js",
    "revision": "6f580b370a40e057e793f07ad4a238a4"
  },
  {
    "url": "/_nuxt/2de665676327338f6ff2.js",
    "revision": "4b447c6f5e2dd4c04340d9d9a5e0093f"
  },
  {
    "url": "/_nuxt/6eabd49c0dc504178a51.js",
    "revision": "996aabbe6ae500fdd4a508d57ba7abb6"
  },
  {
    "url": "/_nuxt/7ae4f76b652ad80d4235.js",
    "revision": "e84789705d35a44220ef5c11e0088571"
  },
  {
    "url": "/_nuxt/8db4236991ffe7b8ba46.js",
    "revision": "60d36435f713d3b9f8f0180281d94029"
  },
  {
    "url": "/_nuxt/9698f53e47594208eba1.js",
    "revision": "37d0fd81d03266ceaa4bb879ab1eaca5"
  },
  {
    "url": "/_nuxt/9e9c15c4426451cdeff3.js",
    "revision": "278ba979165aafef974f05aa4ce7007f"
  },
  {
    "url": "/_nuxt/a3b4563cecad2b97e83d.js",
    "revision": "b8ca9db095e0398bfe230fb80580907f"
  },
  {
    "url": "/_nuxt/bb5c3707814cfae2cd0e.js",
    "revision": "3401aeab61db5be64d0edcb539a8e277"
  },
  {
    "url": "/_nuxt/c0f770a9baa5d684344f.js",
    "revision": "7388b035ae881f8acd483d5c4627f03a"
  },
  {
    "url": "/_nuxt/cc7f9b526259bc0b11ec.js",
    "revision": "928df8e41db598972eb0a5b9d3cf1949"
  },
  {
    "url": "/_nuxt/d7c90a8a6cbbe7bf98bc.js",
    "revision": "a027fcc958ba4e9d6a4f3a0141eb5840"
  },
  {
    "url": "/_nuxt/e5080e088f8ad7938056.js",
    "revision": "e130d44e2451eb5f6395085dc4fae427"
  },
  {
    "url": "/_nuxt/f76e038f6ff4e08d152f.js",
    "revision": "a4110b0dc64d2636e4dcc144941f83c9"
  },
  {
    "url": "/_nuxt/f7e6688d4164b419aaa0.js",
    "revision": "60b2946d5760858b52eb03d9e38eff99"
  },
  {
    "url": "/_nuxt/fdd800cff81be5b115b2.js",
    "revision": "8d52e218d712121446acba920c21ee75"
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
