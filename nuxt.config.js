const pkg = require('./package');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: pkg.description, },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:Black',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', },

  /*
  ** Global CSS
  */

  css: [
    '~/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */

  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    //'@nuxtjs/onesignal',
    ['nuxt-buefy', { materialDesignIcons: false }],
  ],
  /*
  ** Axios module configuration
  */
  // axios: {
  //   // baseURL: 'https://kowalla-backend-tob.herokuapp.com',
  //   baseURL: 'http://localhost:8080',
  //   credentials: true,
  // },

  router: {
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

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [ 'faArrowRight', 'faPlus', 'faSearch', 'faSmile', 'faLink', 'faComments',
          'faAngleDown', 'faTrashAlt', 'faArrowUp', 'faBell', 'faBold',
          'faItalic', 'faStrikethrough', 'faUnderline', 'faCode', 'faTasks', 'faListUl',
          'faListOl', 'faQuoteRight', 'faMinus', 'faCamera', 'faClock', 'faHome',
          'faPencilRuler', 'faUserFriends', 'faProjectDiagram' ],
      },
      // {
      //   set: '@fortawesome/free-brands-svg-icons',
      //   icons: ['fab',],
      // },
    ],
  },

  icon: {
    // https://pwa.nuxtjs.org/modules/icon
  },

  meta: {
    // https://pwa.nuxtjs.org/modules/meta
  },
  /*
  oneSignal: {
    // https://pwa.nuxtjs.org/modules/onesignal
  }
  */

  /*
  ** Build configuration
  */
  build: {
    extend(config) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
    //   /*
    //   ** You can extend webpack config here
    //   */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     });
    //   }
    // },
  },
};
