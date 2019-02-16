import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _20bda2ce = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _90e13c38 = () => interopDefault(import('../pages/dev/index.vue' /* webpackChunkName: "pages/dev/index" */))
const _4dfea716 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _51333676 = () => interopDefault(import('../pages/testPost.vue' /* webpackChunkName: "pages/testPost" */))
const _8f25cd02 = () => interopDefault(import('../pages/dev/c/_communityname.vue' /* webpackChunkName: "pages/dev/c/_communityname" */))
const _06e0a102 = () => interopDefault(import('../pages/dev/p/_projectname.vue' /* webpackChunkName: "pages/dev/p/_projectname" */))
const _979bcba6 = () => interopDefault(import('../pages/dev/u/_username.vue' /* webpackChunkName: "pages/dev/u/_username" */))
const _0f59095e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _20bda2ce,
      name: "about"
    }, {
      path: "/dev",
      component: _90e13c38,
      name: "dev"
    }, {
      path: "/login",
      component: _4dfea716,
      name: "login"
    }, {
      path: "/testPost",
      component: _51333676,
      name: "testPost"
    }, {
      path: "/dev/c/:communityname?",
      component: _8f25cd02,
      name: "dev-c-communityname"
    }, {
      path: "/dev/p/:projectname?",
      component: _06e0a102,
      name: "dev-p-projectname"
    }, {
      path: "/dev/u/:username?",
      component: _979bcba6,
      name: "dev-u-username"
    }, {
      path: "/",
      component: _0f59095e,
      name: "index"
    }],

    fallback: false
  })
}
