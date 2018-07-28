<template>
  <div @touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)">
    <div class="header">
    </div>
    <nuxt/>
    <component :is="nextPageBackgroundComponent"></component>
  </div>
</template>

<script>
import indexBackground from '~/components/pages/top/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'
import draggable from '~/plugins/draggable';

export default {
  components: {
    indexBackground,
    aboutBackground,
  },
  computed: {
    nextPageBackgroundComponent() {
      return this.currentPage + 'Background';
    }
  },
  data() {
    return {
      currentPage: 'index',
    }
  },
  methods: {
    eventWhenScrolledDown() {
      console.log('scrolled down');
    },
  },
  mixins: [draggable],
  watch: {
    '$route' (to, from) {
      this.currentPage = to.name;
    }
  },
}
</script>
