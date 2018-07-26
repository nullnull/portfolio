<template lang="pug">
  .root
    img(src='~/assets/images/me1.jpg')
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="stylus" scoped>
.root
  display flex
  justify-content space-around
  flex-wrap: wrap
  align-items center
  height 100vh
  width 100%
  top 0
  position absolute

img
  filter brightness(40%)
  height 100vh
  left 0
  margin auto
  object-fit cover
  position absolute
  right 0
  width 100%
</style>
