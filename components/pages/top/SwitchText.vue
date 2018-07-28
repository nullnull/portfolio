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
  async created() {
    await this.$delay(2000);
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
            x: -10,
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
          x: 10,
          startAt: {
            opacity: 1,
            x: 0,
          },
          onComplete() {
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
  font-size 15px
  font-weight 200
  line-height: 1.5em
  padding-bottom 15px
  position relative
  word-spacing 0px

.text
  left 0
  margin auto
  position absolute
  right 0
  top 0
</style>
