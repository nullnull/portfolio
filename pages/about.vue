<template lang="pug">
.page-root
  #about
    Background
    section.container
      Description
    nuxt-link(to="/")
      WaitingScroll.fade-in-fade-out-on-page
</template>

<script>
import Background from '~/components/pages/about/Background.vue'
import Description from '~/components/pages/about/Description.vue'
import WaitingScroll from '~/components/common/WaitingScroll'
import TweenMax from 'gsap'

export default {
  components: {
    Background,
    Description,
    WaitingScroll
  },
  transition: {
    appear: true,
    async enter (el, done) {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.fade-in-fade-out-on-page', 1.0, {
          ease: 'ease',
          delay: 3.0,
          startAt: { opacity: 0, y: 5, },
          opacity: 0.9, y: 0,
          onComplete() { done() }
        }, 0.1)
      });
    },
  }
}
</script>

<style lang="stylus" scoped>
#about
  position relative
  overflow hidden
  z-index 1

  .container
    align-items center
    display flex
    justify-content center
    min-height 100vh
    text-align center

.fade-in-fade-out-on-page
  opacity 0
</style>
