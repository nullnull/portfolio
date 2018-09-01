<template lang="pug">
  .root.fade-in-on-background(:style="style")
    transition(appear @enter='enter')
      img(src='~/assets/images/sunset.jpg')
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  computed: {
    style() {
      return `height: ${this.height}px`;
    }
  },
  created() {
    if (process.browser) {
      return this.height = window.innerHeight;
    }
  },
  data() {
    return {
      height: 0,
    };
  },
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
  justify-content space-around
  position absolute
  width 100%
img
  filter brightness(60%)
  height 105%
  left 0
  margin auto
  object-fit cover
  position absolute
  right 0
  width 100%

.fade-in-on-background
  opacity 0
</style>
