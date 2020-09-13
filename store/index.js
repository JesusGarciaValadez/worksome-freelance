export const state = () => ({
  toggleMenu: false,
  toggleUserOptions: false
})

const TOGGLE_MENU = 'toggleMenu'
const TOGGLE_USER_OPTIONS = 'toggleUserOptions'

export const mutations = {
  [TOGGLE_MENU] (state) {
    state.toggleMenu = !state.toggleMenu
  },
  [TOGGLE_USER_OPTIONS] (state) {
    state.toggleUserOptions = !state.toggleUserOptions
  }
}
