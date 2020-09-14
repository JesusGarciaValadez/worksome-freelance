<template>
  <button
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white transition duration-150 ease-in-out"
    aria-label="Main menu"
    aria-expanded="false"
    @click="toggleMenu"
  >
    <!-- Icon when menu is closed. -->
    <!-- Menu open: "hidden", Menu closed: "block" -->
    <HamburguerIcon v-show="!this.$store.state.toggleMenu" />
    <!-- Icon when menu is open. -->
    <!-- Menu open: "block", Menu closed: "hidden" -->
    <CloseIcon v-show="this.$store.state.toggleMenu" />
  </button>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import HamburguerIcon from "~/components/global/icons/HamburguerIcon.vue"
import CloseIcon from '~/components/global/icons/CloseIcon.vue'

export default Vue.extend({
  components: {
    HamburguerIcon,
    CloseIcon
  },
  methods: {
    ...mapMutations(['toggleMenu'])
  },
  name: 'HamburguerButton'
})
</script>
