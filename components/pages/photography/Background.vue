<template lang="pug">
  .root
    transition-group(name='fade')
      img(src='~/assets/images/rubykaigi2018_b.jpg' v-show='currentIndex === 0' key=0)
</template>

<script>
const NUMBER_OF_IMAGES = 1;

export default {
  async created() {
    if (NUMBER_OF_IMAGES == 1) {
      return;
    }
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
