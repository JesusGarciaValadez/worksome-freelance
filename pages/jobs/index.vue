<template>
  <Fragment>
    <h1 class="font-sans text-6xl leading-normal tracking-tight text-center">Jobs</h1>
  </Fragment>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment'
export default {
  components: {
    Fragment,
  },
  name: 'Jobs',
  loading: true,
  transition: 'test',
  scrollToTop: true,
}
</script>
