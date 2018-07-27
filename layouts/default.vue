<template>
  <div @touchmove.prevent="doNothing($event)">
    <div class="header">
    </div>
    <nuxt/>
    <component :is="nextPageBackgroundComponent"></component>
  </div>
</template>

<script>
import indexBackground from '~/components/pages/top/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'

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
    doNothing() {},
  },
  watch: {
    '$route' (to, from) {
      this.currentPage = to.name;
    }
  },
}
</script>
