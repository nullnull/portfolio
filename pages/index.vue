<template lang="pug">
.page-root
  #index
    Background
    .center-container
      TitleLogo.fade-in-fast-on-page.fade-out-on-page
      // SwitchText.fade-in-on-page.fade-out-on-page
      .dummy.fade-in-on-page.fade-out-on-page
    nuxt-link(to="/about")
      WaitingScroll.fade-in-on-page.fade-out-on-page
    .page-transition-items
      .wipe1-box1
      .wipe1-box2
      .wipe1-box3
        .wipe1-text1
</template>

<script>
import Background from '~/components/pages/index/Background'
import NextPageBackground from '~/components/pages/about/Background'
import SwitchText from '~/components/pages/index/SwitchText'
import TitleLogo from '~/components/pages/index/TitleLogo'
import WaitingScroll from '~/components/common/WaitingScroll'
import pageTransition1 from '~/mixins/pageTransition1'
import wipe1 from '~/animations/page_transitions/wipe1'
import fadeout1 from '~/animations/page_transitions/fadeout1'
import fadein2 from '~/animations/page_transitions/fadein2'
import TweenMax from 'gsap'

export default {
  components: {
    Background,
    NextPageBackground,
    SwitchText,
    TitleLogo,
    WaitingScroll,
  },
  transition: {
    // override
    appear: true,
    async enter (el, done) {
      await this.$delay(1000);
      requestAnimationFrame(() => {
        TweenMax.to('#index .fade-in-fast-on-page', 1.5, {
          ease: 'ease',
          opacity: 0.9
        })
      });
      await this.$delay(1000);
      fadein2('#index .fade-in-on-page', done, 2.0);
    },
    leave (el, done) {
      fadeout1(`#index .fade-out-on-page`);
      wipe1(el, done, `#index`, this.$router.currentRoute.name);
    },
  },
  mixins: [
    pageTransition1,
  ],
}
</script>

<style lang="stylus" scoped>
#index
  font-family Helvetica,Arial,sans-serif
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

.fade-in-on-page,
.fade-in-fast-on-page
  opacity 0
</style>
