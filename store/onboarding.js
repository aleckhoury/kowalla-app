export const state = () => ({
  ActiveStep: 0,
});

export const mutations = {
  incrementActiveStep(state) {
    state.ActiveStep += 1;
  },
  resetActiveStep(state) {
    state.ActiveStep  = 0;
  },
};
