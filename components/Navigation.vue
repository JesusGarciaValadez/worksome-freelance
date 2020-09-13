<template>
  <Fragment>
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <div class="fixed inset-0 flex z-40">
        <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
        -->
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          css
        >
          <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
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
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <aside class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex items-center flex-shrink-0 px-4">
                <img class="h-8 w-auto" src="/workflow-logo-blue.webp" alt="Worksome">
              </div>
              <nav class="mt-5 px-2 space-y-1">
                <div>
                  <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                    <DashboardIconMobile />
                    Dashboard
                  </a>
                </div>
                <div>
                  <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                    <TeamIconMobile />
                    Profile
                  </a>
                </div>
                <div>
                  <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                    <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Jobs
                    <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                    <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20">
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                  </button>
                  <!-- Expandable link section, show/hide based on state. -->
                  <div class="mt-1 space-y-1">
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Overview
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Members
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Calendar
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Settings
                    </a>
                  </div>
                </div>
                <div>
                  <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                    <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Other freelancers
                    <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                    <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20">
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                  </button>
                  <!-- Expandable link section, show/hide based on state. -->
                  <div class="mt-1 space-y-1">
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Overview
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Members
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Calendar
                    </a>
                    <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                      Settings
                    </a>
                  </div>
                </div>
                <div>
                  <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                    <SearchIconMobile />
                    Search
                  </a>
                </div>
              </nav>
            </aside>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->

        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 bg-white">
            <div>
              <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </a>
            </div>
            <div>
              <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Profile
              </button>
            </div>
            <div>
              <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                Jobs
                <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                </svg>
              </button>
              <!-- Expandable link section, show/hide based on state. -->
              <div class="mt-1 space-y-1 pl-12">
                <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                  Search
                </a>
                <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                  Saved
                </a>
              </div>
            </div>
            <div>
              <button class="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Other freelances
                <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                <svg class="ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                </svg>
              </button>
              <!-- Expandable link section, show/hide based on state. -->
              <div class="mt-1 space-y-1 pl-12">
                <a href="#" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                  Search
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fragment } from 'vue-fragment'
import DashboardIconMobile from '~/components/global/DashboardIconMobile.vue'
import SearchIconMobile from '~/components/global/SearchIconMobile.vue'

export default Vue.extend({
  components: {
    DashboardIconMobile,
    Fragment,
    SearchIconMobile
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
  name: 'Navigation'
})
</script>
