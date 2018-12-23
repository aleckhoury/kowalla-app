const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:Black' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/onesignal'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },



  /* ------------------------------------------------------------
  | PWA Setup
  | ------------------------------------------------------------ */

  manifest: {
    // https://pwa.nuxtjs.org/modules/manifest
    name: 'kowalla',
    shortname: 'kowalla',
    dir: 'rtl',
    lang: 'en-US',
  },

  workbox: {
    // https://pwa.nuxtjs.org/modules/workbox
  },

  icon: {
    // https://pwa.nuxtjs.org/modules/icon
  },

  meta: {
    // https://pwa.nuxtjs.org/modules/meta
  },

  oneSignal: {
    // https://pwa.nuxtjs.org/modules/onesignal
  }







  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend(config, ctx) {
  //     // Run ESLint on save
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}
