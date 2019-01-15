export const state = () => ({
  newsfeed: 'Newest',
  profile: 'Newest',
  project: 'Newest',
  community: 'Newest'
});

export const mutations = {
  updateProfileSortingOption(state, string) {
    state.profile = string;
  },

  updateProjectSortingOption(state, string) {
    state.project = string;
  },

  updateCommunitySortingOption(state, string) {
    state.community = string;
  },

  updateNewsfeedSortingOption(state, string) {
    state.newsfeed = string;
  }
};
