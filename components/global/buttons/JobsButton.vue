<template>
  <div>
    <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            @click="handleClick"
    >
      <BriefcaseIconDesktop />
      Jobs
      <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
      <ExpandedCollapsedIconDesktop :className="[this.$data.menuOpen ? 'text-gray-400 rotate-90' : 'text-gray-300']" />
    </button>
    <!-- Expandable link section, show/hide based on state. -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
      css
    >
      <div class="mt-1 space-y-1 pl-12"
           v-show="this.$data.menuOpen"
      >
        <nuxt-link to="/jobs"
                   class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
        >Search</nuxt-link>
        <nuxt-link to="/jobs/liked"
                   class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
        >Saved</nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BriefcaseIconDesktop from '../icons/BriefcaseIconDesktop.vue'
import ExpandedCollapsedIconDesktop from '../icons/ExpandedCollapsedIconDesktop.vue'

export default Vue.extend({
  components: {
    BriefcaseIconDesktop,
    ExpandedCollapsedIconDesktop
  },
  data: () => ({
    menuOpen: false
  }),
  methods: {
    handleClick () {
      this.$data.menuOpen = !this.$data.menuOpen
    },
  },
  name: "JobsButton"
})
</script>

<style scoped>

</style>
