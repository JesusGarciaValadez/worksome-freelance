<template>
  <img
    :class="className"
    :src="this.$store.state.user.photo"
    :alt="this.$store.state.user.name"
    role="img"
    aria-label="Profile Photo"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Photo',
  props: ['className']
})
</script>
