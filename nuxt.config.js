const pkg = require("./package.json");

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    script: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-140796518-1",
      },
      {
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-140796518-1');
        `
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito:Black",
      },
      { rel: 'apple-touch-icon', href: 'icon.png' },
      { rel: "apple-touch-startup-image", href: "iphone5_splash.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "iphone6_splash.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "iphoneplus_splash.png", media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" },
      { rel: "apple-touch-startup-image", href: "iphonex_splash.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" },
      { rel: "apple-touch-startup-image", href: "iphonexr_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "iphonexsmax_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" },
      { rel: "apple-touch-startup-image", href: "ipad_splash.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "ipadpro1_splash.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "ipadpro3_splash.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" },
      { rel: "apple-touch-startup-image", href: "ipadpro2_splash.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */

  css: [
    // 'bulma/css/bulma.css',
    "~/css/main.css",
  ],

  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    { src: "~/plugins/localStorage.js", ssr: false },
    { src: '~/plugins/socket.io.js', ssr: false },
    "~/plugins/axios",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "nuxt-fontawesome",
    "@nuxtjs/pwa",
    "@nuxtjs/proxy",
    //'@nuxtjs/onesignal',
    "nuxt-buefy",
  ],
  /*
   ** Axios module configuration
   */
  // axios: {
  //   // baseUrl: 'https://kowalla-backend-tob.herokuapp.com',
  //   baseUrl: 'http://localhost:8080',
  //   credentials: true,
  // },
  /* ------------------------------------------------------------
  | PWA Setup
  | ------------------------------------------------------------ */

  manifest: {
    // https://pwa.nuxtjs.org/modules/manifest
    name: "Kowalla",
    shortname: "Kowalla",
    dir: "rtl",
    lang: "en-US",
    background_color: '#39c9a0',
    theme_color: '#39c9a0',
    icons: [{
      src: 'static/icon.png',
      sizes: '512x512',
      type: 'image/png'
    }]
  },
  router: {
    // Run the middleware/user-agent.js on every page
  },

  workbox: {
    // https://pwa.nuxtjs.org/modules/workbox
  },

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: [
          "faArrowRight",
          "faArrowLeft",
          "faPlus",
          "faSearch",
          "faSmile",
          "faLink",
          "faComments",
          "faAngleDown",
          "faTrashAlt",
          "faArrowUp",
          "faBell",
          "faBold",
          "faFlag",
          "faItalic",
          "faStrikethrough",
          "faUnderline",
          "faCode",
          "faTasks",
          "faListUl",
          "faListOl",
          "faQuoteRight",
          "faMinus",
          "faCamera",
          "faClock",
          "faHome",
          "faPencilRuler",
          "faUserFriends",
          "faProjectDiagram",
          "faEnvelope",
          "faTools",
          "faHandshake",
          "faChevronRight",
          "faTimes",
          "faCheck"
        ],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: [
          "faTwitter",
          "faGithub"
        ]
      }
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
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
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
};
