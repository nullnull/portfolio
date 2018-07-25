<template lang="pug">
.page-root#index
  PanDownBackground
  section.container
    div
      .item.title
        | katsuma narisawa
      SwitchText.item
    .dummy.item
    nuxt-link(to="/about")
      WaitingScroll.item
  .wipe-box
  .wipe-box1
  .wipe-box2
</template>

<script>
import PanDownBackground from '~/components/PanDownBackground'
import SwitchText from '~/components/SwitchText'
import WaitingScroll from '~/components/WaitingScroll'
import {TweenMax, Back} from 'gsap'

export default {
  components: {
    PanDownBackground,
    SwitchText,
    WaitingScroll,
  },
  transition: {
    appear: true,
    mode: 'in-out',
    async enter (el, done) {
      await this.$delay(1000);
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.item', 0.1, {
          y: 0,
          opacity: 0.9,
          ease: 'ease',
          startAt: {
            y: 5,
            opacity: 0
          },
          onComplete() { done() }
        }, 0.1)
      });
    },
    leave (el, done) {
      TweenMax.set(el, { 'z-index': 1 });
      requestAnimationFrame(() => {
        TweenMax.to('.item', 1, {opacity: 0});
        TweenMax.to('.wipe-box1', 1, {height: '100vh'});
        TweenMax.to('.wipe-box2', 1, {height: '100vh', delay: 0.6 });
        TweenMax.to('#index', 1, {height: '0vh', delay: 1.0, onComplete() {
          TweenMax.set(el, { 'z-index': 0 });
          done()
        }});
      });
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

.wipe-box1,
.wipe-box2,
.wipe-box
  position absolute
  background-color black
  width 100%
  height 0
  opacity 0.5
  bottom 0

</style>
