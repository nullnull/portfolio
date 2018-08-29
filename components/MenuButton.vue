<template lang="pug">
  .menu-button-root(":class"="{'is-menu-visible': isMenuVisible}")
    .circle
    .bar
      .bar-inner
        span
</template>

<script>
export default {
  props: {
    isMenuVisible: {
      required: true,
      type: Boolean,
    }
  },
}
</script>

<style lang="stylus" scoped>
.menu-button-root
  cursor pointer
  opacity 0.9

.menu-button-root:hover
  opacity 1

.circle,
.bar
  margin 10px
  height 30px
  width 30px
  position absolute
  top 0
  right 0
  transition: transform 0.3s ease-out

.circle
  border 2px solid white
  border-radius 50%

.menu-button-root:hover
  .circle
    transform scale(1.1)

.bar-inner
  margin-top 9px
  margin-left 3px

bar-span = 6
span,
span:before,
span:after,
  background-clip border-box
  background-color white
  border-radius 1px
  box-sizing border-box
  content ""
  display block
  height 2px
  margin 0
  position absolute
  transition-delay 0s
  transition-duration 0.4s
  transition-timing-function ease
  width 20px
  word-spacing 1px

span:before
  margin-top (bar-span)px

span:after
    margin-top (bar-span * 2)px


.is-menu-visible
  .circle
    opacity 0

  span
    transform: translateY(6px) translateX(0px) rotate(-45deg);

  span:before
    opacity 0

  span:after
    transform: translateY(-12px) rotate(90deg);
</style>
