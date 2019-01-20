export const state = () => ({
  authUser: null,
});
export const mutations = {
  async setUser(state, user) {
    console.log(state);
    state.authUser = user;
  },
};
