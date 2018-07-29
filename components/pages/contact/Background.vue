<template lang="pug">
  .root
    template(v-if='isSp()')
      img(src='~/assets/images/stars.jpg')
    template(v-else)
      img(src='~/assets/images/stars.jpg')
</template>

<script>
export default {
  methods: {}
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
  filter brightness(40%)
  height 100%
  left 0
  margin auto
  object-fit cover
  position absolute
  right 0
  width 100%
</style>
