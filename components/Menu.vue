<template lang="pug">
  .root
    .menu(v-show="menuVisibility" @click='hideMenu')
      .inner
        p.fade-in-on-menu(@click="goPage('/')")
          | top
        p.fade-in-on-menu(@click="goPage('/about')")
          | about me
        p.fade-in-on-menu(@click="goPage('/lovegraph')")
          | history
        p.fade-in-on-menu(@click="goPage('/photography')")
          | photography
        p.fade-in-on-menu(@click="goPage('/contact')")
          | contact
    #menu-button.button(@click='toggleMenu')
      MenuButton(':isMenuVisible'='menuVisibility')
</template>

<script>
import {TweenMax} from 'gsap'
import MenuButton from '~/components/MenuButton'

export default {
  components: {
    MenuButton,
  },
  computed: {
    menuVisibility() {
      return this.$store.state.menuVisibility;
    }
  },
  methods: {
    goPage(path) {
      this.hideMenu();
      this.$router.push(path);
    },
    showMenu() {
      document.querySelector('.page-root').classList.add("blur")
      this.$store.commit('showMenu');

      requestAnimationFrame(() => {
        TweenMax.staggerTo('.fade-in-on-menu', 0.8, {
          delay: 0.2,
          ease: 'ease',
          startAt: { opacity: 0, y: 10, },
          opacity: 0.7, y: 0,
        }, 0.1)
      });
    },
    async hideMenu() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.fade-in-on-menu', 0.3, {
          ease: 'ease',
          opacity: 0, y: 10,
          onComplete() {
            document.querySelector('.page-root').classList.remove("blur");
          }
        }, 0.05)
      });
      await this.$delay(500);
      this.$store.commit('hideMenu');
    },
    toggleMenu() {
      if (this.menuVisibility) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.root
  position absolute
  top 0px
  z-index 1
  height 50px
  width 100%

#menu-button
  position absolute
  top 0
  right 0
  opacity 0

.menu
  position relative
  height 100vh

.inner
  position absolute
  left 0
  top 0
  bottom 0
  right 0
  margin auto
  width 100%
  height 480px

p
  cursor pointer
  font-family 'Poppins', sans-serif
  font-size 20px
  font-weight 200
  letter-spacing 10px
  margin auto
  text-transform uppercase
  line-height 3em
  transition letter-spacing 0.3s
  opacity 0.5
  transform translateY(0px)

p:hover
  letter-spacing 15px
  opacity 1.0
  transform translateY(-10px)

.fade-in-on-menu
  opacity 0
</style>
