<template lang="pug">
  //- scroll handler(see mixins/handleScroll.js)
  div(@touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)" @wheel="onWheel($event)")
    div(v-show='allAssetsLoaded')
      //- Show page
      nuxt
      //- Show next page background image for wipe animation
      nextPageBackground
      //- Show menu bar
      Menu
    transition(name='fade')
      div(v-show='!allAssetsLoaded')
        Loading
</template>

<script>
import Menu from '~/components/Menu'
import Loading from '~/components/Loading'
import nextPageBackground from '~/components/layouts/default/NextPageBackground'
import handleScroll from '~/mixins/handleScroll'
import assetsLoader from '~/mixins/assetsLoader'

export default {
  components: {
    Loading,
    Menu,
    nextPageBackground,
  },
  mounted() {
    this.loadAssets();
  },
  mixins: [
    handleScroll,
    assetsLoader,
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
</style>
