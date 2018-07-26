<template lang="pug">
  .root
    p.name
      | 成澤 克麻(29)
    p
      | フルスタックエンジニア。Webサービス開発全般に対応可能
    p
      | 主なスキルは Ruby / Python / Perl / Javascript / Vue.js / AWS
    p
      | スタートアップで幅広く働いていた経験を活かし、様々な役職を担当可能。これまでに経営戦略/採用/マネジメント/企画/分析/マーケ/CSなどを経験。
    p
      | 大学院では自然言語処理の研究に従事。トップカンファレンスに最年少で査読論文通した経験あり。各社インターンで精力的に活動。

</template>

<style lang="stylus" scoped>
@import "/Users/katsumaPro/src/git/portfolio/assets/css/mixin.styl"
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
</style>
