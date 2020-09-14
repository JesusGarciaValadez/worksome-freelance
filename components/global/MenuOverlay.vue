<template>
  <transition
    enter-active-class="transition-opacity ease-linear duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-300"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    css
  >
    <div class="fixed inset-0" v-show="this.$store.state.toggleMenu">
      <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "MenuOverlay"
})
</script>
