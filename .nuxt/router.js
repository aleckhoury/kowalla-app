import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _16cfdf96 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _55d34c61 = () => interopDefault(import('../pages/dev/index.vue' /* webpackChunkName: "pages/dev/index" */))
const _4fb51a10 = () => interopDefault(import('../pages/dev/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/index/posts/_postId" */))
const _31eff532 = () => interopDefault(import('../pages/dev/focus.vue' /* webpackChunkName: "pages/dev/focus" */))
const _74c79b89 = () => interopDefault(import('../pages/dev/Trello.vue' /* webpackChunkName: "pages/dev/Trello" */))
const _648303e5 = () => interopDefault(import('../pages/dev/c/_communityname/index.vue' /* webpackChunkName: "pages/dev/c/_communityname/index" */))
const _a3894ad8 = () => interopDefault(import('../pages/dev/c/_communityname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/c/_communityname/index/posts/_postId" */))
const _57bdec30 = () => interopDefault(import('../pages/dev/p/_projectname/index.vue' /* webpackChunkName: "pages/dev/p/_projectname/index" */))
const _b92dc152 = () => interopDefault(import('../pages/dev/p/_projectname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/p/_projectname/index/posts/_postId" */))
const _ca6d1a2c = () => interopDefault(import('../pages/dev/u/_username.vue' /* webpackChunkName: "pages/dev/u/_username" */))
const _3687ba5b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
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
    base: decodeURI('/'),
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
      name: "dev",
      children: [{
        path: "posts/:postId?",
        component: _4fb51a10,
        name: "dev-index-posts-postId"
      }]
    }, {
      path: "/dev/focus",
      component: _31eff532,
      name: "dev-focus"
    }, {
      path: "/dev/Trello",
      component: _74c79b89,
      name: "dev-Trello"
    }, {
      path: "/dev/c/:communityname?",
      component: _648303e5,
      name: "dev-c-communityname",
      children: [{
        path: "posts/:postId?",
        component: _a3894ad8,
        name: "dev-c-communityname-index-posts-postId"
      }]
    }, {
      path: "/dev/p/:projectname?",
      component: _57bdec30,
      name: "dev-p-projectname",
      children: [{
        path: "posts/:postId?",
        component: _b92dc152,
        name: "dev-p-projectname-index-posts-postId"
      }]
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
