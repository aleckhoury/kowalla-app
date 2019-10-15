export const state = () => ({
  SettingsActiveTab: 0,
  NewsFeedActiveTab: 0
});

export const mutations = {
  updateSettingsActiveTab(state, tab) {
    state.SettingsActiveTab = tab;
  },
  updateNewsFeedActiveTab(state, tab) {
    state.NewsFeedActiveTab = tab;
  }
};
