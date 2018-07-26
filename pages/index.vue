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
  .page-transition-items
    .wipe1-box1
    .wipe1-box2
    .wipe1-box3
</template>

<script>
import PanDownBackground from '~/components/PanDownBackground'
import SwitchText from '~/components/SwitchText'
import WaitingScroll from '~/components/WaitingScroll'
import wipe1 from '~/animations/page_transitions/wipe1'
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
      requestAnimationFrame(() => {
        TweenMax.to('.item', 1, {opacity: 0});
      });
      wipe1(el, done, '#index');
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
  text-align center
  position relative
  font-weight 150
  padding-bottom 15px
  opacity 0
</style>
