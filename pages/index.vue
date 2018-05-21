<template lang="pug">
html
  body
    section.container
      div
        .item.title
          | katsuma narisawa
        SwitchText.item
      .dummy.item
      WaitingScroll.item
</template>

<script>
import SwitchText from '~/components/SwitchText'
import WaitingScroll from '~/components/WaitingScroll'
import {TweenMax, Back} from 'gsap'

export default {
  components: {
    SwitchText,
    WaitingScroll,
  },
  transition: {
    appear: true,
    async enter (el, done) {
      await this.$delay(1000)
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.item', 1.3, {
          // scaleX: 1,
          y: 0,
          opacity: 1,
          // transformOrigin: 'left center',
          ease: 'ease',
          startAt: {
            // scaleX: 0,
            y: '20px',
            opacity: 0
          }
        }, 1.3)
      })
    },
    // leave (el, done) {
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
    // }
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
  color #35495e
  font-weight 150
  padding-bottom 15px
  opacity 0
</style>
