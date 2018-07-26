<template lang="pug">
.page-root#index
  Background
  section.container
    div
      TitleText.fade-in-fade-out
      SwitchText.fade-in-fade-out
    .dummy.fade-in-fade-out
  nuxt-link(to="/about")
    WaitingScroll.fade-in-fade-out
  .page-transition-items
    .wipe1-box1
    .wipe1-box2
    .wipe1-box3
</template>

<script>
import Background from '~/components/pages/top/Background'
import TitleText from '~/components/pages/top/TitleText'
import SwitchText from '~/components/pages/top/SwitchText'
import WaitingScroll from '~/components/common/WaitingScroll'
import wipe1 from '~/animations/page_transitions/wipe1'
import {TweenMax, Back} from 'gsap'

export default {
  components: {
    Background,
    TitleText,
    SwitchText,
    WaitingScroll,
  },
  transition: {
    appear: true,
    mode: 'in-out',
    async enter (el, done) {
      await this.$delay(1000);
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.fade-in-fade-out', 0.1, {
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
        TweenMax.to('#index .fade-in-fade-out', 1, {opacity: 0});
      });
      wipe1(el, done, '#index');
    }
  }
}
</script>

<style lang="stylus" scoped>
#index
  font-family "DIN Next W04","Helvetica Neue",Helvetica,Arial,sans-serif
  .container
    align-items center
    display flex
    justify-content center
    min-height 100vh
    text-align center

  .fade-in-fade-out
    opacity 0
</style>
