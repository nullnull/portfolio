<template lang="pug">
  .root
    transition(appear @enter='enter')
      img(src='~/assets/images/sunset.jpg')
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  methods: {
    async enter(el, done) {
      TweenMax.set(el, { opacity: 0 });
      // await this.$delay(3000);
      requestAnimationFrame(() => {
        TweenMax.fromTo(el, 3, {opacity: 0}, {opacity: 1.0, onComplete() {done()}})
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
  display flex
  justify-content space-around
  flex-wrap: wrap
  align-items center
  height 100vh
  width 100%
  position absolute
img
  filter brightness(60%)
  height 110vh
  left 0
  margin auto
  object-fit cover
  position absolute
  right 0
  width 100%
</style>
