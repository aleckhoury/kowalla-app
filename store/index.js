export const getters = {
  isAuthenticated(state) {
    return state.user.loggedIn;
  },

  loggedInUser(state) {
    return state.user.user;
  },
};
