<template>
  <div>
    <nuxt-link to="#"
               class="group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
    >
      <DashboardIconDesktop />
      Dashboard
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue'
import DashboardIconDesktop from './DashboardIconDesktop.vue'

export default Vue.extend({
  components: {
    DashboardIconDesktop,
  },
  name: "DashboardButton"
})
</script>

<style scoped>

</style>
