<template lang="pug">
  .root
    transition(appear @enter='enter')
      img(src='~/assets/images/me1.jpg')
</template>

<style lang="stylus" scoped>
.root
  display flex
  justify-content space-around
  flex-wrap: wrap
  align-items center
  height 100vh
  width 100%
  position absolute
img
  position absolute
  left 0
  right 0
  margin auto
  object-fit cover
  opacity 0.5
  height 100vh
  width 100%
</style>
