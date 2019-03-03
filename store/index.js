//import createPersistedState from 'vuex-persistedstate';

//export const plugins = [ createPersistedState() ];

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
