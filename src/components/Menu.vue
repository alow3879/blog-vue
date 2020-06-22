<template>
  <nav class="nav">
    <ul class="nav-items" :class="{'ul__active' : menu}">
      <li class="nav-item">
        <router-link to="/" class="nav-link" :class="{'nav-link__active' : active}" @click.native="active = true, menu = false">ГЛАВНАЯ</router-link>
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
        <router-link to="/albums" class="nav-link" :class="{'nav-link__active' : !active}" id="albums" @click.native="active = false,  menu = false">МОИ АЛЬБОМЫ</router-link>
      </li>
    </ul>
    <button class="menu" :class="{'menu__active' : menu}" @click="activeMenu">
      <div class="menu-line"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      active: true,
      menu: false
    }
  },
  methods: {
    smoothScroll (event) {
      this.active = true
      if (this.menu !== false) {
        this.menu = false
      }
      document.querySelector(event.target.getAttribute('data-hash')).scrollIntoView({ behavior: 'smooth' })
    },
    activeMenu () {
      this.menu = !this.menu
      document.querySelector('.nav-items').classList.toggle('ul__active')
    }
  }
}
</script>
