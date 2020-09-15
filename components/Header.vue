<template>
  <header class="bg-indigo-500 relative z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <HamburguerButton />
        </div>
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div class="flex-shrink-0 flex items-center justify-center">
            <nuxt-link to="/">
              <LogoWhite />
            </nuxt-link>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <nuxt-link to="/pages/faq">
            <QuestionMarkCircleIcon />
          </nuxt-link>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <UserButton />
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.
            -->
            <UserOptions />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import LogoWhite from './global/logos/LogoWhite.vue'
import HamburguerButton from './global/buttons/HamburguerButton.vue'
import QuestionMarkCircleIcon from './global/icons/QuestionMarkCircleIcon.vue'
import UserButton from "./global/buttons/UserButton.vue"
import UserOptions from "~/components/global/UserOptions.vue"

export default Vue.extend({
  components: {
    HamburguerButton,
    LogoWhite,
    QuestionMarkCircleIcon,
    UserButton,
    UserOptions,
  },
  name: 'Header',
})
</script>
