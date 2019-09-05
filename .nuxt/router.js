import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _259407ba = () => interopDefault(import('../pages/beta/index.vue' /* webpackChunkName: "pages/beta/index" */))
const _135a85a9 = () => interopDefault(import('../pages/beta/index/posts/_postId.vue' /* webpackChunkName: "pages/beta/index/posts/_postId" */))
const _2ffd45ea = () => interopDefault(import('../pages/beta/signin.vue' /* webpackChunkName: "pages/beta/signin" */))
const _00a73ca9 = () => interopDefault(import('../pages/beta/focus/_username/index.vue' /* webpackChunkName: "pages/beta/focus/_username/index" */))
const _531994a6 = () => interopDefault(import('../pages/beta/project/_projectname/index.vue' /* webpackChunkName: "pages/beta/project/_projectname/index" */))
const _0910b1c6 = () => interopDefault(import('../pages/beta/space/_spacename/index.vue' /* webpackChunkName: "pages/beta/space/_spacename/index" */))
const _50a73108 = () => interopDefault(import('../pages/beta/user/_username/index.vue' /* webpackChunkName: "pages/beta/user/_username/index" */))
const _6fc4c606 = () => interopDefault(import('../pages/beta/project/_projectname/Edit.vue' /* webpackChunkName: "pages/beta/project/_projectname/Edit" */))
const _7de584e6 = () => interopDefault(import('../pages/beta/space/_spacename/Edit.vue' /* webpackChunkName: "pages/beta/space/_spacename/Edit" */))
const _4ac14070 = () => interopDefault(import('../pages/beta/user/_username/Edit.vue' /* webpackChunkName: "pages/beta/user/_username/Edit" */))
const _c5a472dc = () => interopDefault(import('../pages/beta/project/_projectname/posts/_postId.vue' /* webpackChunkName: "pages/beta/project/_projectname/posts/_postId" */))
const _9574789c = () => interopDefault(import('../pages/beta/space/_spacename/posts/_postId.vue' /* webpackChunkName: "pages/beta/space/_spacename/posts/_postId" */))
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
      path: "/beta",
      component: _259407ba,
      name: "beta",
      children: [{
        path: "posts/:postId?",
        component: _135a85a9,
        name: "beta-index-posts-postId"
      }]
    }, {
      path: "/beta/signin",
      component: _2ffd45ea,
      name: "beta-signin"
    }, {
      path: "/beta/focus/:username?",
      component: _00a73ca9,
      name: "beta-focus-username"
    }, {
      path: "/beta/project/:projectname?",
      component: _531994a6,
      name: "beta-project-projectname"
    }, {
      path: "/beta/space/:spacename?",
      component: _0910b1c6,
      name: "beta-space-spacename"
    }, {
      path: "/beta/user/:username?",
      component: _50a73108,
      name: "beta-user-username"
    }, {
      path: "/beta/project/:projectname?/Edit",
      component: _6fc4c606,
      name: "beta-project-projectname-Edit"
    }, {
      path: "/beta/space/:spacename?/Edit",
      component: _7de584e6,
      name: "beta-space-spacename-Edit"
    }, {
      path: "/beta/user/:username?/Edit",
      component: _4ac14070,
      name: "beta-user-username-Edit"
    }, {
      path: "/beta/project/:projectname?/posts/:postId?",
      component: _c5a472dc,
      name: "beta-project-projectname-posts-postId"
    }, {
      path: "/beta/space/:spacename?/posts/:postId?",
      component: _9574789c,
      name: "beta-space-spacename-posts-postId"
    }, {
      path: "/",
      component: _3687ba5b,
      name: "index"
    }],

    fallback: false
  })
}
