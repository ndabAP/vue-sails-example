export default {
  SET_USER (state, user) {
    state.user = user
  },

  SET_USER_NAME (state, name) {
    state.user.name = name
  },

  SET_USER_PASSWORD (state, password) {
    state.user.password = password
  },

  RESET_USER (state) {
    state.user.name = ''
    state.user.password = ''
  }
}
