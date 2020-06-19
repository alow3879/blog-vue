<template>
  <footer>
    <button class="up-arrow up" @click="smoothScroll"></button>
    <button class="up-btn up" @click="smoothScroll">Наверх</button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    smoothScroll () {
      document.querySelector('.nav').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
