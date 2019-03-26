import Utils from '~/utils/helpers';

export default async function (context) {
  const activePost = await context.$axios.get(`/api/v1/posts/active/${context.store.state.user._id}`);
  if (Utils.isActivePost(activePost.data)) {
    context.store.commit('user/isActivePost', activePost.data);
  } else {
    context.store.commit('user/isActivePost', {});
    context.$axios.put(`/api/v1/posts/${activePost.data._id}`, {
      isActive: false,
    });
  }
}