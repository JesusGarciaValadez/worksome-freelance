<template>
  <div id="app">
    <Header />

    <div class="h-screen flex overflow-hidden bg-gray-100 relative z-0">
      <Navigation />

      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="pt-2 pb-6 md:py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div class="h-96">
                  <Nuxt />

                  <Footer />
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Navigation,
    Footer
  }
})
</script>
