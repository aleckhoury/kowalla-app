import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _16cfdf96 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _55d34c61 = () => interopDefault(import('../pages/dev/index.vue' /* webpackChunkName: "pages/dev/index" */))
const _4fb51a10 = () => interopDefault(import('../pages/dev/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/index/posts/_postId" */))
const _31eff532 = () => interopDefault(import('../pages/dev/focus.vue' /* webpackChunkName: "pages/dev/focus" */))
const _07a69623 = () => interopDefault(import('../pages/dev/signin.vue' /* webpackChunkName: "pages/dev/signin" */))
const _ad2d83c2 = () => interopDefault(import('../pages/dev/community/_communityname/index.vue' /* webpackChunkName: "pages/dev/community/_communityname/index" */))
const _7a6a274e = () => interopDefault(import('../pages/dev/community/_communityname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/community/_communityname/index/posts/_postId" */))
const _57098e5f = () => interopDefault(import('../pages/dev/project/_projectname/index.vue' /* webpackChunkName: "pages/dev/project/_projectname/index" */))
const _4fcdf0e4 = () => interopDefault(import('../pages/dev/project/_projectname/index/posts/_postId.vue' /* webpackChunkName: "pages/dev/project/_projectname/index/posts/_postId" */))
const _26a45ff5 = () => interopDefault(import('../pages/dev/user/_username/index.vue' /* webpackChunkName: "pages/dev/user/_username/index" */))
const _728d896d = () => interopDefault(import('../pages/dev/community/_communityname/Edit.vue' /* webpackChunkName: "pages/dev/community/_communityname/Edit" */))
const _38fb9da6 = () => interopDefault(import('../pages/dev/project/_projectname/Edit.vue' /* webpackChunkName: "pages/dev/project/_projectname/Edit" */))
const _f1c85652 = () => interopDefault(import('../pages/dev/user/_username/Edit.vue' /* webpackChunkName: "pages/dev/user/_username/Edit" */))
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
      path: "/dev/signin",
      component: _07a69623,
      name: "dev-signin"
    }, {
      path: "/dev/community/:communityname?",
      component: _ad2d83c2,
      name: "dev-community-communityname",
      children: [{
        path: "posts/:postId?",
        component: _7a6a274e,
        name: "dev-community-communityname-index-posts-postId"
      }]
    }, {
      path: "/dev/project/:projectname?",
      component: _57098e5f,
      name: "dev-project-projectname",
      children: [{
        path: "posts/:postId?",
        component: _4fcdf0e4,
        name: "dev-project-projectname-index-posts-postId"
      }]
    }, {
      path: "/dev/user/:username?",
      component: _26a45ff5,
      name: "dev-user-username"
    }, {
      path: "/dev/community/:communityname?/Edit",
      component: _728d896d,
      name: "dev-community-communityname-Edit"
    }, {
      path: "/dev/project/:projectname?/Edit",
      component: _38fb9da6,
      name: "dev-project-projectname-Edit"
    }, {
      path: "/dev/user/:username?/Edit",
      component: _f1c85652,
      name: "dev-user-username-Edit"
    }, {
      path: "/",
      component: _3687ba5b,
      name: "index"
    }],

    fallback: false
  })
}
