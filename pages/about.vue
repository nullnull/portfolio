<template lang="pug">
.page-root
  #about
    Background
    section.container
      Description
    nuxt-link(to="/")
      WaitingScroll.fade-in-fade-out-page
</template>

<script>
import Background from '~/components/pages/about/Background.vue'
import Description from '~/components/pages/about/Description.vue'
import WaitingScroll from '~/components/common/WaitingScroll'
import {TweenMax, Elastic, Back} from 'gsap'

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
        TweenMax.staggerTo('.fade-in-fade-out-page', 1.0, {
          y: 0,
          opacity: 0.9,
          ease: 'ease',
          startAt: {
            y: 5,
            opacity: 0
          },
          delay: 3.0,
          onComplete() { done() }
        }, 0.1)
      });
    },
    leave (el, done) {
    //   requestAnimationFrame(() => {
    //     TweenMax.staggerTo('.container', 0.7, {
    //       y: '-40px',
    //       opacity: 0,
    //       ease: Back.easeIn.config(3)
    //     }, 0.1, () => {
    //       done()
    //     })
    //     TweenMax.staggerTo('.container', 0.7, {
    //       scaleX: 0,
    //       x: '20px',
    //       opacity: 0,
    //       transformOrigin: 'right center',
    //       ease: Back.easeIn.config(3)
    //     }, 0.1)
    //   })
      done();
    }
  }
}
</script>

<style lang="stylus" scoped>
#about
  position relative
  .container
    align-items center
    display flex
    justify-content center
    min-height 100vh
    text-align center

.fade-in-fade-out-page
  opacity 0
</style>
