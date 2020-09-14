<template>
  <button
    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none hover:border-white transition duration-150 ease-in-out"
    id="user-menu"
    aria-label="User menu"
    aria-haspopup="true"
    @click="toggleUserOptions"
  >
    <div class="flex-shrink-0 flex justify-center relative">
      <Photo className="h-10 w-10 rounded-full" />
      <ChevronUpIcon v-if="this.$store.state.toggleUserOptions" className="block absolute h-6 w-6 inset-x-auto bottom-0 z-10" />
      <ChevronDownIcon v-else className="block absolute h-6 w-6 inset-x-auto bottom-0 z-10" />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Photo from '../Photo.vue'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import ChevronUpIcon from '../icons/ChevronUpIcon.vue'

export default Vue.extend({
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
    Photo
  },
  methods: {
    ...mapMutations(['toggleUserOptions'])
  },
  name: 'UserButton'
})
</script>
