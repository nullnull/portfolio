<template lang="pug">
  component(:is="nextPageBackgroundComponent")
</template>

<script>
import indexBackground from '~/components/pages/index/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'
import lovegraphBackground from '~/components/pages/lovegraph/Background'
import denaBackground from '~/components/pages/dena/Background'
import univBackground from '~/components/pages/univ/Background'
import photographyBackground from '~/components/pages/photography/Background'
import contactBackground from '~/components/pages/contact/Background'

export default {
  components: {
    indexBackground,
    aboutBackground,
    lovegraphBackground,
    denaBackground,
    univBackground,
    photographyBackground,
    contactBackground,
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
