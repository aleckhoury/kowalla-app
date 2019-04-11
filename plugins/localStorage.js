import createPersistedState from 'vuex-persistedstate';

export default ({store, app }) => {
  window.onNuxtReady(() => {
    createPersistedState()(store);
    // if (!store.state.user.username) {
    //   store.commit('user/setUser', { loggedIn: false });
    // }
  })
}
