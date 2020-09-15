export const strict = false

export const state = () => ({
  toggleMenu: false,
  toggleUserOptions: false,
  user: {}
})

export const TOGGLE_MENU_ACTION = 'toggleMenu'
export const TOGGLE_USER_OPTIONS_ACTION = 'toggleUserOptions'
export const UPDATE_USER_INFORMATION_ACTION = 'updateUserInformation'

export const mutations = {
  [TOGGLE_MENU_ACTION] (state) {
    state.toggleMenu = !state.toggleMenu
  },
  [TOGGLE_USER_OPTIONS_ACTION] (state) {
    state.toggleUserOptions = !state.toggleUserOptions
  },
  [UPDATE_USER_INFORMATION_ACTION] (state, payload) {
    state.user = payload
  },
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    await fetch('http://178.62.46.115/api/user/1').then(async (res) =>
      commit(UPDATE_USER_INFORMATION_ACTION, await res.json())
    )
  }
}
