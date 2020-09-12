<template>
  <button
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
    aria-label="Main menu"
    aria-expanded="false"
  >
    <!-- Icon when menu is closed. -->
    <!-- Menu open: "hidden", Menu closed: "block" -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      css
    >
      <HamburguerIcon :class-name="[$store.state.isOn ? 'hidden' : 'block' ]" class="h-6 w-6" />
    </transition>
    <!-- Icon when menu is open. -->
    <!-- Menu open: "block", Menu closed: "hidden" -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      css
    >
      <CloseIcon :class-name="[$store.state.isOn ? 'block' : 'hidden']" class="h-6 w-6" />
    </transition>
  </button>
</template>

<script>
import Vue from 'vue'
import HamburguerIcon from "~/components/global/HamburguerIcon.vue"
import CloseIcon from '~/components/global/CloseIcon.vue'

export default Vue.extend({
  components: {
    HamburguerIcon,
    CloseIcon
  },
  name: 'HamburguerButton'
})
</script>
