export default function ({ store, route, redirect }) {
  store.commit('activeTabs/updateSettingsActiveTab', 0);
  store.commit('activeTabs/updateNewsFeedActiveTab', 0);
}