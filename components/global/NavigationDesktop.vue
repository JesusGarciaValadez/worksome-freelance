<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav class="flex-1 px-2 bg-white">
            <DashboardButton />
            <ProfileButton />
            <JobsButton />
            <FreelancesButton />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardButton from './buttons/DashboardButton.vue'
import ProfileButton from './buttons/ProfileButton.vue'
import JobsButton from './buttons/JobsButton.vue'
import FreelancesButton from './buttons/FreelancesButton.vue'

export default Vue.extend({
  components:{
    DashboardButton,
    FreelancesButton,
    JobsButton,
    ProfileButton,
  },
  name: "NavigationDesktop"
})
</script>
