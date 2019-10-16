export const state = () => ({
  activeModal: 'posts',
});

export const mutations = {
  updateActiveModalToNotifs(state) {
    state.activeModal = 'notifs';
  },

  updateActiveModalToMenu(state) {
    state.activeModal = 'menu';
  },

  updateActiveModal(state, string) {
    state.activeModal = string;
  },
};
