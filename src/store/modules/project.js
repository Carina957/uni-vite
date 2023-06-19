const state = {
  project: [],
}

const mutations = {
  SET_PROJECT: (state, payload) => (state.project = payload),
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
