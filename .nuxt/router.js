import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _20bda2ce = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _90e13c38 = () => interopDefault(import('../pages/dev/index.vue' /* webpackChunkName: "pages/dev/index" */))
const _1920635a = () => interopDefault(import('../pages/dev/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/index/posts/_postId" */))
const _48c41aea = () => interopDefault(import('../pages/dev/focus.vue' /* webpackChunkName: "pages/dev/focus" */))
const _4a8e3666 = () => interopDefault(import('../pages/dev/Trello.vue' /* webpackChunkName: "pages/dev/Trello" */))
const _7f0b767c = () => interopDefault(import('../pages/dev/c/_communityname/index.vue' /* webpackChunkName: "pages/dev/c/_communityname/index" */))
const _8a25569e = () => interopDefault(import('../pages/dev/c/_communityname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/c/_communityname/index/posts/_postId" */))
const _b08643f6 = () => interopDefault(import('../pages/dev/p/_projectname/index.vue' /* webpackChunkName: "pages/dev/p/_projectname/index" */))
const _6d9cfcb4 = () => interopDefault(import('../pages/dev/p/_projectname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/p/_projectname/index/posts/_postId" */))
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
      name: "dev",
      children: [{
        path: "posts/:postId?",
        component: _1920635a,
        name: "dev-index-posts-postId"
      }]
    }, {
      path: "/dev/focus",
      component: _48c41aea,
      name: "dev-focus"
    }, {
      path: "/dev/Trello",
      component: _4a8e3666,
      name: "dev-Trello"
    }, {
      path: "/dev/c/:communityname?",
      component: _7f0b767c,
      name: "dev-c-communityname",
      children: [{
        path: "posts/:postId?",
        component: _8a25569e,
        name: "dev-c-communityname-index-posts-postId"
      }]
    }, {
      path: "/dev/p/:projectname?",
      component: _b08643f6,
      name: "dev-p-projectname",
      children: [{
        path: "posts/:postId?",
        component: _6d9cfcb4,
        name: "dev-p-projectname-index-posts-postId"
      }]
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
