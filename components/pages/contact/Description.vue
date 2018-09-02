<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        .more
          p.title.description-fade-in
            | More Detail
          p.item.description-fade-in
            a(href='resume201809.pdf' target='_blank')
              i.fas.fa-chevron-right
              |  resume(pdf)
        .contact
          p.title.description-fade-in
            | Contact Me
          p.email.description-fade-in
            a(href='mailto:katsuma.narisawa@gmail.com')
              | katsuma.narisawa@gmail.com
          p.sns.description-fade-in
            a(href='https://github.com/nullnull' target='_blank')
              i.fab.fa-github
            a(href='https://twitter.com/KatsumaNarisawa' target='_blank')
              i.fab.fa-twitter
            a(href='https://www.instagram.com/null_ig_/' target='_blank')
              i.fab.fa-instagram
        .thanks
          p.item.description-fade-in
            | Thanks for visiting my website.
</template>

<script>
export default {
  methods: {
    async enter (el, done) {
      await this.$delay(800);
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.description-fade-in', 0.8, {
          ease: 'ease',
          startAt: { opacity: 0, y: 20, },
          opacity: 0.9, y: 0,
          onComplete() { done() }
        }, 0.1)
      });
    },
  }
}
</script>

<style lang="stylus" scoped>
.root
  font-family 'Poppins', sans-serif
  letter-spacing 3px
  text-align left
  padding 0 5px

.inner
  padding 0 40px
  position relative
  text-align center
  border solid 2px white
  max-width 420px
  margin auto
  +pc-only()
    padding 0 10%

.more
  padding-top 20px
  padding-bottom 40px

  a
    cursor pointer

.title
  font-size 18px
  line-height 0.6em
  padding-bottom 5px
  position relative
  +pc-only()
    font-size 24px

.email
  font-size 13px
  line-height 0.6em
  padding-top 15px
  padding-bottom 15px
  position relative
  +pc-only()
    font-size 18px

span.underline
  text-decoration: none;
  border-bottom: 1px solid
  padding-bottom: 9px;
  padding-right -10px

.subtitle
  font-size 12px
  padding-bottom 2em

.item
  font-size 12px
  line-height 2em
  position relative
  +pc-only()
    font-size 15px

.sns
  i
    font-size 1.8em
    margin 10px

.thanks
  padding-top 30px
  padding-bottom 20px

  p
    font-size 0.5em

.description-fade-in
  opacity 0
</style>
