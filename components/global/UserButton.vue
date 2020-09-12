<template>
  <button
    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none hover:border-white transition duration-150 ease-in-out"
    id="user-menu"
    aria-label="User menu"
    aria-haspopup="true"
  >
    <div class="flex-shrink-0 flex justify-center relative">
      <Photo className="h-10 w-10 rounded-full" />
      <ChevronIcon className="absolute h-6 w-6 block inset-x-auto bottom-0 z-10" />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Photo from './Photo.vue'
import ChevronIcon from './ChevronIcon.vue'

export default Vue.extend({
  components: {
    ChevronIcon,
    Photo
  },
  name: 'UserButton'
})
</script>
