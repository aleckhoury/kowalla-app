import createPersistedState from "vuex-persistedstate";
import Utils from '~/utils/helpers';

export default ({ store, $axios }) => {
  window.onNuxtReady(async () => {
    createPersistedState()(store);
    if (store.state.user.loggedIn) {
      const user = await $axios.$get(
        `api/v1/users/${store.state.user.username}`
      );
      const subs = await $axios.$get(`/api/v1/profiles/${user._id}/subs`);
      const activePost = await $axios.$get(`/api/v1/posts/active/${store.state.user._id}`);
      if (Utils.isActivePost(activePost)) {
        store.commit('user/isActivePost', activePost);
      } else if (Object.keys(activePost).length) {
        store.commit('user/isActivePost', {});
        $axios.$put(`/api/v1/posts/${activePost._id}`, {
          isActive: false,
        });
      }
      await Object.assign(user, { loggedIn: Boolean(Object.keys(user).length) });
      await Object.assign(user, subs);

      await store.commit("user/setUser", user);
    }
  });
};
