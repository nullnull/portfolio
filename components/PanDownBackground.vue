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
      requestAnimationFrame(() => {
        TweenMax.fromTo(el, 4, {opacity: 0}, {opacity: 1, onComplete() {done()}})
      });
      requestAnimationFrame(() => {
        TweenMax.fromTo(el, 40, {y: 50}, {y: 0, onComplete() {done()}})
      });
    },
    // async leave(el, done) {
    //   TweenMax.set(el, { opacity: 1 });
    //   requestAnimationFrame(() => {
    //     TweenMax.to(el, 1.3, {
    //       opacity: 0,
    //       x: 10,
    //       startAt: {
    //         opacity: 1,
    //         x: 0,
    //       },
    //       onComplete() {
    //         console.log('leave done');
    //         done();
    //       }
    //     });
    //   });
    // }
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
  position absolute
  left 0
  right 0
  margin auto
  object-fit cover
  height 110vh
  width 100%
</style>
