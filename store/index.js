export const state = () => ({
  isOn: false,
})

const TOGGLE_MENU = 'toggleMenu'

export const mutations = {
  [TOGGLE_MENU] (state) {
    state.isOn = !state.isOns
  }
}
