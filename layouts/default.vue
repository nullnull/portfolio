<template lang="pug">
  //- scroll handler(see plugins/handleScroll.js)
  div(@touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)" @wheel="onWheel($event)")
    //- Show page
    nuxt
    //- Show next page background image for wipe animation
    nextPageBackground
    //- Show menu bar
    Menu
</template>

<script>
import Menu from '~/components/Menu'
import nextPageBackground from '~/components/layouts/default/nextPageBackground'
import handleScroll from '~/plugins/handleScroll'

export default {
  components: {
    Menu,
    nextPageBackground,
  },
  mixins: [
    handleScroll
  ],
}
</script>
