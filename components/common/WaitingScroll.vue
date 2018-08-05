<template lang="pug">
  .preloader-nav
    span
      | please scroll
</template>

<style lang="stylus" scoped>
.preloader-nav
  text-align center

.preloader-nav::after
  animation touch-dot 1.8s cubic-bezier(0.23, 1, 0.32, 1) infinite
  background-color white
  border-radius 100%
  bottom 0
  content ''
  display block
  height 8px
  line-height 0
  margin 0 auto
  position relative
  text-align center
  transition opacity 0.8s linear 2.5s,transform 1.5s cubic-bezier(0.23, 1, 0.32, 1) 2.5s
  width 8px

.preloader-nav
  -webkit-font-smoothing antialiased
  bottom 40px
  font-family 'Poppins', sans-serif
  font-size 12px
  font-style italic
  font-weight 300
  left 0
  line-height: 26px
  margin 0 auto
  position absolute
  right 0
  width 200px

span
  color rgba(255, 255, 255, 0.7)

@keyframes { touch-dot }
  0%
    opacity 0
    transform translateY(10px)
  30%
    opacity 0.7
  50%
    transform translateY(25px)
  100%
    opacity 0
    transform translateY(25px)
</style>
