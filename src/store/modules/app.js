const state = {
  count: 0,
}

const mutations = {
  increment: state => state.count++,
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
