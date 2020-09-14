export const state = () => ({
  toggleMenu: false,
  toggleUserOptions: false
})

export const TOGGLE_MENU_ACTION = 'toggleMenu'
export const TOGGLE_USER_OPTIONS_ACTION = 'toggleUserOptions'

export const mutations = {
  [TOGGLE_MENU_ACTION] (state) {
    state.toggleMenu = !state.toggleMenu
  },
  [TOGGLE_USER_OPTIONS_ACTION] (state) {
    state.toggleUserOptions = !state.toggleUserOptions
  }
}
