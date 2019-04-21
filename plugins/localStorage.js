import createPersistedState from "vuex-persistedstate";

export default ({ store, $axios }) => {
  window.onNuxtReady(async () => {
    createPersistedState()(store);
    if (store.state.user.loggedIn) {
      const user = await $axios.$get(
        `api/v1/users/${store.state.user.username}`
      );
      const subs = await $axios.$get(`/api/v1/profiles/${user._id}/subs`);

      await Object.assign(user, { loggedIn: Boolean(Object.keys(user).length) });
      await Object.assign(user, subs);

      await store.commit("user/setUser", user);
    }
  });
};
