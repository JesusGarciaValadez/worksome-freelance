<template>
  <svg
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ChevronUpIcon',
  props: ['className']
})
</script>
