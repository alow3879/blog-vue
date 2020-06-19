<template>
  <nav class="nav">
    <ul>
      <li class="nav-item">
        <router-link to="/" class="nav-link" :class="{'nav-link__active' : active}" @click.native="active = true">ГЛАВНАЯ</router-link>
        </li>
      <li class="nav-item">
        <router-link to="/" data-hash="#about-me" class="nav-link" @click.native="smoothScroll">О СЕБЕ</router-link>
        </li>
      <li class="nav-item">
        <router-link to="/" data-hash="#gallery" class="nav-link" @click.native="smoothScroll">ПОРТФОЛИО</router-link>
        </li>
      <li class="nav-item">
        <router-link to="/" data-hash="#contact-me" class="nav-link" @click.native="smoothScroll">СВЯЗАТЬСЯ</router-link>
        </li>
      <li class="nav-item">
        <router-link to="/albums" class="nav-link" :class="{'nav-link__active' : !active}" id="albums" @click.native="active = false">МОИ АЛЬБОМЫ</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      active: true
    }
  },
  methods: {
    smoothScroll (event) {
      this.active = true
      document.querySelector(event.target.getAttribute('data-hash')).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
