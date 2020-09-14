<template>
  <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
    <BellIcon />
  </button>
</template>

<script>
import Vue from 'vue'
import BellIcon from '~/components/global/icons/BellIcon.vue'

export default Vue.extend({
  components: {
    BellIcon,
  },
  name: 'BellButton',
})
</script>
