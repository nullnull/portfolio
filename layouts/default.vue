<template lang="pug">
  //- scroll handler(see plugins/handleScroll.js)
  div(@touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)" @wheel="onWheel($event)")
    nuxt
    component(:is="nextPageBackgroundComponent")
    Menu
</template>

<script>
import Menu from '~/components/Menu'
import indexBackground from '~/components/pages/top/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'
import handleScroll from '~/plugins/handleScroll'

export default {
  components: {
    Menu,
    indexBackground,
    aboutBackground,
  },
  computed: {
    nextPageBackgroundComponent() {
      return this.currentPage + 'Background';
    }
  },
  mixins: [
    handleScroll
  ],
  watch: {
    '$route' (to, from) {
      this.currentPage = to.name;
    }
  },
}
</script>
