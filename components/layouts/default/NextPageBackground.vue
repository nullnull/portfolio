<template lang="pug">
  component(:is="nextPageBackgroundComponent")
</template>

<script>
import indexBackground from '~/components/pages/index/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'
import lovegraphBackground from '~/components/pages/lovegraph/Background'
import denaBackground from '~/components/pages/dena/Background'

export default {
  components: {
    indexBackground,
    aboutBackground,
    lovegraphBackground,
    denaBackground,
  },
  computed: {
    nextPageBackgroundComponent() {
      return this.currentPage + 'Background';
    }
  },
  data() {
    return {
      currentPage: 'index',
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPage = to.name;
    }
  },
}
</script>
