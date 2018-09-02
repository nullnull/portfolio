<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.title.description-fade-in
          span.underline
            | 株式会社ディー・エヌ・エー
        p.subtitle.description-fade-in
          | ブラウザゲームエンジニア(2014-2016)
        p.item.description-fade-in
          | 社内最大規模のブラウザゲームタイトルの運用エンジニアを担当。Perl / MobaSif / MySQL / Backbone.js など。
        p.item.description-fade-in
          | 開発以外にも企画や分析など幅広く担当。チームの規模は30名程度。
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
  letter-spacing 3px
  text-align left

.inner
  padding 0 20px
  position relative
  +pc-only()
    padding 0 15%

.title
  font-size 18px
  line-height 0.6em
  position relative
  +pc-only()
    font-size 24px

span.underline
  text-decoration: none;
  border-bottom: 1px solid
  padding-bottom: 9px;
  padding-right -10px

.subtitle
  font-size 12px
  padding-bottom 2em
  padding-top 5px

.item
  font-size 12px
  line-height 2em
  position relative
  +pc-only()
    font-size 15px

.description-fade-in
  opacity 0
</style>
