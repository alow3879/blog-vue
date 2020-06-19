<template>
  <section id="gallery" class="gallery">
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-0" data-index="0" src="/images/photos/gallery/1.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-1" data-index="1" src="/images/photos/gallery/2.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-2" data-index="2" src="/images/photos/gallery/3.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-3" data-index="3" src="/images/photos/gallery/4.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-4" data-index="4" src="/images/photos/gallery/5.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-5" data-index="5" src="/images/photos/gallery/6.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-6" data-index="6" src="/images/photos/gallery/7.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-7" data-index="7" src="/images/photos/gallery/8.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-8" data-index="8" src="/images/photos/gallery/9.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-9" data-index="9" src="/images/photos/gallery/10.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-10" data-index="10" src="/images/photos/gallery/11.jpg" alt="">
    </div>
    <div class="gallery-img-wrapper" @click="openModal">
      <img class="gallery-img di-11" data-index="11" src="/images/photos/gallery/12.jpg" alt="">
    </div>
    <div class="dark" :class="{flex : modal}">
      <div class="modal">
        <div class="modal-img"></div>
        <button class="close" @click="modal = !modal">
          <img src="/images/logos/close.svg" alt="close">
        </button>
        <button class="back">
          <img src="/images/logos/back.svg" alt="back">
        </button>
        <button class="next">
          <img src="/images/logos/next.svg" alt="next">
        </button>
      </div>
    </div>
  </section>

</template>

<script>
import { isPartiallyVisible } from '../plugins/animating'

function galleryAnimate () {
  const galleryImgAll = document.querySelectorAll('.gallery-img')
  const galleryImgActiveAll = document.querySelectorAll('.gi__active')
  galleryImgAll.forEach(function (item) {
    if (isPartiallyVisible(item)) {
      setTimeout(() => item.classList.add('gi__active'), item.getAttribute('data-index') * 100)
    }
  })
  if (galleryImgAll.length === galleryImgActiveAll.lenght) {
    window.removeEventListener('scroll', galleryAnimate, false)
  }
}

window.addEventListener('scroll', galleryAnimate, false)

export default {
  name: 'Gallery',
  data: function () {
    return {
      modal: false
    }
  },
  methods: {
    openModal (e) {
      this.modal = true
      const modalImg = document.querySelector('.modal-img')
      modalImg.innerHTML = `<img src="${e.target.children[0].getAttribute('src')}" alt="">`
      let imgIndex = +e.target.children[0].getAttribute('data-index')
      function nextImg () {
        if (imgIndex === 11) {
          imgIndex = 0
        } else {
          imgIndex++
        }
        modalImg.innerHTML = `<img src="${document.querySelector(`.di-${imgIndex}`).getAttribute('src')}" alt="">`
      }
      function previousImg () {
        if (imgIndex === 0) {
          imgIndex = 11
        } else {
          imgIndex--
        }
        modalImg.innerHTML = `<img src="${document.querySelector(`.di-${imgIndex}`).getAttribute('src')}" alt="">`
      }
      document.querySelector('.next').addEventListener('click', nextImg)
      document.querySelector('.back').addEventListener('click', previousImg)
    }
  }
}
</script>
