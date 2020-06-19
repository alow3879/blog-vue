<template>
  <div class="home">
    <Header />
    <AboutMe />
    <Gallery />
    <EmptyBlock />
    <ContactMe />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Gallery from '@/components/Gallery.vue'
import EmptyBlock from '@/components/EmptyBlock.vue'
import ContactMe from '@/components/ContactMe.vue'
import parallax from '../plugins/parallax'

window.addEventListener('load', parallax())

export default {
  name: 'Home',
  components: {
    Header, AboutMe, Gallery, EmptyBlock, ContactMe
  }
}
</script>
