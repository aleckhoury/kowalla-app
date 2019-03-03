import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _16cfdf96 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _55d34c61 = () => interopDefault(import('../pages/dev/index.vue' /* webpackChunkName: "pages/dev/index" */))
const _759ea23c = () => interopDefault(import('../pages/dev/c/_communityname.vue' /* webpackChunkName: "pages/dev/c/_communityname" */))
const _2d403325 = () => interopDefault(import('../pages/dev/p/_projectname.vue' /* webpackChunkName: "pages/dev/p/_projectname" */))
const _ca6d1a2c = () => interopDefault(import('../pages/dev/u/_username.vue' /* webpackChunkName: "pages/dev/u/_username" */))
const _3687ba5b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _16cfdf96,
      name: "about"
    }, {
      path: "/dev",
      component: _55d34c61,
      name: "dev"
    }, {
      path: "/dev/c/:communityname?",
      component: _759ea23c,
      name: "dev-c-communityname"
    }, {
      path: "/dev/p/:projectname?",
      component: _2d403325,
      name: "dev-p-projectname"
    }, {
      path: "/dev/u/:username?",
      component: _ca6d1a2c,
      name: "dev-u-username"
    }, {
      path: "/",
      component: _3687ba5b,
      name: "index"
    }],

    fallback: false
  })
}
