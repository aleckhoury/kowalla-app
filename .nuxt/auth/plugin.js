import Auth from './auth'

import './middleware'

// Active chemes
import scheme_003d9a64 from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":false,"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/","secure":true,"expires":7}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Inject it to nuxt context as $auth
  inject('auth', $auth)

  // Register strategies

  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/api/v1/users/login","method":"post","propertyName":"token"},"logout":false,"user":false,"register":{"url":"/api/v1/users","method":"post","propertyName":false}},"tokenRequired":true,"tokenType":"Bearer","_name":"local"}))

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.browser) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
