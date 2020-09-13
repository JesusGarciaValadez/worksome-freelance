<template>
  <div id="app">
    <Header />
    <Navigation />

    <main>
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="min-h-96">
            <Nuxt />

            <Footer />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/global/Header.vue'
import Navigation from '@/components/global/Navigation.vue'
import Footer from '@/components/global/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Navigation,
    Footer
  }
})
</script>
