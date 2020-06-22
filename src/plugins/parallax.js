export default async function () {
  window.addEventListener('scroll', () => {
    const headerParallaxImg = document.querySelector('.header-pi')
    const emptyParallaxImg = document.querySelector('.empty-pi')
    if (headerParallaxImg) {
      headerParallaxImg.style.transform = `translateY(${pageYOffset / 10}vh)`
    }
    if (window.innerHeight < window.innerWidth) {
      emptyParallaxImg.style.transform = `translateY(${(pageYOffset - emptyParallaxImg.offsetHeight) / 10 - 135}vh)`
    } else if (window.innerHeight / window.innerWidth > 2) {
      emptyParallaxImg.style.transform = `translateY(${(pageYOffset - emptyParallaxImg.offsetHeight) / 10 - 180}vh)`
    } else if (emptyParallaxImg) {
      emptyParallaxImg.style.transform = `translateY(${(pageYOffset - emptyParallaxImg.offsetHeight) / 10 - 150}vh)`
    }
  })
}
