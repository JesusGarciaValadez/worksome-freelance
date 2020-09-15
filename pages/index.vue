<template>
  <Fragment>
    <h1 class="font-sans text-6xl leading-normal tracking-tight text-center">woksome-freelance</h1>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fragment } from 'vue-fragment'

export default Vue.extend({
  components: {
    Fragment
  },
  name: 'Index',
  loading: true,
  transition: 'test',
  scrollToTop: true,
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
