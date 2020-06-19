<template>
  <div id="app">
    <Menu />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '@/assets/main.scss';
</style>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu, Footer
  }
}
</script>
