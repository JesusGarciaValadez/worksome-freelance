<template>
  <button class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
          aria-label="Close sidebar"
          @click="toggleMenu"
  >
    <CloseIconMobile />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import CloseIconMobile from '../icons/CloseIconMobile.vue'

export default Vue.extend({
  components: {
    CloseIconMobile
  },
  methods: {
    ...mapMutations(['toggleMenu'])
  },
  name: "CloseButtonMobile"
})
</script>
