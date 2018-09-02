<template lang="pug">
  .root
    .symbol
      img(src='~/assets/images/logo/symbol_2_wh.png')
    .name
      img(src='~/assets/images/logo/nametype_2_wh.png')
</template>

<style lang="stylus" scoped>
.root
  margin-top -20px
  text-align center

img
  opacity 0.9

.symbol
  img
    padding-bottom 20px
    width 20%
    +pc-only()
      width 6%

.name
  img
    padding-bottom 20px
    width 70%
    +pc-only()
      width 20%
</style>
