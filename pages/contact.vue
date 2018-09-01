<template lang="pug">
.page-root
  #contact
    Background
    section.center-container.fade-in-fade-out-on-page
      Description
</template>

<script>
import Background from '~/components/pages/contact/Background.vue'
import Description from '~/components/pages/contact/Description.vue'
import fadein1 from '~/animations/page_transitions/fadein1'

export default {
  components: {
    Background,
    Description,
  },
  transition: {
    appear: true,
    async enter (el, done) {
      fadein1(`#contact .fade-in-fade-out-on-page`, done, 0.5);
    },
    leave() {}
  },
}
</script>

<style lang="stylus" scoped>
#contact
  position relative
  overflow hidden
  z-index 1
  height 100%

  .center-container
    bottom 0
    left 0
    height 420px
    margin auto
    position absolute
    right 0
    top 0

.fade-in-fade-out-on-page
  opacity 0
</style>
