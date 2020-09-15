<template>
  <Fragment>
    <h1 class="font-sans text-6xl leading-normal tracking-tight text-center">Profile ID: {{ this.$route.params.id }}</h1>
  </Fragment>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment,
  },
  name: 'Id'
}
</script>
