<template lang="pug">
  //- scroll handler(see mixins/handleScroll.js)
  div(@touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)" @wheel="onWheel($event)")
    div
      //- Show page
      nuxt
      //- logo
      #header-logo
        img(src='~/assets/images/logo/symbol_2_wh.png')
      //- Show next page background image for wipe animation
      nextPageBackground
      //- Show menu bar
      Menu
</template>

<script>
import Menu from '~/components/Menu'
import nextPageBackground from '~/components/layouts/default/NextPageBackground'
import handleScroll from '~/mixins/handleScroll'

export default {
  components: {
    Menu,
    nextPageBackground,
  },
  mixins: [
    handleScroll,
  ],
}
</script>

<style lang="stylus" scoped>
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease

.fade-enter,
.fade-leave-to
  opacity: 0

#header-logo
  opacity 0
  position absolute
  top 0
  left 0
  width 40px
  z-index 1

  img
    padding 20px
    width 100%
</style>
