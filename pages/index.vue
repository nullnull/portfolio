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
        .wipe1-text1
</template>

<script>
import Background from '~/components/pages/index/Background'
import NextPageBackground from '~/components/pages/about/Background'
import SwitchText from '~/components/pages/index/SwitchText'
import TitleText from '~/components/pages/index/TitleText'
import WaitingScroll from '~/components/common/WaitingScroll'
import pageTransition1 from '~/mixins/pageTransition1'
import fadein1 from '~/animations/page_transitions/fadein1'

export default {
  components: {
    Background,
    NextPageBackground,
    SwitchText,
    TitleText,
    WaitingScroll,
  },
  transition: {
    // override
    appear: true,
    async enter (el, done) {
      await this.$delay(1000);
      fadein1('#index .fade-in-fade-out-on-page', done, 3.0);
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

.fade-in-fade-out-on-page
  opacity 0
</style>
