import createPersistedState from 'vuex-persistedstate';

export default ({store, app }) => {
  window.onNuxtReady(() => {
    createPersistedState()(store);
    // if (!app.$auth.$state.user) {
    //   app.$auth.$storage.setState('loggedIn', true);
    // }
  })
}
