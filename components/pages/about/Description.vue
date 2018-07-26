<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.name.description-fade-in
          | 成澤 克麻(29)
        p.description-fade-in
          | フルスタックエンジニア。Webサービス開発全般に対応可能
        p.description-fade-in
          | 主なスキルは Ruby / Python / Perl / Javascript / Vue.js / AWS
        p.description-fade-in
          | スタートアップで幅広く働いていた経験を活かし、様々な役職を担当可能。これまでに経営戦略/採用/マネジメント/企画/分析/マーケ/CSなどを経験。
        p.description-fade-in
          | 大学院では自然言語処理の研究に従事。トップカンファレンスに最年少で査読論文通した経験あり。各社インターンで精力的に活動。

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
  text-align left

p
  font-size 12px
  letter-spacing 3px
  line-height 2em
  padding 0 20px
  position relative
  +pc-only()
    font-size 15px
    padding 0 15%

.name
  font-size 1.2em

.description-fade-in
  opacity 0
</style>
