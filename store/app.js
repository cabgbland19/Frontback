export const state = () => ({
  cuenta: null,
  periodo: null,
  notas_gtc: null,
  isDialog: false,
});

export const mutations = {
  updateValue(state, payload) {
    state[payload.key] = payload.value;
  },
  resetState(state) {
    for (let key in state) {
      state[key] = null;
    }
  },
};

export const actions = {
  actUpdateValue({ commit }, payload) {
    commit("updateValue", payload);
  },
  actResetState({ commit }) {
    commit("resetState");
  },
};
