export const state = () => ({
  feed: 'Newest',
});

export const mutations = {
  updateFeedSort(state, string) {
    state.feed = string;
  },
};
