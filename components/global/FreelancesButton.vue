<template>
  <div>
    <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
            @click="handleClick"
    >
      <UserGroupIconDesktop />
      Other freelances
      <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
      <ExpandedCollapsedIconDesktop :className="[this.$data.menuOpen ? 'text-gray-400 rotate-90' : 'text-gray-300']" />
    </button>
    <!-- Expandable link section, show/hide based on state. -->
    <div :class="[this.$data.menuOpen ? '' : 'hidden']"
         class="mt-1 space-y-1 pl-12"
    >
      <nuxt-link to="/profiles"
                 class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
      >Search</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExpandedCollapsedIconDesktop from './ExpandedCollapsedIconDesktop.vue'
import UserGroupIconDesktop from './UserGroupIconDesktop.vue'

export default Vue.extend({
  components: {
    ExpandedCollapsedIconDesktop,
    UserGroupIconDesktop
  },
  data: () => ({
    menuOpen: false
  }),
  methods: {
    handleClick () {
      this.$data.menuOpen = !this.$data.menuOpen
    },
  },
  name: "FreelancesButton"
})
</script>

<style scoped>

</style>
