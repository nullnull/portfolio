<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.title.description-fade-in
          span.underline
            | 株式会社ラブグラフ
        p.subtitle.description-fade-in
          | リードエンジニア・経営陣(2016-2018)
        p.item.description-fade-in
          | 正社員エンジニア1人でWebサービス開発の全てを支える。使用技術は RubyOnRails / Vue.js / Docker / AWS など。
        p.item.description-fade-in
          | 会社規模は最大25名程度。最大で10名(インターン生/副業/業務委託)のエンジニア組織のマネジメント、採用を担当。
        p.item.description-fade-in
          | 開発以外の業務も担当、マーケティング/CS/企画/分析など、それぞれの組織体制を整え、会社を推進。また経営陣として会社の重要な意思決定に参加。在籍中、1.5億円の資金調達を実施。
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
  padding-top 5px
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
