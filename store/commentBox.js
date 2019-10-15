export const state = () => ({
  topBox: true,
  levelOne: false,
  levelTwo: false
});

export const mutations = {
  updateProfileSortingOption(state, string) {
    state.profile = string;
  },

  updateProjectSortingOption(state, string) {
    state.project = string;
  },

  updateSpaceSortingOption(state, string) {
    state.space = string;
  },

  updateNewsfeedSortingOption(state, string) {
    state.newsfeed = string;
  }
};
