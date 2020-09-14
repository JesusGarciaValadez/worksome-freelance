import { mount } from '@vue/test-utils'
import Logo from '~/components/global/logos/LogoWhite.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
