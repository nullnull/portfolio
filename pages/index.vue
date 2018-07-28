<template lang="pug">
.page-root
  #index
    Background
    .center-container
      TitleText.fade-in-fade-out-on-page
      SwitchText.fade-in-fade-out-on-page
      .dummy.fade-in-fade-out-on-page
    nuxt-link(to="/about")
      WaitingScroll.fade-in-fade-out-on-page
    .page-transition-items
      .wipe1-box1
      .wipe1-box2
      .wipe1-box3
</template>

<script>
import Background from '~/components/pages/top/Background'
import NextPageBackground from '~/components/pages/about/Background'
import SwitchText from '~/components/pages/top/SwitchText'
import TitleText from '~/components/pages/top/TitleText'
import WaitingScroll from '~/components/common/WaitingScroll'
import wipe1 from '~/animations/page_transitions/wipe1'
import TweenMax from 'gsap'

export default {
  components: {
    Background,
    NextPageBackground,
    SwitchText,
    TitleText,
    WaitingScroll,
  },
  transition: {
    appear: true,
    async enter (el, done) {
      await this.$delay(1000);
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.fade-in-fade-out-on-page', 1.3, {
          ease: 'ease',
          startAt: { opacity: 0, y: 5, },
          opacity: 0.9, y: 0,
          onComplete() { done() }
        }, 1)
      });
    },
    leave (el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('#index .fade-in-fade-out-on-page', 1, {opacity: 0});
      });
      wipe1(el, done, '#index');
    }
  },
}
</script>

<style lang="stylus" scoped>
#index
  font-family "DIN Next W04","Helvetica Neue",Helvetica,Arial,sans-serif
  position relative
  overflow hidden
  z-index 1
  height 100%

  .center-container
    bottom 0
    height 80px
    left 0
    margin auto
    position absolute
    right 0
    top 0

.fade-in-fade-out-on-page
  opacity 0

.next-page
  opacity 0
  z-index 0
</style>
