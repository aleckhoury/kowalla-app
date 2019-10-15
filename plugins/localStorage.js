import createPersistedState from 'vuex-persistedstate';
import Utils from '~/utils/helpers';

export default ({ store, $axios }) => {
  window.onNuxtReady(async () => {
    createPersistedState()(store);
    store.commit('firstVisit/setFirstVisit');
    if (store.state.user.loggedIn) {
      const user = await $axios.$get(`api/v1/users/${store.state.user.username}`);
      const subs = await $axios.$get(`/api/v1/profiles/${user._id}/subs`);
      const { owned, subscriptions } = subs.subscriptions;
      await Object.assign(user, { loggedIn: Boolean(Object.keys(user).length) });
      await Object.assign(user, { subscriptions, owned });

      await store.commit('user/setUser', user);
    }
  });
};
