<template lang="pug">
.page-root
  #univ
    Background
    section.center-container.fade-in-fade-out-on-page
      Description
    nuxt-link(to="/photography")
      WaitingScroll.fade-in-fade-out-on-page
    .page-transition-items
      .wipe1-box1
      .wipe1-box2
      .wipe1-box3
        .wipe1-text1
</template>

<script>
import Background from '~/components/pages/univ/Background.vue'
import Description from '~/components/pages/univ/Description.vue'
import WaitingScroll from '~/components/common/WaitingScroll'
import pageTransition1 from '~/mixins/pageTransition1'

export default {
  components: {
    Background,
    Description,
    WaitingScroll
  },
  mixins: [
    pageTransition1,
  ],
}
</script>

<style lang="stylus" scoped>
#univ
  position relative
  overflow hidden
  z-index 1
  height 100%

  .center-container
    bottom 0
    left 0
    margin auto
    position absolute
    right 0
    top 0

.fade-in-fade-out-on-page
  opacity 0
</style>
