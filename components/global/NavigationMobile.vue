<template>
  <div class="md:hidden">
    <div class="fixed inset-0 flex z-40">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.
      -->
      <MenuOverlay />

      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.
      -->
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
        css
      >
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white" v-show="this.$store.state.toggleMenu">
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <CloseButtonMobile />
          </div>
          <aside class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <LogoBlue />
            </div>
            <nav class="mt-5 px-2 space-y-1">
              <DashboardButton />
              <ProfileButton />
              <JobsButton />
              <FreelancesButton />
            </nav>
          </aside>
        </div>
      </transition>
      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloseButtonMobile from './buttons/CloseButtonMobile.vue'
import DashboardButton from './buttons/DashboardButton.vue'
import FreelancesButton from './buttons/FreelancesButton.vue'
import JobsButton from './buttons/JobsButton.vue'
import LogoBlue from './logos/LogoBlue.vue'
import MenuOverlay from './MenuOverlay.vue'
import ProfileButton from './buttons/ProfileButton.vue'

export default Vue.extend({
  components: {
    CloseButtonMobile,
    DashboardButton,
    FreelancesButton,
    JobsButton,
    LogoBlue,
    MenuOverlay,
    ProfileButton,
  },
  name: "NavigationMobile",
})
</script>

<style scoped>

</style>
