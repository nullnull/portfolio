<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.title.description-fade-in
          span.underline
            | 写真
        p.subtitle.description-fade-in
        //-  | 情報科学研究科 乾・岡崎研究室(2012-2014)
        p.item.description-fade-in
          | フォトグラファーとしても活動中。
        p.item.description-fade-in
          | プロフィール写真撮影、カンファレンスカメラマンのご依頼など、お気軽にお問い合わせください。
        p.item.description-fade-in
          | 実績：「一度きりの人生 絶対に行きたい夢の旅 50」カバー写真を撮影、第三回Stepフォトコンテスト入選、弘前の夜桜写真がTwitterで4.5万RTなど。RubyKaigi2018公式カメラマン。
        p.item.description-fade-in
          | ※このサイトで使用している写真は全て自分の写真です。
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

.item
  font-size 12px
  line-height 2em
  position relative
  +pc-only()
    font-size 15px

.description-fade-in
  opacity 0
</style>
