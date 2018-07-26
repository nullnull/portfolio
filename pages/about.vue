<template lang="pug">
.page-root
  Background
  nuxt-link(to='/')
    .container
      .title.item
        | about
</template>

<script>
import Background from '~/components/pages/about/Background.vue'
import {TweenMax, Elastic, Back} from 'gsap'

export default {
  components: {
    Background
  },
  transition: {
    appear: true,
    mode: 'in-out',
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
.container
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center

.title
  display block
  text-transform uppercase
  font-size 20px
  letter-spacing 4px
  display block
  text-align center
  position relative
  font-weight 150
  padding-bottom 15px
  opacity 0

</style>
