<template>
  <nav class="bg-indigo-600">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">

        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <HamburguerButton />
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center justify-center">
            <nuxt-link to="/">
              <Logo />
            </nuxt-link>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <QuestionMarkCircleIcon />

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <UserButton />
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
            <UserOptions />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'
import HamburguerButton from './HamburguerButton.vue'
import QuestionMarkCircleIcon from './QuestionMarkCircleIcon.vue'
import UserButton from "./UserButton.vue"
import UserOptions from "~/components/global/UserOptions.vue"

export default Vue.extend({
  components: {
    HamburguerButton,
    Logo,
    QuestionMarkCircleIcon,
    UserButton,
    UserOptions,
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
  name: 'Header',
})
</script>
