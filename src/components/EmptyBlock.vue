<template>
  <section class="empty-block">
    <h3 class="empty-title">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, temporibus.
    </h3>
    <div class="parallax-img-wrapper"><img class="empty-pi parallax-img" src="/images/photos/gallery/2.jpg" alt=""></div>
  </section>
</template>

<script>
import { isFullyVisible } from '../plugins/animating'

function emptyBlockAnimate () {
  const emptyTitle = document.querySelector('.empty-title')
  if (isFullyVisible(emptyTitle)) {
    setTimeout(() => emptyTitle.classList.add('empty-title__active'), 300)
  }
  if (document.querySelector('.empty-title__active')) {
    window.removeEventListener('scroll', emptyBlockAnimate, false)
  }
}
window.addEventListener('scroll', () => {
  if (document.location.pathname === '/') {
    emptyBlockAnimate()
  }
}, false)
export default {
  name: 'Empty'
}
</script>
