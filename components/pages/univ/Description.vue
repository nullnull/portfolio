<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.title.description-fade-in
          span.underline
            | 東北大学大学院
        p.subtitle.description-fade-in
          | 情報科学研究科 乾・岡崎研究室(2012-2014)
        p.item.description-fade-in
          | 論文投稿：査読あり国際会議1本(ACL2013)、査読なし国内会議4本、第二著者として国際会議2本。当時最年少で言語処理のトップカンファレンスに論文を通す。
        p.item.description-fade-in
          | インターンシップ：株式会社Preferred Infrastructure、国立情報学研究所、NaCTeMなどでインターンシップを経験。
        p.item.description-fade-in
          | 在学中は競技プログラミングにも取り組む。codebout 準優勝、ACM-ICPC2012アジア予選出場、TOP CODERは青色くらい。
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
