<template lang="pug">
  .root.fade-in-on-background
    transition(appear @enter='enter')
      template(v-if='isSp()')
        img(src='~/assets/images/sunset_sp.jpg')
      template(v-else)
        img(src='~/assets/images/sunset.jpg')
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  methods: {
    async enter(el, done) {
      await this.$delay(2000);
      requestAnimationFrame(() => {
        TweenMax.fromTo('.fade-in-on-background', 3, {opacity: 0}, {opacity: 1.0, onComplete() {done()}})
      });
      requestAnimationFrame(() => {
        TweenMax.fromTo(el, 10, {y: 0}, {y: -20, onComplete() {done()}})
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
.root
  align-items center
  display flex
  flex-wrap: wrap
  height 100vh
  justify-content space-around
  position absolute
  width 100%
img
  filter brightness(60%)
  height 101vh
  left 0
  margin auto
  object-fit cover
  position absolute
  right 0
  width 100%

.fade-in-on-background
  opacity 0
</style>
