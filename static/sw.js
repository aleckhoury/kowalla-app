importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/037dd7911cc9c3c28cd3.js",
    "revision": "98c6be702679c3aad2b5dec205d0100d"
  },
  {
    "url": "/_nuxt/12db045d4b01d814c491.js",
    "revision": "d56a26207e9550e78af912a40ebbd293"
  },
  {
    "url": "/_nuxt/1634c06fc59b65b853e0.js",
    "revision": "2fbeea51e306676761621376c915f783"
  },
  {
    "url": "/_nuxt/35ad6f726c9aee0d03f1.js",
    "revision": "f6e0dda86dae6165f3c742fe2496a1c2"
  },
  {
    "url": "/_nuxt/3a9dbf793c8932f7e819.js",
    "revision": "b86025dde2581b474a2109c7d27e3ec2"
  },
  {
    "url": "/_nuxt/3fc3c31a0b826181ddee.js",
    "revision": "33d32d5028dbb5e01d4d8d8d7ab5689f"
  },
  {
    "url": "/_nuxt/4852f73fe3394882bc7b.js",
    "revision": "36702bb381b0ebe9f70fef8d7f7cb5fd"
  },
  {
    "url": "/_nuxt/796fb1a94819a5a849af.js",
    "revision": "022fa221a33797475bac0b021d65a66b"
  },
  {
    "url": "/_nuxt/79d2fc1fb42192862c23.js",
    "revision": "2378b55397181bfc55bca58ece09fedf"
  },
  {
    "url": "/_nuxt/9610c3237d445cef1c20.js",
    "revision": "6327b29449d9902164abe7d445a1b408"
  },
  {
    "url": "/_nuxt/9d431f389c8e9a19a789.js",
    "revision": "bd3516f9f59d10b4ceea057bcce6ed4a"
  },
  {
    "url": "/_nuxt/c32660732fc9565d84c7.js",
    "revision": "e537b3bb1b51ab554707a6fd8610f661"
  },
  {
    "url": "/_nuxt/ca00cf9d7ced9408a2f1.js",
    "revision": "07a9e31dd9de20c1bf7bcf591b5a71d2"
  },
  {
    "url": "/_nuxt/cb3cc2e31cf50b58a814.js",
    "revision": "ae4a1bab7f4c79a1d1c17f203096f85b"
  },
  {
    "url": "/_nuxt/d9f490307d53b14434a4.js",
    "revision": "ad7e2f6c29514086091e97523dbb92bb"
  },
  {
    "url": "/_nuxt/da48fa1f9a6bcd2cd63e.js",
    "revision": "2ead448dd0eeb3a328f6e62f9ba8fa8d"
  },
  {
    "url": "/_nuxt/e843d21aa3706aa75271.js",
    "revision": "e658be60136714e548dedae7deb8854c"
  },
  {
    "url": "/_nuxt/e84cb01097a9eb1521f0.js",
    "revision": "a047244f229edd47bf26578bbfc23110"
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
