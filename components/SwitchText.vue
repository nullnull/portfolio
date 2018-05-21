<template lang="pug">
  .root
    transition(@enter="myEnter" @leave="myLeave")
      .text(v-for="(text, i) in texts" v-if="i === currentIndex" :key="i")
        | {{ text }}
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  computed: {
    texts() {
      return [
        'Photographer',
        'Web App Engineer'
      ];
    }
  },
  created() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 4000);
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    async myEnter(el, done) {
      TweenMax.set(el, { opacity: 0 });
      await this.$delay(1100);
      requestAnimationFrame(() => {
        TweenMax.to(el, 1.3, {
          opacity: 1,
          x: 0,
          startAt: {
            opacity: 0,
            x: -20,
          },
          onComplete() {
            done();
          }
        });
      });
    },
    async myLeave(el, done) {
      TweenMax.set(el, { opacity: 1 });
      requestAnimationFrame(() => {
        TweenMax.to(el, 1.3, {
          opacity: 0,
          x: 20,
          startAt: {
            opacity: 1,
            x: 0,
          },
          onComplete() {
            console.log('leave done');
            done();
          }
        });
      });
    }
  },
}
</script>

<style lang="stylus" scoped>
.root
  font-weight 100
  font-size 15px
  color #526488
  word-spacing 0px
  padding-bottom 15px
  line-height: 1.5em
  opacity 1
  position relative
.text
  position absolute
  top 0
  left 0
  right 0
  margin auto
</style>
