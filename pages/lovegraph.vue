<template lang="pug">
.page-root
  #lovegraph
    Background
    section.center-container
      Description
    nuxt-link(to="/")
      WaitingScroll.fade-in-fade-out-on-page
</template>

<script>
import Background from '~/components/pages/lovegraph/Background.vue'
import Description from '~/components/pages/lovegraph/Description.vue'
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
    // NOTE You must implement this function to avoid bug that this component somehow inherits transition function on other page.
    leave (el, done) {
      done();
    },
  }
}
</script>

<style lang="stylus" scoped>
#lovegraph
  position relative
  overflow hidden
  z-index 1
  height 100%

  .center-container
    bottom 0
    height 60%
    left 0
    margin auto
    position absolute
    right 0
    top 0

.fade-in-fade-out-on-page
  opacity 0
</style>
