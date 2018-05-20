<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        About
      </h1>
      <h2 class="subtitle">
        This is about page
      </h2>
      <div class="links">
        <nuxt-link
          to="/"
          class="button--green">to TOP</nuxt-link>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import {TweenMax, Elastic, Back} from 'gsap'

export default {
  components: {
    AppLogo
  },
  transition: {
    appear: false,
    enter (el, done) {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.title', 1, {
          y: 0,
          opacity: 1,
          ease: Back.easeOut.config(3),
          startAt: {
            y: '40px',
            opacity: 0
          }
        }, 0.1, () => {
          done()
        })
        TweenMax.staggerTo('.container', 1, {
          scaleX: 1,
          x: 0,
          opacity: 1,
          transformOrigin: 'left center',
          ease: Back.easeOut.config(3),
          startAt: {
            scaleX: 0,
            x: '-20px',
            opacity: 0
          }
        }, 0.1)
      })
    },
    leave (el, done) {
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.container', 0.7, {
          y: '-40px',
          opacity: 0,
          ease: Back.easeIn.config(3)
        }, 0.1, () => {
          done()
        })
        TweenMax.staggerTo('.container', 0.7, {
          scaleX: 0,
          x: '20px',
          opacity: 0,
          transformOrigin: 'right center',
          ease: Back.easeIn.config(3)
        }, 0.1)
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
