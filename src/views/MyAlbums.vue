<template>
  <section class="my-albums">
    <h2 class="title">Мои альбомы</h2>
    <p class="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, possimus.</p>
    <div class="container">
      <div class="album-wrapper" album-name="1" @click="album1">
        <div class="album">
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/1.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/2.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/3.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/4.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/5.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="preview-img-wrapper"><img class="preview-img" src="/images/photos/gallery/1.jpg" alt=""></div>
        </div>
        <p class="album-name">Album Name</p>
        <p class="album-data">October 14th, 2020</p>
      </div>
      <div class="album-wrapper" @click="album2">
        <div class="album">
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/1.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/2.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/3.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/4.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/5.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="preview-img-wrapper"><img class="preview-img" src="/images/photos/gallery/1.jpg" alt=""></div>
        </div>
        <p class="album-name">Album Name</p>
        <p class="album-data">October 14th, 2020</p>
      </div>
      <div class="album-wrapper" @click="album3">
        <div class="album">
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/1.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/2.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/3.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/4.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="album-img-wrapper">
            <img src="/images/photos/gallery/5.jpg" @mouseenter="hoverImg" alt="">
          </div>
          <div class="preview-img-wrapper"><img class="preview-img" src="/images/photos/gallery/1.jpg" alt=""></div>
        </div>
        <p class="album-name">Album Name</p>
        <p class="album-data">October 14th, 2020</p>
      </div>
    </div>
    <div class="dark" :class="{flex : modal}">
      <div class="modal my-albums-modal">
        <div class="modal-content">
          <p class="modal-album-name"></p>
          <p class="modal-album-data"></p>
          <button @click="showPhotos" class="view-btn">View Album</button>
        </div>
        <div class="modal-album-photos">

        </div>
        <button class="my-albums-close" @click="closeModal">
          <img src="/images/logos/close.svg" alt="close">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import albums from '@/json/albums.json'

export default {
  name: 'MyAlbums',
  data: function () {
    return {
      modal: false,
      albumActive: ''
    }
  },
  methods: {
    hoverImg (e) {
      e.target.offsetParent.lastElementChild.innerHTML = `<img class="preview-img" src="${e.target.getAttribute('src')}" alt="">`
    },
    showAlbom () {
      this.modal = !this.modal
      document.querySelector('.modal').style.background = `url(${albums[this.albumActive].background})`
      document.querySelector('.modal-album-name').innerHTML = albums[this.albumActive].name
      document.querySelector('.modal-album-data').innerHTML = albums[this.albumActive].data
    },
    album1 () {
      this.albumActive = 'album1'
      this.showAlbom()
    },
    album2 () {
      this.albumActive = 'album2'
      this.showAlbom()
    },
    album3 () {
      this.albumActive = 'album3'
      this.showAlbom()
    },
    showPhotos () {
      const photos = document.querySelector('.modal-album-photos')
      for (const item of albums[this.albumActive].photos) {
        photos.innerHTML += `<img src="${item}" alt="">`
      }
      photos.style.display = 'block'
    },
    closeModal () {
      this.modal = !this.modal
      document.querySelector('.modal-album-photos').style.display = 'none'
      document.querySelector('.modal-album-photos').innerHTML = ''
    }
  }
}
</script>
