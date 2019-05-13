export const state = () => ({
  ProfileSettingsActiveTab: 0,
  ProjectSettingsActiveTab: 0,
  CommunitySettingsActiveTab: 0,
  NewsFeedActiveTab: 0,
});

export const mutations = {
  updateProfileSettingsActiveTab(state, tab) {
    state.ProfileSettingsActiveTab = tab;
  },

  updateProjectSettingsActiveTab(state, tab) {
    state.ProjectSettingsActiveTab = tab;
  },

  updateCommunitySettingsActiveTab(state, tab) {
    state.CommunitySettingsActiveTab = tab;
  },

  updateNewsFeedActiveTab(state, tab) {
    state.NewsFeedActiveTab = tab;
  },
};
