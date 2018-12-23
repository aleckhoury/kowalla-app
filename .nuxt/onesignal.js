window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "allowLocalhostAsSecureOrigin": true,
  "welcomeNotification": {
    "disable": true
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
