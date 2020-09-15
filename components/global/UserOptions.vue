<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
    css
  >
    <div v-show="this.$store.state.toggleUserOptions"
         class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg rounded-md bg-white p-3"
    >
      <p class="text-sm text-gray-800">{{ this.$store.state.user.name }}</p>
      <div class="p-1 border-b-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        <nuxt-link to="/profile/view"
                   class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem"
        >View your Profile</nuxt-link>
        <nuxt-link to="/profile/edit"
                   class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem"
        >Freelancer Settings</nuxt-link>
      </div>
      <p class="mt-2 text-sm text-gray-800">User</p>
      <div class="p-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        <nuxt-link to="/profile/edit-user"
                   class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem"
        >User Account</nuxt-link>
        <nuxt-link to="/logout"
                   class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem"
        >Logout</nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "UserOptions"
})
</script>
