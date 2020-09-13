<template>
  <Fragment>
    <!-- Off-canvas menu for mobile -->
    <NavigationMobile />

    <!-- Static sidebar for desktop -->
    <NavigationDesktop />
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fragment } from 'vue-fragment'
import NavigationMobile from './global/NavigationMobile.vue'
import NavigationDesktop from './global/NavigationDesktop.vue'

export default Vue.extend({
  components: {
    Fragment,
    NavigationDesktop,
    NavigationMobile
  },
  name: 'Navigation'
})
</script>
