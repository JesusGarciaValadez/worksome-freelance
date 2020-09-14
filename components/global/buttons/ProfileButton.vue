<template>
  <div>
    <nuxt-link to="/profile/83718" class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
      <UserIconDesktop />
      Profile
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue'
import UserIconDesktop from '../icons/UserIconDesktop.vue'

export default Vue.extend({
  components: {
    UserIconDesktop
  },
  name: "ProfileButton"
})
</script>

