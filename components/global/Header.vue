<template>
  <nav class="bg-indigo-600">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <HamburguerButton @click="$store.commit('toggleMenu')" />
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center justify-center">
            <Logo />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <QuestionMarkCircleIcon />

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <UserButton @click="$store.commit('toggleMenu')" />
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <transition
              enter-active-class="transition ease-out duration-100 transform"
              enter-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75 transform"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
              css
            >
              <div
                :class="[$store.state.isOn ? 'block' : 'hidden']"
                class="sm:hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              >
                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div
      :class="[$store.state.isOn ? 'block' : 'hidden']"
      class="sm:hidden"
    >
      <div class="px-2 pt-2 pb-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Logo from './Logo.vue'
import HamburguerButton from './HamburguerButton.vue'
import QuestionMarkCircleIcon from './QuestionMarkCircleIcon.vue'
import UserButton from "./UserButton.vue"

export default Vue.extend({
  components: {
    HamburguerButton,
    QuestionMarkCircleIcon,
    Logo,
    UserButton
  },
  computed: {
    isHome: function () {
      return this.$route.name === 'index'
    },
    isExperience: function () {
      return this.$route.name === 'experience'
    },
    isPortfolio: function () {
      return this.$route.name === 'portfolio'
    },
    isTechnologies: function () {
      return this.$route.name === 'technologies'
    },
    isCommunity: function () {
      return this.$route.name === 'community'
    },
  },
  filters: {
    capitalize: function (value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    ...mapMutations(['toggleMenu'])
  },
  name: 'Header'
})
</script>
