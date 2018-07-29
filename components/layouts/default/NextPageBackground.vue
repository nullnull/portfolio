<template lang="pug">
  component(:is="nextPageBackgroundComponent")
</template>

<script>
import indexBackground from '~/components/pages/top/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'

export default {
  components: {
    indexBackground,
    aboutBackground,
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
