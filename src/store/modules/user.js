const state = {
  userInfo: 0,
}

const mutations = {
  SET_USERINFO: state => (state.userInfo = state),
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
