<template lang="pug">
  //- scroll handler(see mixins/handleScroll.js)
  div(@touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)" @wheel="onWheel($event)")
    div(v-show='isLoading')
      | loading
    div(v-show='!isLoading')
      //- Show page
      nuxt
      //- Show next page background image for wipe animation
      nextPageBackground
      //- Show menu bar
      Menu
</template>

<script>
import Menu from '~/components/Menu'
import nextPageBackground from '~/components/layouts/default/NextPageBackground'
import handleScroll from '~/mixins/handleScroll'
import imageLoader from '~/mixins/imageLoader'

export default {
  computed: {
    isLoading() {
      return !this.$store.state.allImageLoaded;
    }
  },
  components: {
    Menu,
    nextPageBackground,
  },
  mounted() {
    this.loadImage();
  },
  mixins: [
    handleScroll,
    imageLoader,
  ],
}
</script>
