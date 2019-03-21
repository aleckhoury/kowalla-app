export default async function (context) {
  const activePost = await context.$axios.get(`/api/v1/posts/active/${context.store.state.user._id}`);
  context.store.commit('user/isActivePost', activePost.data);
}