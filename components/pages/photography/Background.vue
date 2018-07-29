<template lang="pug">
  .root
    transition-group(name='fade')
      img(src='~/assets/images/sakura_hikari.jpg' v-if='currentIndex === 0' key=0)
      img(src='~/assets/images/sakura_non.jpg' v-if='currentIndex === 1' key=1)
      img(src='~/assets/images/lovegraph4.jpg' v-if='currentIndex === 2' key=2)
      img(src='~/assets/images/rubykaigi2018_b.jpg' v-if='currentIndex === 3' key=3)
      img(src='~/assets/images/dish.jpg' v-if='currentIndex === 4' key=4)
      img(src='~/assets/images/rubykaigi2018_c.jpg' v-if='currentIndex === 5' key=5)
      img(src='~/assets/images/profile_sample.jpg' v-if='currentIndex === 6' key=6)
</template>

<script>
const NUMBER_OF_IMAGES = 7;

export default {
  async created() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % NUMBER_OF_IMAGES;
    }, 4000);
  },
  data() {
    return {
      currentIndex: 0,
    }
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
  top 0
  width 100%

img
  filter brightness(30%)
  height 100%
  left 0
  margin auto
  object-fit cover
  position absolute
  top 0
  right 0
  width 100%

.fade-enter-active,
.fade-leave-active
  transition: opacity 2.0s ease

.fade-enter,
.fade-leave-to
  opacity: 0
</style>
