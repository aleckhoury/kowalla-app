import Utils from '~/utils/helpers';

export default async function (context) {
  if (context.store.state.user.loggedIn && typeof context.store.state.user.activePost === 'object') {
    if (Object.keys(context.store.state.user.activePost).length) {
      if (!Utils.isActivePost(context.store.state.user.activePost)) {
        context.store.commit('user/isActivePost', {});
        context.$axios.$put(`/api/v1/posts/${context.store.state.user.activePost._id}`, {
          isActive: false,
        });
      }
    } else {
      const activePost = await context.$axios.$get(`/api/v1/posts/active/${context.store.state.user.id}`);
      if (Utils.isActivePost(activePost)) {
        context.store.commit('user/isActivePost', activePost);
      } else if (Object.keys(activePost).length) {
        context.store.commit('user/isActivePost', {});
        context.$axios.$put(`/api/v1/posts/${activePost._id}`, {
          isActive: false,
        });
      }
    }
  }
}