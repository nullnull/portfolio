<template lang="pug">
  .preloader-nav
    span
      | please scroll
</template>

<style lang="stylus" scoped>
.preloader-nav::after
  content ''
  display block
  position relative
  width 8px
  height 8px
  background-color white
  border-radius 100%
  margin 0 auto
  bottom 0
  line-height 0
  text-align center
  animation touch-dot 1.8s cubic-bezier(0.23, 1, 0.32, 1) infinite
  transition opacity 0.8s linear 2.5s,transform 1.5s cubic-bezier(0.23, 1, 0.32, 1) 2.5s

.preloader-nav
  font-style italic
  font-family "ff-tisa-web-pro",serif
  font-weight 50
  line-height: 26px
  position absolute
  -webkit-font-smoothing antialiased
  font-size 12px
  opacity 0
  bottom 40px
  left 0
  right 0
  margin 0 auto
  width 200px

@keyframes { touch-dot }
  0%
    opacity 0
    transform translateY(10px)
  30%
    opacity 0.8
  50%
    transform translateY(25px)
  100%
    opacity 0
    transform translateY(25px)
</style>
