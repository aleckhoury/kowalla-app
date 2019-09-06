import Vue from 'vue'

import '../node_modules/buefy/dist/buefy.css'

import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

import '../css/main.css'

import _6f6c098b from '../layouts/default.vue'
import _2d27502e from '../layouts/none.vue'

const layouts = { "_default": _6f6c098b,"_none": _2d27502e }

export default {
  head: {"script":[{"async":true,"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-140796518-1"},{"innerHTML":"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'UA-140796518-1');\n        "},{"src":"\u002F\u002Finstant.page\u002F2.0.0","type":"module","integrity":"sha384-D7B5eODAUd397+f4zNFAVlnDNDtO1ppV8rPnfygILQXhqu3cUndgHvlcJR2Bhig8"}],"__dangerouslyDisableSanitizers":["script"],"title":"Kowalla","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Build Together Here"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Kowalla"},{"hid":"author","name":"author","content":"Kowalla"},{"hid":"theme-color","name":"theme-color","content":"#39c9a0"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Kowalla"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Kowalla"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Build Together Here"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Nunito:Black"},{"rel":"apple-touch-icon","href":"icon.png"},{"rel":"apple-touch-startup-image","href":"iphone5_splash.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"iphone6_splash.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"iphoneplus_splash.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"},{"rel":"apple-touch-startup-image","href":"iphonex_splash.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"},{"rel":"apple-touch-startup-image","href":"iphonexr_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"iphonexsmax_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"},{"rel":"apple-touch-startup-image","href":"ipad_splash.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"ipadpro1_splash.png","media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"ipadpro3_splash.png","media":"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"apple-touch-startup-image","href":"ipadpro2_splash.png","media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.2e6716c4.json"},{"rel":"shortcut icon","href":"static\u002Ficon.png"}],"style":[],"htmlAttrs":{"lang":"en-US"}},

  render(h, props) {
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [

      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
  }
}
