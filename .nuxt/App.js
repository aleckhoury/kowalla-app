import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/buefy/dist/buefy.css'

import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

import '../css/main.css'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"kowalla-app","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My beautiful Nuxt.js project"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"kowalla"},{"hid":"author","name":"author","content":"Kowalla"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"kowalla"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"kowalla"},{"hid":"og:description","name":"og:description","property":"og:description","content":"My beautiful Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Nunito:Black"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.materialdesignicons.com\u002F2.4.85\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.724dbad3.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.9l2p3ypNUoU.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.9l2p3ypNUoU.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en-US"}},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
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
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
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
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
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
    NuxtLoading
  }
}
